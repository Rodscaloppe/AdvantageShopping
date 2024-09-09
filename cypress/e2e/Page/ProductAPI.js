class ProductAPI {
    searchProduct(query) {
      return cy.request({
        method: 'GET',
        url: `/catalog/api/v1/products/search`,
        qs: { query },
      });
    }
  
    updateProductImage(source, color) {
      const userId = Cypress.env('USER_ID');
      const authToken = Cypress.env('AUTH_TOKEN');
      
      return cy.request({
        method: 'PUT',
        url: `/catalog/api/v1/product/image/${userId}/${source}/${color}`,
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
      });
    }
  }
  
  export default ProductAPI;
  