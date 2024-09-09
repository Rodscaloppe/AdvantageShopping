Feature: Atualizar Imagem do Produto

  Scenario: Atualizar a imagem do produto no carrinho
    Given que o usuário está logado
    When o usuário altera a cor do produto "HP Pavilion 15z Laptop"
    And o usuário clica em atualizar a imagem
    Then o sistema deve atualizar a imagem do produto no carrinho
