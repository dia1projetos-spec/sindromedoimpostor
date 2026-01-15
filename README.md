# 🔥 O IMPOSTOR DENTRO DE VOCÊ - Ebook Vivo

## 📚 Guia Completo de Instalação e Deploy

### 🎯 PASSO 1: Configurar Firebase

1. **Acesse o Firebase Console**
   - Vá para: https://console.firebase.google.com/
   - Faça login com sua conta Google
   - Clique em "Adicionar projeto"

2. **Crie seu projeto**
   - Nome: "impostor-ebook" (ou o que preferir)
   - Desative o Google Analytics (opcional para começar)
   - Clique em "Criar projeto"

3. **Configure Authentication**
   - No menu lateral, vá em "Authentication"
   - Clique em "Começar"
   - Ative o método "Email/Senha"

4. **Configure Firestore Database**
   - No menu lateral, vá em "Firestore Database"
   - Clique em "Criar banco de dados"
   - Escolha "Iniciar no modo de teste" (por enquanto)
   - Escolha a localização: "southamerica-east1 (São Paulo)"

5. **Configure Storage (para vídeos)**
   - No menu lateral, vá em "Storage"
   - Clique em "Começar"
   - Aceite as regras padrão

6. **Pegue suas credenciais**
   - No menu lateral, clique no ⚙️ (Configurações do projeto)
   - Role até "Seus aplicativos"
   - Clique no ícone </> (Web)
   - Registre seu app: "Impostor Ebook"
   - Copie as credenciais que aparecem
   - Cole no arquivo `firebase-config.js`

### 🎯 PASSO 2: Configurar PagBank

1. **Crie conta no PagBank**
   - Acesse: https://pagseguro.uol.com.br/
   - Crie sua conta (pode usar CPF)
   - Valide sua conta

2. **Acesse área de desenvolvedores**
   - Entre no PagBank
   - Vá em Menu → Integrações → API
   - Gere um Token de Produção (depois de validar conta)

3. **Configure Webhook**
   - Vá em Configurações → Preferências → Notificações
   - Configure URL do webhook (você vai precisar de um backend)
   - URL será algo como: `https://seu-dominio.com/api/webhook`

⚠️ **IMPORTANTE SOBRE PAGBANK:**
O PagBank exige um backend para segurança. Você tem 3 opções:

**OPÇÃO A - Firebase Functions (Recomendado)**
- Crie funções serverless no próprio Firebase
- Custo: Grátis até 2 milhões de chamadas/mês
- Tutorial: https://firebase.google.com/docs/functions

**OPÇÃO B - Vercel Serverless Functions**
- Use as APIs da Vercel (você já vai hospedar lá)
- Crie pasta `/pages/api` com suas funções
- Gratuito no plano hobby

**OPÇÃO C - Backend separado**
- Node.js + Express em servidor próprio
- Mais complexo, mas mais controle

### 🎯 PASSO 3: Configurar Projeto Localmente

1. **Instale Node.js**
   - Baixe em: https://nodejs.org/
   - Versão recomendada: 18 ou superior

2. **Descompacte o projeto**
   ```bash
   # Extraia o ZIP para uma pasta
   cd impostor-ebook-vivo
   ```

3. **Instale dependências**
   ```bash
   npm install
   ```

4. **Configure suas credenciais**
   - Abra `firebase-config.js`
   - Cole suas credenciais do Firebase

5. **Rode localmente**
   ```bash
   npm run dev
   ```
   - Acesse: http://localhost:3000

### 🎯 PASSO 4: Deploy na Vercel

1. **Crie conta na Vercel**
   - Acesse: https://vercel.com/
   - Faça login com GitHub

2. **Conecte seu projeto ao GitHub**
   - Crie um repositório no GitHub
   - Faça push do seu código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/SEU_USUARIO/impostor-ebook.git
   git push -u origin main
   ```

3. **Importe projeto na Vercel**
   - Na Vercel, clique em "Add New..." → "Project"
   - Selecione seu repositório do GitHub
   - Clique em "Import"

4. **Configure variáveis de ambiente** (se usar)
   - Em "Environment Variables"
   - Adicione suas keys sensíveis
   - Ex: `PAGBANK_TOKEN`, `FIREBASE_PRIVATE_KEY`, etc.

5. **Deploy!**
   - Clique em "Deploy"
   - Aguarde o build
   - Sua URL estará pronta: `seu-projeto.vercel.app`

### 🎯 PASSO 5: Domínio Personalizado (Opcional)

1. **Compre um domínio**
   - Registro.br, GoDaddy, Namecheap, etc.

2. **Configure na Vercel**
   - Vá em Settings → Domains
   - Adicione seu domínio
   - Siga instruções de DNS

### 📁 Estrutura de Arquivos

```
impostor-ebook-vivo/
├── pages/
│   ├── index.js              # Landing page (use o código do .jsx)
│   ├── ebook.js              # Página do ebook (criar depois)
│   └── api/
│       ├── webhook.js        # Webhook do PagBank
│       └── create-payment.js # Criar pagamento
├── components/
│   └── EbookViewer.js        # Componente do ebook (criar depois)
├── firebase-config.js        # Suas credenciais Firebase
├── auth-payment.js           # Funções de auth e pagamento
├── package.json              # Dependências
└── README.md                 # Este arquivo
```

### 🔧 Funcionalidades Implementadas

✅ Landing page responsiva  
✅ Formulário de cadastro  
✅ Integração Firebase Auth  
✅ Sistema de login  
✅ Estrutura para pagamento PagBank  
✅ Sistema de progresso de leitura  
✅ Sistema de bookmarks  

### 📝 Próximos Passos (Depois de configurar)

1. **Substituir imagem placeholder**
   - Na landing page, substitua a div do espelho pela sua imagem real

2. **Adicionar fotos Einstein e Michelle**
   - Substitua os emojis pelas fotos reais (PNG/JPG)

3. **Criar página do Ebook**
   - Componente com efeito de virar página
   - Integração de vídeos
   - Leitura automática

4. **Configurar Webhook PagBank**
   - Criar função que recebe confirmação
   - Liberar acesso automaticamente

### 🆘 Precisa de Ajuda?

**Problemas comuns:**

1. **Erro ao fazer deploy**
   - Verifique se todas as dependências estão no package.json
   - Rode `npm run build` localmente para testar

2. **Firebase não conecta**
   - Verifique se copiou todas as credenciais corretamente
   - Veja se ativou Authentication e Firestore

3. **PagBank não funciona**
   - Você precisa de um backend (Functions)
   - Não dá para chamar API do PagBank direto do frontend

### 💰 Custos Estimados

**Grátis para começar:**
- Firebase: Plano Spark (grátis até 50k leituras/dia)
- Vercel: Plano Hobby (grátis, ilimitado)
- PagBank: Sem mensalidade, só taxa por transação

**Quando crescer:**
- Firebase: ~$25/mês para 100 usuários ativos
- PagBank: 0,99% (PIX) a 4,99% (cartão) por transação
- Vercel: Continua grátis para sites pequenos

### 🎨 Personalizações Futuras

- Adicionar mais animações
- Sistema de afiliados
- Painel admin para editar conteúdo
- Notificações push
- App mobile (React Native)

---

**Criado por: Claude**  
**Para: Henrique Siqueira**  
**Projeto: O Impostor Dentro de Você - Ebook Vivo**
