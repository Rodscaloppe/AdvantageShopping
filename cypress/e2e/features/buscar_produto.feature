Feature: Buscar Produto no Advantage Online Shopping

  Scenario: Usuário busca por um produto existente
    Given que o usuário está na página inicial
    When o usuário busca por "HP Pavilion 15z Laptop"
    Then o sistema deve exibir o produto "HP Pavilion 15z Laptop" nos resultados da busca
    And o sistema deve exibir o preço do produto
