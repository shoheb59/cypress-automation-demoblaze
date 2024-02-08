import { register } from "../../pages/signUp";
import { login } from "../../pages/login";
import userInfo from "../../fixtures/userInfo.json"
import { DataGenerator } from "../../support/utils";
const registerObj = new register();
const loginObj = new login();
const dataGenerator = new DataGenerator();

const randomUser = dataGenerator.generateRandomString();
const randomTwoDigitPass = dataGenerator.generateRandomTwoDigitPhoneNumber();

describe('sign up and login', () => {
  it('sign up and login with the same user', () => {
    // Generate random user data
    const userName = userInfo.username + randomUser;
    const userPass = userInfo.password + randomTwoDigitPass;

    // Sign up
    registerObj.openURL();
    registerObj.clickSignUPbutton();
    registerObj.enterUserName(userName);
    registerObj.enterPassword(userPass);
    registerObj.clickOnSignUpSubmitBtn();
    registerObj.hadleAlert();

   

    // Login after signup
    loginObj.openURL();
    loginObj.clickLoginButton();
    loginObj.enterUsername(userName);
    loginObj.enterPassword(userPass);
    loginObj.clickLoginSubmitButton();
    loginObj.verifyTheUserLogin(userName);


    // Assertions for successful login
    cy.url().should('eq', 'https://www.demoblaze.com/');
    cy.contains('Log out').should('be.visible');
  });
});


