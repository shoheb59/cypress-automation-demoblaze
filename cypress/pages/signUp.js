
export class  register {

    weblocators = 
    {
        btnSignUp: '#signin2',
        txtUsername: '#sign-username',
        txtPassword: '#sign-password',
        btnSignupSubmit: '[onclick = "register()"]'
    }


    openURL()
    {
        cy.visit(Cypress.env('URL'))
    }

    clickSignUPbutton()
    {
        cy.get(this.weblocators.btnSignUp,{timeout: 4000}).click()
    }

    enterUserName(username)
    {
        

        cy.get(this.weblocators.txtUsername, {timeout: 5000, force: true}).should('be.visible').type(username, {force: true})
       
        
    }
    enterPassword(password)
    {
        
        cy.get(this.weblocators.txtPassword, {timeout: 4000}).type(password,{force: true})
    }

    clickOnSignUpSubmitBtn()
    {
        cy.get(this.weblocators.btnSignupSubmit, {timeout: 4000}).click()
    }
    hadleAlert()
    {
         // Wait for the alert and handle it
        cy.on('window:alert', (alertText) => {
        expect(alertText,{force: true}).to.include('Sign up successful.');
        // Optionally, you can click OK on the alert if necessary
      });
    }





}