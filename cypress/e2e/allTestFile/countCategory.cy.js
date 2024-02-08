import { categoryView } from "../../pages/viewEachCategory";
const categoryViewObj = new categoryView();

describe('All Count',()=>{
    beforeEach(() =>{
        categoryViewObj.openURL();

    })
 
    it('PhoneCateGory Count',()=>
    {
        categoryViewObj.clickPhoneCategory();
        cy.wait(4000)
        categoryViewObj.checkTotalCountPhone();

    })

    it('NoteBook category count', () => {
        categoryViewObj.clickOnNoteBookcategory();
        cy.wait(4000)
        categoryViewObj.checkTotalCountNootbook();

    })

    it('Monitor category count', () => {
        categoryViewObj.clickMonitorCategory();
        cy.wait(4000)
        categoryViewObj.checkTotalCountMonitor();


    })
})