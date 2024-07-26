# Teste Grupo Digital

Esse projeto foi criado para um teste com foco no desenvolvimento front-end! 

## Objetivo do projeto

1. Tela de Consulta:
o Desenvolver uma página HTML contendo um campo de input para o
usuário inserir o CNPJ e realizar a consulta.
2. Consumo da API:
o Consumir a API: BrasilAPI - Consulta CNPJ
https://brasilapi.com.br/api/cnpj/v1/{{CNPJ}}
o Mostrar os principais dados da empresa retornados pela API, excluindo
informações irrelevantes.
o Apresentar os dados dos sócios em cards separados.
3. Exibição dos Dados:
o Exibir os seguintes dados da empresa de forma clara e organizada:
▪ Nome
▪ Razão Social
▪ Data de Abertura
▪ Situação
▪ Atividade Principal
▪ Endereço Completo
▪ Telefone
▪ E-mail
4. Edição dos Dados:
o Permitir que os dados exibidos sejam editáveis diretamente na interface
e submetidos ao final do formulário.

## Como rodar o projeto

após clonar o repositório basta rodar os comandos 
-para instalar os pacotes e suas depedencias 
### `npm install` 

-para iniciar o projeto
### `npm run dev`

### erro

caso aconteça algum erro ao rodar o projeto por favor verifique se está no diretório correto, certifique-se de ter o node instalado em sua maquina, caso os erros persistam por favor entre em contato para maior avaliação.

## Tecnologias utilizadas 

-vite (criação do ambiente de desenvolvimento)
-axios (para requisições http)
-React (Biblioteca selecionada)
-Styled-components (biblioteca de estilização)
-cpf-cnpj-validator (validador de cnpj)