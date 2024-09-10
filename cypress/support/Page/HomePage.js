import HomePageLocators from '../locators/HomePageLocators';

class HomePage {
  searchProduct(productName) {
    cy.get(HomePageLocators.searchButton).click();
    cy.get(HomePageLocators.searchInput).type(`${productName}{enter}`);
  }
}

export default HomePage;