/// <reference types="cypress" />

export const exampleURL = 'localhost:8082';
const dummyEmail = 'person@email.com';
const dummyPassword = 'Password123';
const exampleLoginButton = 'a[href*="localhost:8081"]';
const emailInput = 'input[type="email"]';
const passwordInput = 'input[type="password"]';
const pwSignupSubmit = '.btn__login-signup';
const APP_SECRET = Cypress.env('APP_SECRET');
// add app signup stuff here.

// we want app to have been registered before calls
// testing registering on api unit tests check for double register
//

import { config } from '../../shared';

import { appRegister, devVerify } from '../../sdk/js';

console.log('E2E test', APP_SECRET);
const appSetup = () => {
  devVerify();
};

const loginSignup = () => {
  cy.get(exampleLoginButton).click();
  cy.get(emailInput).type(dummyEmail);
  cy.get(passwordInput).type(dummyPassword);
  cy.get(pwSignupSubmit).click();
};

describe('Password Login', () => {
  beforeEach(() => {
    cy.visit(exampleURL + '/login');
  });
  it('loads components', () => {
    cy.get('.landing-img').should('exist');
  });
  it('login', () => {
    loginSignup();
  });
  // it('can log back in', () => {
  //   loginSignup();
  //   loginSignup();
  // });
});
