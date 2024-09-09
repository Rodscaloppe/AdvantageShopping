import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductAPI from '../Page/ProductAPI';

const productAPI = new ProductAPI();

Given('que o usuário realiza uma busca pelo produto {string}', (query) => {
  cy.wrap(productAPI.searchProduct(query)).as('searchResponse');
});

Then('o sistema deve exibir somente produtos que correspondem à busca', function () {
  cy.get('@searchResponse').then((response) => {
    const products = response.body.products;
    expect(products).to.have.length.greaterThan(0);
    products.forEach((product) => {
      expect(product.name.toLowerCase()).to.include('laptop');
    });
  });
});

Then('o sistema deve retornar o status code {int}', (statusCode) => {
  cy.get('@searchResponse').its('status').should('equal', statusCode);
});
