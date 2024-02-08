import { register } from "../../pages/signUp";
import userInfo from "../../fixtures/userInfo.json"
import { DataGenerator } from "../../support/utils";
const registerObj = new register();
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

    // Wait for the alert and handle it
    cy.on('window:alert', (alertText) => {
      expect(alertText,{force: true}).to.include('Sign up successful.');
    
    });

  })
})