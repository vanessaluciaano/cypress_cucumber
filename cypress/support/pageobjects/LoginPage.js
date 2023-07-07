import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    //Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    //Clica no botão que acessa a página de login do site
    abraPaginaLogin() {
        cy.visit(loginElements.botaoLogin())
    }

    //Verifica se o botão tem o texto Conecte-se?"
    visualizarBotaoConecte() {
        //cy.get(loginElemnts.botaoConecte()).should('Conecte-se')
        
        cy.get(loginElements.botaoConecte())
            .invoke('attr', 'value')
            .should('eq', 'Conecte-se')
    }
}

export default LoginPage;