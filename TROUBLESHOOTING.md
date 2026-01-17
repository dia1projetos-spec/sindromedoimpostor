# 🔧 GUIA DE CORREÇÃO - GitHub Pages

## ❌ Problema: CSS e JS não carregam

Você vê o HTML mas sem estilo/funcionalidade.

---

## ✅ SOLUÇÕES (teste nesta ordem):

### Solução 1: Verificar Estrutura de Pastas

**No seu repositório GitHub, a estrutura DEVE estar assim:**

```
seu-repositorio/
├── index.html
├── .nojekyll          ← IMPORTANTE!
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── capa-ebook.png
```

**ATENÇÃO:** 
- As pastas devem ter nomes em **minúsculas**: `css`, `js`, `images`
- NÃO pode ser: `CSS`, `Css`, `JS`, etc.

---

### Solução 2: Adicionar arquivo .nojekyll

1. No seu repositório GitHub
2. Clique em "Add file" → "Create new file"
3. Nome do arquivo: `.nojekyll` (com o ponto na frente!)
4. Deixe o arquivo vazio
5. Commit

**Por quê?** GitHub Pages usa Jekyll por padrão, que ignora pastas começando com `_`. O `.nojekyll` desativa isso.

---

### Solução 3: Verificar GitHub Pages Settings

1. Vá em **Settings** do repositório
2. Clique em **Pages** (menu lateral)
3. Em **Source**, selecione:
   - Branch: `main` (ou `master`)
   - Folder: `/ (root)`
4. Clique em **Save**
5. Aguarde 2-3 minutos
6. Recarregue a página (Ctrl + F5 para limpar cache)

---

### Solução 4: Limpar Cache do Navegador

O navegador pode estar usando versão antiga sem CSS/JS:

**Chrome/Edge:**
- Ctrl + Shift + Delete
- Selecione "Imagens e arquivos em cache"
- Limpar

**Ou simplesmente:**
- Ctrl + F5 (recarregar forçado)

---

### Solução 5: Verificar Console de Erros

1. Abra a página
2. Pressione **F12** (abrir DevTools)
3. Vá na aba **Console**
4. Veja se tem erros em vermelho
5. Me mande print dos erros se tiver

Erros comuns:
- `404 Not Found` → arquivo não existe ou caminho errado
- `CORS error` → problema de permissão
- `Failed to load resource` → caminho errado

---

### Solução 6: Testar Localmente Primeiro

Antes de subir pro GitHub:

1. Abra `index.html` no navegador (duplo clique)
2. Se funcionar localmente mas não no GitHub → problema de configuração do GitHub
3. Se NÃO funcionar localmente → problema nos arquivos

---

### Solução 7: Verificar Caminhos dos Arquivos

Abra `index.html` e verifique se está assim:

```html
<!-- No HEAD -->
<link rel="stylesheet" href="./css/style.css">

<!-- Antes de fechar </body> -->
<script src="./js/script.js"></script>
```

**Importante:** Tem que ter o `./` na frente!

---

### Solução 8: Case-Sensitive

GitHub é case-sensitive (diferencia maiúsculas de minúsculas):

❌ **ERRADO:**
- Pasta: `CSS` → Arquivo referencia: `css`
- Pasta: `Images` → Arquivo referencia: `images`

✅ **CERTO:**
- Tudo em minúsculas: `css/`, `js/`, `images/`

---

### Solução 9: Verificar URL do GitHub Pages

Sua URL deve ser algo como:
```
https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/
```

Se você está acessando:
```
https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO
```

Isso é o repositório, NÃO o site! Use a URL do GitHub Pages.

---

### Solução 10: Reenviar Arquivos

Se nada funcionar:

1. **Delete o repositório** no GitHub
2. **Crie um novo** repositório
3. **Faça upload** dos arquivos novamente:
   - Arraste TODA a pasta (com subpastas)
   - OU use Git:
   
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git push -u origin main
```

4. **Configure GitHub Pages** novamente
5. **Adicione `.nojekyll`**

---

## 🎯 CHECKLIST RÁPIDO

Antes de pedir ajuda, verifique:

- [ ] Estrutura de pastas está correta?
- [ ] Arquivo `.nojekyll` existe na raiz?
- [ ] GitHub Pages está ativado?
- [ ] Branch correto selecionado (main/master)?
- [ ] Aguardou 2-3 minutos após fazer push?
- [ ] Limpou cache do navegador (Ctrl + F5)?
- [ ] Nomes das pastas em minúsculas?
- [ ] Caminhos no HTML com `./`?
- [ ] Testou localmente e funciona?
- [ ] Está acessando a URL correta (.github.io)?

---

## 📸 Como Me Enviar Print para Ajudar

Se ainda não funcionar, me mande prints de:

1. **Estrutura do repositório** (lista de arquivos no GitHub)
2. **Console de erros** (F12 → Console)
3. **GitHub Pages settings** (Settings → Pages)
4. **URL que você está acessando**

---

## 🚀 Solução Alternativa - Netlify

Se GitHub Pages está dando problema, use Netlify (mais simples):

1. Vá em https://app.netlify.com/drop
2. Arraste a pasta completa (com css, js, images)
3. ✅ Deploy instantâneo!
4. Funciona 100% garantido

---

## 💡 Mais Provável

Na maioria dos casos, o problema é:
1. **Falta do arquivo `.nojekyll`** (80% dos casos)
2. **Cache do navegador** (10% dos casos)
3. **Nome de pastas errado** (5% dos casos)
4. **GitHub Pages não ativado** (5% dos casos)

Tente as soluções nessa ordem! 👍
