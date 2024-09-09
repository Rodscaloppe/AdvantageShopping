Feature: Atualizar imagem de um produto na API

  Scenario: Usuário atualiza a imagem de um produto via API
    Given que o usuário está autenticado
    When o usuário atualiza a imagem do produto com a cor "preto" e origem "website"
    Then o sistema deve exibir o status code 200
    And o sistema deve confirmar que a imagem foi atualizada corretamente
    And o id da imagem nova deve ser exibido
