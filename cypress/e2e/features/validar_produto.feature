Feature: Validar Produtos no Carrinho

  Scenario: Usuário valida os produtos no carrinho
    Given que o usuário adicionou produtos ao carrinho
    When o usuário acessa o carrinho
    Then o sistema deve exibir os produtos adicionados corretamente
