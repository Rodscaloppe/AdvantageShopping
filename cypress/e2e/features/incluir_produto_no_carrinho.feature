Feature: Incluir Produto no Carrinho

  Scenario: Usuário adiciona um produto ao carrinho
    Given que o usuário está na página do produto "HP Pavilion 15z Laptop"
    When o usuário adiciona o produto ao carrinho
    Then o sistema deve exibir o produto no carrinho com a quantidade correta
