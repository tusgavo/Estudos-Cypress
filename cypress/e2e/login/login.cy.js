/// <reference types="Cypress"/>


describe('Teste Funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.login_teste('standard_user', 'secret_sauce')
        cy.get('.title').should("contain", 'Products');
    });

    it('Validando login incorreto', () => {
        cy.login_teste('incorreto', 'secret_sauce')
        cy.get('.error-message-container').should("contain", "Epic sadface: Username and password do not match any user in this service")
    });

    it('Validar senha incorreta', () => {
        cy.login_teste('standard_user', 'incorreto')
        cy.get('.error-message-container').should("contain", "Epic sadface: Username and password do not match any user in this service")
    });
});