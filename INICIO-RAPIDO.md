# 🚀 INÍCIO RÁPIDO - Landing Page

## OPÇÃO 1: Testar AGORA (sem configuração)

1. **Abra o arquivo `landing-page-standalone.html`** no seu navegador
   - Simplesmente clique duas vezes no arquivo
   - Funciona offline, sem precisar configurar nada

2. **Personalize:**
   - Substitua a div do espelho pela sua imagem
   - Adicione fotos de Einstein e Michelle Obama
   - Edite os textos se quiser

**Pronto!** Você já pode ver como ficou a página.

---

## OPÇÃO 2: Deploy Completo (com Firebase + PagBank)

### Siga estas etapas em ORDEM:

### ✅ PASSO 1: Configure Firebase (15 minutos)
```
1. Vá para: https://console.firebase.google.com/
2. Crie novo projeto
3. Ative Authentication (Email/Senha)
4. Ative Firestore Database
5. Ative Storage
6. Copie suas credenciais
7. Cole em firebase-config.js
```

### ✅ PASSO 2: Configure PagBank (10 minutos)
```
1. Acesse: https://pagseguro.uol.com.br/
2. Crie/faça login na conta
3. Valide sua conta (necessário para receber pagamentos)
4. Vá em Integrações → API
5. Gere seu Token
6. Guarde o token (você vai precisar depois)
```

### ✅ PASSO 3: Instale o projeto (5 minutos)
```bash
# No terminal/prompt de comando:
cd pasta-do-projeto
npm install
npm run dev
```

Acesse: http://localhost:3000

### ✅ PASSO 4: Deploy na Vercel (10 minutos)
```
1. Crie conta na Vercel (https://vercel.com)
2. Conecte seu GitHub
3. Faça push do código
4. Importe projeto na Vercel
5. Deploy!
```

**Seu site estará no ar! 🎉**

---

## 📁 ARQUIVOS IMPORTANTES

### Para testar visual:
- `landing-page-standalone.html` ← **Abra este no navegador**

### Para produção (Next.js + Firebase):
- `impostor-landing.jsx` ← Componente React principal
- `firebase-config.js` ← Configure suas credenciais aqui
- `auth-payment.js` ← Funções de login/pagamento
- `backend-example.js` ← Exemplo de backend (Firebase Functions)

### Documentação:
- `README.md` ← Guia completo e detalhado

---

## 🎨 PERSONALIZAÇÕES ESSENCIAIS

### 1. Substituir imagem do espelho:

**No HTML:**
```html
<!-- Procure por esta div e substitua por: -->
<img src="sua-imagem-espelho.jpg" alt="O Impostor" class="w-full h-full object-cover rounded-lg">
```

**No JSX:**
```jsx
// Procure por <Camera size={48}... e substitua por:
<img src="/images/espelho.jpg" alt="O Impostor" className="w-full h-full object-cover rounded-lg" />
```

### 2. Adicionar fotos de Einstein e Michelle:

```html
<!-- Substitua os emojis 🧠 e 👑 por: -->
<img src="einstein.jpg" class="w-full h-full object-cover" />
<img src="michelle.jpg" class="w-full h-full object-cover" />
```

### 3. Cores personalizadas:

Procure por `#d4af37` (dourado) no código e substitua pela cor que preferir.

---

## 🆘 PROBLEMAS COMUNS

### "npm não é reconhecido"
→ Instale o Node.js: https://nodejs.org/

### "Firebase não conecta"
→ Verifique se copiou TODAS as credenciais em firebase-config.js

### "Página não carrega"
→ Verifique se está rodando `npm run dev` no terminal

### "PagBank não funciona"
→ Você precisa implementar o backend (backend-example.js)

---

## 💡 PRÓXIMOS PASSOS

Depois que a landing page estiver funcionando:

1. ✅ Página de login funcionando
2. ✅ Integração PagBank completa
3. 🔲 Criar página do Ebook com efeito de virar página
4. 🔲 Adicionar vídeos ao ebook
5. 🔲 Implementar leitura automática
6. 🔲 Sistema de progresso e bookmarks

---

## 📞 CONTATO

Dúvidas? Revise o README.md completo.

**Boa sorte com o lançamento! 🚀**
