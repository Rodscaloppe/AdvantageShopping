class SignUpPageLocators {
    get usernameField() {
      return '#newUsername';  // Campo de novo nome de usuário
    }
  
    get emailField() {
      return '#email';  // Campo de email
    }
  
    get passwordField() {
      return '#newPassword';  // Campo de senha
    }
  
    get signUpButton() {
      return '#signUp';  // Botão de cadastro
    }
  }
  
  export default new SignUpPageLocators();
  