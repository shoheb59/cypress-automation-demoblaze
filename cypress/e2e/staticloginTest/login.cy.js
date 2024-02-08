import { login } from "../../pages/login";
import userInfo from "../../fixtures/userInfo.json";

const loginObj = new login();


describe('login', () =>{

    it('login flow', ()=>{

        loginObj.openURL();
        loginObj.clickLoginButton();
        loginObj.enterUsername(userInfo.username);
        loginObj.enterPassword(userInfo.password);
        loginObj.clickLoginSubmitButton()
        loginObj.validateUserLogin(userInfo.username);
        



    })
})