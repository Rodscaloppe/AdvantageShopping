import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ProductAPI from '../Page/ProductAPI';
import UserAPI from '../Page/UserAPI';

const productAPI = new ProductAPI();
const userAPI = new UserAPI();

Given('que o usuário está autenticado', () => {
  const credentials = {
    username: 'user123',
    password: 'pass123'
  };
  cy.wrap(userAPI.loginUser(credentials)).as('loginResponse');
});

When('o usuário atualiza a imagem do produto com a cor {string} e origem {string}', (color, source) => {
  cy.wrap(productAPI.updateProductImage(source, color)).as('updateResponse');
});

Then('o sistema deve exibir o status code {int}', (statusCode) => {
  cy.get('@updateResponse').its('status').should('equal', statusCode);
});

Then('o sistema deve confirmar que a imagem foi atualizada corretamente', function () {
  cy.get('@updateResponse').then((response) => {
    expect(response.body).to.have.property('imageUpdated', true);
  });
});

Then('o id da imagem nova deve ser exibido', function () {
  cy.get('@updateResponse').then((response) => {
    expect(response.body).to.have.property('newImageId').and.to.not.be.null;
  });
});
