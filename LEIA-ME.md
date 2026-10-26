# Som Livre: como publicar e compartilhar

O app é um site estático: basta hospedar esta pasta inteira (index.html, sw.js, manifest.webmanifest e a pasta icons). O jeito gratuito mais simples é o GitHub Pages.

## Publicar no GitHub Pages (primeira vez)

1. Crie uma conta em https://github.com, se ainda não tiver.
2. Clique em **+** (canto superior direito) › **New repository**. Nome: `somlivre`. Marque **Public**. Clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file**. Arraste **todo o conteúdo** desta pasta (incluindo a pasta `icons`) e clique em **Commit changes**.
4. Vá em **Settings** › **Pages**. Em *Source*, escolha **Deploy from a branch**; em *Branch*, escolha **main** e **/(root)**. Clique em **Save**.
5. Em 1 ou 2 minutos aparece o endereço, no formato `https://SEU-USUARIO.github.io/somlivre/`. Esse é o link do app.

## Instalar e compartilhar

Abra o link no celular e toque em **Instalar** (Android/Chrome) ou em Compartilhar › **Adicionar à Tela de Início** (iPhone/Safari). Dentro do app, o botão **?** › **Enviar o link para alguém** já monta a mensagem.

Texto pronto para mandar:

> Som Livre: músicas gratuitas por gênero. Abra o link e instale. No Android, pelo Chrome › Instalar app. No iPhone, pelo Safari › Compartilhar › Adicionar à Tela de Início.
> https://SEU-USUARIO.github.io/somlivre/

## Atualizar o app

1. No repositório, envie o `index.html` novo (Add file › Upload files) e confirme.
2. Edite o `sw.js` (ícone de lápis) e aumente a versão: `somlivre-v1.1` › `somlivre-v1.2`.
3. Quem já instalou recebe a nova versão ao fechar e abrir o app.

## Testar no computador sem publicar

Clique com o botão direito em `servir.ps1` › **Executar com o PowerShell** e abra http://localhost:8765.
