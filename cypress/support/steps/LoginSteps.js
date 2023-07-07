/*global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage()

Given("acesso o site da ULTIMA", () => {
  loginPage.acessarSite();
});

When("acesso a pagina de Login", () => {
  loginPage.abraPaginaLogin();
});

Then("devo visualizar botao de conecte", () => {
  loginPage.visualizarBotaoConecte();
});
