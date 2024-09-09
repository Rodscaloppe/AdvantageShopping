import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CartPage from '../../support/pages/CartPage';

const cartPage = new CartPage();

Given('que o usuário adicionou produtos ao carrinho', () => {
  cartPage.visitCart();
});

When('o usuário acessa o carrinho', () => {
  cartPage.visitCart();
});

Then('o sistema deve exibir os produtos adicionados corretamente', () => {
  cartPage.verifyProductsInCart();
});
