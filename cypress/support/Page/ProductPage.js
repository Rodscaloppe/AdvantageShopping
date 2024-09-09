class CartPage {
    visitCart() {
      cy.get('#shoppingCartLink').click();
    }
  
    verifyProductsInCart() {
      cy.get('.cart').should('contain', Cypress.env('PRODUCT_NAME'));
    }
  }
  
  export default CartPage;
  