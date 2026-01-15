// EXEMPLO DE BACKEND - Firebase Function para PagBank
// Coloque este arquivo em /functions/index.js se usar Firebase Functions

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();

// ==================== CRIAR PAGAMENTO ====================

exports.createPayment = functions.https.onCall(async (data, context) => {
  // Verifica se usuário está autenticado
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Usuário não autenticado');
  }

  const { email, amount } = data;
  const userId = context.auth.uid;

  try {
    // IMPORTANTE: Substitua pelo seu token do PagBank
    const PAGBANK_TOKEN = functions.config().pagbank.token;

    // Cria pedido no PagBank
    const response = await axios.post(
      'https://ws.pagseguro.uol.com.br/v2/checkout',
      {
        email: 'SEU_EMAIL_PAGBANK@email.com',
        token: PAGBANK_TOKEN,
        currency: 'BRL',
        itemId1: '0001',
        itemDescription1: 'Ebook Vivo - O Impostor Dentro de Você',
        itemAmount1: amount.toFixed(2),
        itemQuantity1: 1,
        reference: userId, // ID do usuário para identificar depois
        senderEmail: email,
        redirectURL: 'https://seu-site.com/sucesso',
        notificationURL: 'https://seu-site.com/api/webhook'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    // Salva pedido no Firestore
    await admin.firestore().collection('orders').add({
      userId,
      email,
      amount,
      status: 'pending',
      pagbankCode: response.data.code,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Retorna URL de pagamento
    return {
      success: true,
      paymentUrl: `https://pagseguro.uol.com.br/v2/checkout/payment.html?code=${response.data.code}`
    };

  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    throw new functions.https.HttpsError('internal', 'Erro ao processar pagamento');
  }
});

// ==================== WEBHOOK DO PAGBANK ====================

exports.pagbankWebhook = functions.https.onRequest(async (req, res) => {
  try {
    const notificationCode = req.body.notificationCode;
    
    if (!notificationCode) {
      return res.status(400).send('Código de notificação não fornecido');
    }

    // Consulta transação no PagBank
    const PAGBANK_TOKEN = functions.config().pagbank.token;
    const response = await axios.get(
      `https://ws.pagseguro.uol.com.br/v3/transactions/notifications/${notificationCode}`,
      {
        params: {
          email: 'SEU_EMAIL_PAGBANK@email.com',
          token: PAGBANK_TOKEN
        }
      }
    );

    const transaction = response.data.transaction;
    const userId = transaction.reference; // ID do usuário que salvamos
    const status = transaction.status;

    // Status 3 = Pago, 4 = Disponível
    if (status === '3' || status === '4') {
      // Libera acesso ao ebook
      await admin.firestore().collection('users').doc(userId).update({
        hasAccess: true,
        paidAt: admin.firestore.FieldValue.serverTimestamp(),
        transactionId: transaction.code
      });

      // Atualiza pedido
      const ordersRef = admin.firestore().collection('orders');
      const orderQuery = await ordersRef.where('userId', '==', userId).get();
      
      if (!orderQuery.empty) {
        await orderQuery.docs[0].ref.update({
          status: 'completed',
          completedAt: admin.firestore.FieldValue.serverTimestamp()
        });
      }

      // Você pode enviar email de confirmação aqui
      // usando SendGrid, Mailgun, etc.
    }

    res.status(200).send('OK');

  } catch (error) {
    console.error('Erro no webhook:', error);
    res.status(500).send('Erro ao processar notificação');
  }
});

// ==================== CRIAR PIX (ALTERNATIVA MODERNA) ====================

exports.createPixPayment = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Usuário não autenticado');
  }

  const { email, amount } = data;
  const userId = context.auth.uid;

  try {
    // Usando a API moderna do PagBank para PIX
    const PAGBANK_TOKEN = functions.config().pagbank.token;

    const response = await axios.post(
      'https://api.pagseguro.com/orders',
      {
        reference_id: userId,
        customer: {
          email: email
        },
        items: [{
          reference_id: 'ebook-impostor',
          name: 'Ebook Vivo - O Impostor Dentro de Você',
          quantity: 1,
          unit_amount: Math.round(amount * 100) // Centavos
        }],
        qr_codes: [{
          amount: {
            value: Math.round(amount * 100)
          }
        }],
        notification_urls: [
          'https://seu-site.com/api/webhook'
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${PAGBANK_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Salva no Firestore
    await admin.firestore().collection('orders').add({
      userId,
      email,
      amount,
      status: 'pending',
      orderId: response.data.id,
      qrCode: response.data.qr_codes[0].text,
      qrCodeImage: response.data.qr_codes[0].links[0].href,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    return {
      success: true,
      qrCode: response.data.qr_codes[0].text,
      qrCodeImage: response.data.qr_codes[0].links[0].href,
      orderId: response.data.id
    };

  } catch (error) {
    console.error('Erro ao criar PIX:', error);
    throw new functions.https.HttpsError('internal', 'Erro ao gerar PIX');
  }
});
