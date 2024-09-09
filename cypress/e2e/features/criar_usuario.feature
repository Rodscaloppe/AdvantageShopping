Feature: Criar e Fazer Login com Usuário

  Scenario: Usuário realiza o cadastro e login
    Given que o usuário está na página de cadastro
    When o usuário preenche os campos obrigatórios e cria a conta
    Then o sistema deve criar a conta e logar o usuário automaticamente
