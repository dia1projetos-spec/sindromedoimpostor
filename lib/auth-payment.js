// auth-payment.js
// Funções para autenticação Firebase e integração PagBank

import { auth, db } from './firebase-config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// ==================== AUTENTICAÇÃO ====================

/**
 * Cria nova conta de usuário
 */
export const createAccount = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Salva dados iniciais do usuário no Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      createdAt: new Date().toISOString(),
      hasAccess: false, // Será true após pagamento confirmado
      lastPage: 0, // Para salvar progresso de leitura
      bookmarks: [] // Para páginas favoritadas
    });
    
    return { success: true, user };
  } catch (error) {
    console.error('Erro ao criar conta:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Faz login do usuário
 */
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Verifica se usuário tem acesso
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const hasAccess = userDoc.data()?.hasAccess || false;
    
    return { success: true, user, hasAccess };
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Faz logout do usuário
 */
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    return { success: false, error: error.message };
  }
};

// ==================== PAGBANK ====================

/**
 * Inicia processo de pagamento no PagBank
 * Você precisa ter um backend para gerar o pedido de forma segura
 */
export const initiatePagBankPayment = async (userId, userEmail) => {
  try {
    // IMPORTANTE: Este é um exemplo simplificado
    // Você DEVE criar um backend (pode ser Firebase Functions) para:
    // 1. Gerar o pedido no PagBank de forma segura
    // 2. Não expor suas credenciais no frontend
    
    const response = await fetch('SUA_URL_DE_BACKEND/create-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        email: userEmail,
        amount: 60.00,
        description: 'Ebook Vivo - O Impostor Dentro de Você'
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      // PagBank retorna uma URL de pagamento ou QR Code PIX
      return {
        success: true,
        paymentUrl: data.paymentUrl, // URL para redirecionar usuário
        qrCode: data.qrCode, // QR Code PIX (se escolher PIX)
        orderId: data.orderId
      };
    }
    
    return { success: false, error: 'Erro ao criar pagamento' };
  } catch (error) {
    console.error('Erro ao iniciar pagamento:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Webhook do PagBank chamará esta função quando pagamento for confirmado
 * (Deve ser implementado no backend)
 */
export const handlePaymentConfirmation = async (userId) => {
  try {
    // Atualiza status do usuário no Firestore
    await setDoc(doc(db, 'users', userId), {
      hasAccess: true,
      paidAt: new Date().toISOString()
    }, { merge: true });
    
    // Envia email de confirmação (pode usar Firebase Functions + SendGrid/Mailgun)
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao confirmar pagamento:', error);
    return { success: false, error: error.message };
  }
};

// ==================== PROGRESSO DE LEITURA ====================

/**
 * Salva página atual do usuário
 */
export const saveProgress = async (userId, pageNumber) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      lastPage: pageNumber,
      lastReadAt: new Date().toISOString()
    }, { merge: true });
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Adiciona bookmark (página favorita)
 */
export const addBookmark = async (userId, pageNumber) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    const bookmarks = userDoc.data()?.bookmarks || [];
    
    if (!bookmarks.includes(pageNumber)) {
      bookmarks.push(pageNumber);
      await setDoc(doc(db, 'users', userId), {
        bookmarks
      }, { merge: true });
    }
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao adicionar bookmark:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Carrega dados do usuário
 */
export const getUserData = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    return { success: true, data: userDoc.data() };
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return { success: false, error: error.message };
  }
};
