export class purchase {
    
    weblocators = 
    {
        btnPhone: '[onclick="byCat(\'phone\')"]',
        btnNext: '[value = "9"]',
        cardItem: '.card > .card-block > .card-title > .hrefch',
        productIamge: '.product-image',
        btnAddtoCart: '[onclick="addToCart(1)"]',
        btnCart: '#cartur',
        btnOrder: '[data-target="#orderModal"]'

    }

    formLocator = {
        name: '#name',
        country:'#country',
        city:'#city',
        creditCard:'#card',
        month: '#month',
        year: '#year',
        confrimPlaceOrder: '[onclick="purchaseOrder()"]',
        purchase: '[onclick="purchaseOrder()]'



    }

    openURL()
    {
        cy.visit(Cypress.env('URL'))

    }
    clickPhoneCategory()
    {
        cy.get(this.weblocators.btnPhone).click()
    }

    clickNextbutton()
    {
        cy.get(this.weblocators.btnNext).click()
    }

    selectRandomPhoneFrom2ndPage()
    {
        
        cy.get(this.weblocators.cardItem, {timeout: 5000}).then((value) =>
       {
        const totalCount = Cypress.$(value).length;
        expect(value).to.have.length(totalCount);

      
        var random_number = Math.floor(Math.random() * totalCount) + 1;
        cy.get(this.weblocators.cardItem, {timeout: 3000, force: true}).should('be.visible').eq(random_number - 1).dblclick()
       
    })
    }

    imageShouldBeVisible() 
    {
        cy.get(this.weblocators.productIamge).eq(0).should('be.visible')
        
    }

    clickAddtoCartbutton()
    {
        //cy.get(this.weblocators.btnAddtoCart, {timeout: 5000}).click()
        cy.contains('Add to cart').click()
    }

    clickOnAlertToConfirm()
    {
        cy.on('window:alert', (text) => {
            expect(text, {force: true}).to.equal('Product added'); 
          });

          const stub = cy.stub()

          cy.on('window:alert', stub)
          

        cy.on('window:confirm', () => true);

        
    }
    clickCartButton()
    {
        const stub = cy.stub()

       cy.on('window:alert', stub)

        cy.get(this.weblocators.btnCart).click({force: true})

    }
    clickPlaceOrderButton()
    {
        cy.get(this.weblocators.btnOrder).click()
    }

    fillAllDetails(name,country,city,creditcard,month,year)
    {
        cy.get(this.formLocator.name).type(name);
        cy.get(this.formLocator.country).type(country)
        cy.get(this.formLocator.city).type(city)
        cy.get(this.formLocator.creditCard).type(creditcard)
        cy.get(this.formLocator.month).type(month)
        cy.get(this.formLocator.year).type(year)
       
    }

    clickConfirmPlaceOrder()
    {
        cy.get(this.formLocator.confrimPlaceOrder).click()
    }


    clickOKbutton()
    {
        cy.contains('OK').dblclick()
    }
    purchaseOrder()
    {
        cy.contains('Purchase').click()
    }

    verifyPurchase()
    {
        cy.get('h2').contains('Thank you for your purchase').should('be.visible')
    }



}