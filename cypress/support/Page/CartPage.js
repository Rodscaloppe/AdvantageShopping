import CartPageLocators from '../locators/CartPageLocators';

class CartPage {
  visitCart() {
    cy.get(CartPageLocators.shoppingCartLink).click();  
  }

  verifyProductsInCart() {
    cy.get(CartPageLocators.cartContainer).should('contain', 'HP Pavilion 15z Laptop');  
  }
}

export default CartPage;
