import { timeout } from "async";


export class categoryView {
    weblocators = {
        btnPhone: '[onclick="byCat(\'phone\')"]',
        phoneCategory: '.card > .card-block > .card-title',
        btnLaptop: '[onclick="byCat(\'notebook\')"]',
        laptopCategory: '.card > .card-block > .card-title',
        monitorCategory: '.card > .card-block > .card-title',
        btnMonitor: '[onclick="byCat(\'monitor\')"]'
        
    }


    
    openURL()
    {
        cy.visit(Cypress.env('URL'))
    }
    clickPhoneCategory()
    {
        cy.get(this.weblocators.btnPhone).click()

    }
    checkTotalCountPhone()
    {
       cy.get(this.weblocators.phoneCategory, {timeout: 5000}).then((value) =>
       {
        const totalCount = Cypress.$(value).length;
        expect(value).to.have.length(totalCount);

       })
    }

    clickOnNoteBookcategory()
    {
        cy.get(this.weblocators.btnLaptop).click()

    }
    checkTotalCountNootbook()
    {
       cy.get(this.weblocators.laptopCategory, {timeout: 4000}).then((value) =>
       {
        const totalCount = Cypress.$(value).length;
        expect(value).to.have.length(totalCount);

       })
    }
    clickMonitorCategory()
    {
        cy.get(this.weblocators.btnMonitor).click()
    }
    checkTotalCountMonitor()
    {
        cy.get(this.weblocators.monitorCategory, {timeout: 4000}).then((value) =>
        {
         const totalCount = Cypress.$(value).length;
         expect(value).to.have.length(totalCount);
 
        })
    }
}