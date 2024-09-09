class UserAPI {
    createUser(userData) {
      return cy.request({
        method: 'POST',
        url: `/accountservice/register`,
        body: userData,
      });
    }
  
    loginUser(credentials) {
      return cy.request({
        method: 'POST',
        url: `/accountservice/login`,
        body: credentials,
      }).then((response) => {
        Cypress.env('AUTH_TOKEN', response.body.token);
      });
    }
  }
  
  export default UserAPI;
  