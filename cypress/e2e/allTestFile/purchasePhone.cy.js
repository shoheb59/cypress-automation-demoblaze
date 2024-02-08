import { purchase } from "../../pages/purchasePhone";
import formInfo from "../../fixtures/formInfo.json"
const purchaseObj = new purchase;

describe('Purchase Phone', ()=>
{
    it('Purchase random phone from 2nd page',()=> {
        purchaseObj.openURL()
        purchaseObj.clickPhoneCategory();
        purchaseObj.clickNextbutton();
        cy.wait(5000)
        purchaseObj.selectRandomPhoneFrom2ndPage();
        purchaseObj.imageShouldBeVisible();
        cy.wait(5000)
        purchaseObj.clickAddtoCartbutton()
        purchaseObj.clickOnAlertToConfirm()
        purchaseObj.clickCartButton()
        purchaseObj.clickPlaceOrderButton()
        purchaseObj.fillAllDetails(formInfo.name,formInfo.country,formInfo.city,formInfo.creditcard,formInfo.month,formInfo.year)
        purchaseObj.clickConfirmPlaceOrder()
        purchaseObj.clickOKbutton()
        purchaseObj.purchaseOrder()
        purchaseObj.verifyPurchase()
        
    })
})
