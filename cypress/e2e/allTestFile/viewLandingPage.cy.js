import { landingPage } from "../../pages/viewLandingPage";
const landingPageObj = new landingPage();

describe('LandingPage', ()=>{
    it('User open the URL and Verify the page', () => {
        landingPageObj.openURL();
        landingPageObj.verifyLandingPage()     

    })
})