import { register } from "./signUp"
const regis = new register();
export class login {

    weblocators = 
    {
        btnLogin: '#login2',
        txtUsername: '#loginusername',
        txtPass: '#loginpassword',
        btnLoginSubmit: '[onclick = "logIn()"]', 
        welcomeMessage: "#nameofuser"

    }

    openURL()
    {
        cy.visit(Cypress.env('URL'))
    }

    clickLoginButton()
    {
        cy.get(this.weblocators.btnLogin, {timeout: 3000}).should('be.visible').click()
    }

    enterUsername(username)
    {
        
        cy.get(this.weblocators.txtUsername, {timeout: 5000, force: true}).should('be.visible').type(username, {force: true})
    }
    enterPassword(password)
    {
        cy.get(this.weblocators.txtPass, {force: true, delay: 700}).should('be.visible').type(password, {force: true})
    }

    clickLoginSubmitButton()
    {
        cy.get(this.weblocators.btnLoginSubmit,{timeout: 3000}).should('be.visible').click({force: true})
    }

    verifyTheUserLogin(username)
    {
        
        
        const message = 'Welcome ' + username;
        cy.get(this.weblocators.welcomeMessage,{timeout:10000}).should('have.text',message)
        
    }
 

}