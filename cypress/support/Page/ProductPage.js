import ProductPageLocators from '../locators/ProductPageLocators';

class ProductPage {
  addToCart() {
    cy.get(ProductPageLocators.addToCartButton).click();  // Usando o localizador do botão "Adicionar ao Carrinho"
  }

  verifyProductDetails() {
    cy.get(ProductPageLocators.productTitle).should('be.visible');  // Verifica se o título do produto está visível
    cy.get(ProductPageLocators.productPrice).should('be.visible');  // Verifica se o preço do produto está visível
  }

  verifyProductInCart() {
    cy.get(ProductPageLocators.cartLink).click();  // Clica no link do carrinho
    cy.get(ProductPageLocators.productTitle).should('contain', 'HP Pavilion 15z Laptop');  // Verifica se o produto está no carrinho
  }
}

export default ProductPage;
