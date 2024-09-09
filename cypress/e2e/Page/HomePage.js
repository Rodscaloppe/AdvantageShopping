class HomePage {
    visit() {
      // Usando a URL base definida no .env
      cy.visit(Cypress.env('BASE_URL'));
    }
  
    searchProduct() {
      cy.get('#menuSearch').click();
      // Usando o nome do produto do .env
      cy.get('input#autoComplete').type(`${Cypress.env('PRODUCT_NAME')}{enter}`);
    }
  
    verifyProductInResults() {
      cy.contains(Cypress.env('PRODUCT_NAME')).should('be.visible');
    }
  
    verifyProductPrice() {
      cy.get('.productPrice').should('be.visible');
    }
  }
  
  export default HomePage;
  