import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pages/HomePage';
import ProductPage from '../../support/pages/ProductPage';

const homePage = new HomePage();
const productPage = new ProductPage();

Given('que o usuário está na página do produto', () => {
  homePage.searchProduct();
  homePage.verifyProductInResults();
});

When('o usuário adiciona o produto ao carrinho', () => {
  productPage.addToCart();
});

Then('o sistema deve exibir o produto no carrinho com a quantidade correta', () => {
  productPage.verifyProductInCart();
});
