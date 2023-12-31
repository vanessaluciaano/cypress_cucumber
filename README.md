# Prática do Módulo 5 - Semana 2

##
Este documento descreve as etapas realizadas durante a prática do Módulo 5, Semana 2 do curso de Analista de Testes de Software da Última School.

Durante esta prática, foram executadas as seguintes etapas:

1. Instalação do Node.js: Acessamos o site oficial do Node.js, baixamos e instalamos a versão adequada para o nosso computador.

2. Escolha da IDE de JavaScript: Optamos por utilizar o Visual Studio Code (VS Code) como a IDE de programação neste tutorial.

3. Instalação do Cypress: Abrimos o terminal do VS Code e executamos o comando npm install cypress@9.7.0 para instalar a versão específica do Cypress.

4. Configuração do Cucumber no Cypress: Criamos uma pasta para o projeto, acessamos essa pasta no terminal do Windows e executamos o comando npm install --save-dev cypress cypress-cucumber-preprocessor para instalar as dependências do Cucumber.

5. Estruturação do projeto: Exploramos a estrutura inicial do projeto Cypress com suporte ao Cucumber. Conhecemos as principais pastas e arquivos, como fixtures, integration, plugins/index.js, support, node_modules e cypress.json.

6. Criação de pastas e arquivos adicionais: Criamos as pastas elements, pageobjects e steps dentro da pasta cypress/support. Essas pastas são utilizadas para a estruturação do projeto utilizando o conceito de Page Object.

7. Exemplo prático de automação de testes: Desenvolvemos um exemplo de teste automatizado para o processo de acesso a página login no site da Ultima School. Configuramos o arquivo cypress.json com as configurações necessárias. Criamos arquivos com os cenários de teste em formato BDD, os passos do teste, as funções e comandos a serem executados.

Durante a execução do teste de exemplo, utilizamos comandos do Cypress para interagir com elementos da página.

Essa prática permitiu explorar o uso do Cypress com suporte ao Cucumber para a automação de testes em um cenário específico de login em um site.