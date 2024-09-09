import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pages/HomePage';

const homePage = new HomePage();

Given('que o usuário está na página inicial', () => {
  homePage.visit();
});

When('o usuário busca por um produto', () => {
  homePage.searchProduct();
});

Then('o sistema deve exibir o produto nos resultados da busca', () => {
  homePage.verifyProductInResults();
  // Teste de regressão visual na lista de produtos exibidos
  cy.matchImageSnapshot('resultados-da-busca');
});

Then('o sistema deve exibir o preço do produto', () => {
  homePage.verifyProductPrice();
});
