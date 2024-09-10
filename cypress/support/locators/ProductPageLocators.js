class ProductPageLocators {
    get addToCartButton() {
      return 'button[name="save_to_cart"]';  // Localizador para o botão "Adicionar ao Carrinho"
    }
  
    get productTitle() {
      return '.product-title';  // Localizador para o título do produto
    }
  
    get productPrice() {
      return '.productPrice';  // Localizador para o preço do produto
    }
  
    get cartLink() {
      return '#shoppingCartLink';  // Localizador para o link do carrinho
    }
  
    get productImage() {
      return '.product-image';  // Localizador para a imagem do produto
    }
  }
  
  export default new ProductPageLocators();
  