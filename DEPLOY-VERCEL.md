# 🚀 DEPLOY NA VERCEL - PASSO A PASSO

## ⚠️ IMPORTANTE: Estrutura correta já criada!

Este projeto agora tem a estrutura correta do Next.js:

```
nextjs-project/
├── pages/               ← OBRIGATÓRIO para Next.js
│   ├── index.js        ← Página inicial
│   ├── _app.js         ← Configuração global
│   └── _document.js    ← Configuração de HTML
├── components/          
│   └── ImpostorLanding.jsx
├── lib/
│   ├── firebase-config.js
│   └── auth-payment.js
├── styles/
│   └── globals.css
├── public/
│   └── images/         ← Coloque suas imagens aqui
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎯 PASSO A PASSO PARA DEPLOY

### 1️⃣ Prepare o Repositório GitHub

```bash
# Navegue até a pasta do projeto
cd nextjs-project

# Inicialize o Git (se ainda não fez)
git init

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Deploy inicial: Landing page Ebook Vivo"

# Conecte ao seu repositório GitHub
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Faça o push
git branch -M main
git push -u origin main
```

### 2️⃣ Deploy na Vercel

1. **Acesse:** https://vercel.com/
2. **Faça login** com GitHub
3. **Clique em "Add New..." → "Project"**
4. **Selecione seu repositório**
5. **Configure:**
   - Framework Preset: **Next.js** (deve detectar automaticamente)
   - Root Directory: **nextjs-project** (ou deixe em branco se o projeto está na raiz)
   - Build Command: `npm run build` (já configurado)
   - Output Directory: `.next` (já configurado)
6. **Clique em "Deploy"**
7. **Aguarde 2-3 minutos** ⏳
8. **✅ PRONTO!** Seu site estará no ar!

---

## 🔧 Se der ERRO na Vercel

### Erro: "Couldn't find any pages directory"

**Causa:** Você fez push da pasta errada  
**Solução:** 

```bash
# Certifique-se de estar NA PASTA nextjs-project
cd nextjs-project
git init
git add .
git commit -m "Estrutura correta"
git push
```

**OU** na Vercel, configure:
- Root Directory: `nextjs-project`

### Erro: "Module not found: Can't resolve..."

**Causa:** Dependências faltando  
**Solução:** Certifique-se que o `package.json` tem todas as dependências:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "firebase": "^10.7.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6"
  }
}
```

---

## 📁 ADICIONAR SUAS IMAGENS

1. **Coloque suas imagens em:** `public/images/`
   - `espelho.jpg` - Imagem do espelho/personagem
   - `einstein.jpg` - Foto de Einstein
   - `michelle.jpg` - Foto de Michelle Obama

2. **No código, use:**
   ```jsx
   <img src="/images/espelho.jpg" alt="O Impostor" />
   ```

---

## 🔐 CONFIGURAR FIREBASE (depois do deploy)

1. **Vá para:** https://console.firebase.google.com/
2. **Configure Authentication, Firestore, Storage**
3. **Copie as credenciais**
4. **Edite:** `lib/firebase-config.js`
5. **Faça commit e push:**
   ```bash
   git add .
   git commit -m "Adiciona credenciais Firebase"
   git push
   ```
6. **Vercel fará re-deploy automaticamente!**

---

## 🎨 PERSONALIZAR

### Trocar cores:
- Procure por `#d4af37` (dourado) e substitua
- Procure por `#0a0e1a` (preto) e substitua

### Editar textos:
- Edite `components/ImpostorLanding.jsx`

### Adicionar páginas:
- Crie novos arquivos em `pages/`
- Exemplo: `pages/obrigado.js` → Acessível em `/obrigado`

---

## ✅ CHECKLIST PÓS-DEPLOY

- [ ] Site carregando corretamente
- [ ] Imagens substituídas (espelho, Einstein, Michelle)
- [ ] Firebase configurado
- [ ] Testes de cadastro funcionando
- [ ] PagBank integrado
- [ ] Domínio personalizado configurado (opcional)

---

## 🆘 PRECISA DE AJUDA?

**Site não carrega:**
- Verifique os logs na Vercel (aba "Deployments")
- Veja se tem erros de build

**Página em branco:**
- Abra o Console do navegador (F12)
- Veja se tem erros JavaScript

**Firebase não conecta:**
- Verifique se copiou TODAS as credenciais
- Veja se ativou Authentication e Firestore no Firebase Console

---

## 🎉 PARABÉNS!

Se chegou até aqui, seu Ebook Vivo está no ar! 🚀

**Próximos passos:**
1. Configurar PagBank
2. Criar página do Ebook
3. Adicionar vídeos
4. Sistema de leitura automática

**Boa sorte com o lançamento!** 💪
