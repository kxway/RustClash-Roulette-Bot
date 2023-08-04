# RustClash Roulette Bot

Este projeto é um bot de apostas automatizado para o jogo de roleta no site RustClash.

## Como usar

1. Clone o repositório para sua máquina local.
2. Execute `npm install` para instalar todas as dependências do projeto.
3. Crie um arquivo `.env` na raiz do projeto e adicione sua variável de ambiente `REFRESH_TOKEN` (consulte a seção "Obtendo seu Refresh Token").
4. Execute o bot com `npm start`.

## Obtendo seu Refresh Token

Para obter seu refresh token, siga os seguintes passos:

1. Faça login em sua conta RustClash em um navegador da web.
2. Abra as Ferramentas do desenvolvedor (geralmente F12 no teclado).
3. Navegue até a guia "Aplicação" ou "Storage".
4. No lado esquerdo, expanda o item "Cookies" e clique no site RustClash.
5. Procure pelo cookie chamado `refreshToken`.
6. Copie o valor desse cookie e cole como valor para `REFRESH_TOKEN` no seu arquivo `.env`.

## Configurações
Você pode configurar as seguintes opções no arquivo .env:

1. REFRESH_TOKEN: O seu refresh_token de rustclash.com.
2. BET_COLOR: A cor na qual você deseja apostar. Pode ser RED ou BLACK.
3. BET_AMOUNT: A quantidade inicial que você deseja apostar.
