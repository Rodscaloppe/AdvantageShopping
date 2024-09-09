Feature: Buscar produto na API do Advantage Online Shopping

  Scenario: Usuário busca por um produto existente via API
    Given que o usuário realiza uma busca pelo produto "laptop"
    Then o sistema deve exibir somente produtos que correspondem à busca
    And o sistema deve retornar o status code 200
