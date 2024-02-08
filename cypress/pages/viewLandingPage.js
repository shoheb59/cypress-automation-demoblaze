export class landingPage {

    openURL()
    {
        cy.visit(Cypress.env('URL'));
    }

    verifyLandingPage()
    {
        cy.title().should('include', 'STORE');
    }
}