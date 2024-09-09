class CartPage {
    visitCart() {
      cy.get('#shoppingCartLink').click();
    }
  
    verifyProductsInCart() {
      cy.get('.cart').should('contain', 'HP Pavilion 15z Laptop');
    }
  }
  
  export default CartPage;
  