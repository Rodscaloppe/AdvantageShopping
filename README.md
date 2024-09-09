
---

# Projeto de Automação de Testes - Advantage Online Shopping

Este projeto contém a automação de testes para o site **Advantage Online Shopping** utilizando **Cypress**, com a integração de **Cucumber** para escrita de cenários BDD e **Cypress Image Snapshot** para testes de regressão visual.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end.
- [Cypress Cucumber Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor) - Suporte para escrita de cenários em formato Gherkin.
- [Cypress Image Snapshot](https://github.com/palmerhq/cypress-image-snapshot) - Comparação de screenshots para testes de regressão visual.
- [dotenv](https://www.npmjs.com/package/dotenv) - Gerenciamento de variáveis de ambiente.


### Configurações no `.env`

O arquivo `.env` deve conter as variáveis sensíveis, como a URL do sistema e credenciais de autenticação.

Exemplo:

```bash
BASE_URL=https://www.advantageonlineshopping.com
USER_ID=123456
AUTH_TOKEN=your-auth-token-here
```

## Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   cd nome-do-projeto
   ```

2. **Instale as dependências do projeto**

   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`**

   Crie o arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias, como `BASE_URL`, `USER_ID` e `AUTH_TOKEN`.

4. **Executar os testes no Cypress**

   Para rodar os testes utilizando a interface gráfica do Cypress:

   ```bash
   npx cypress open
   ```

   Para rodar os testes no modo headless (sem interface gráfica):

   ```bash
   npx cypress run
   ```

## Cenários de Testes Implementados

### 1. Busca de Produto (API)
- **Arquivo**: `buscar_produto_api.feature`
- **Descrição**: Realiza a busca por um produto e valida se os resultados exibem apenas produtos conforme o termo de busca. Também valida o status code da resposta.
  
### 2. Atualização de Imagem de Produto (API)
- **Arquivo**: `atualizar_imagem_produto_api.feature`
- **Descrição**: Atualiza a imagem de um produto via API, verifica se a atualização foi bem-sucedida e valida o `id` da nova imagem.

### 3. Testes de Regressão Visual
- **Descrição**: Foram implementados testes de regressão visual para garantir que a interface do sistema não sofra alterações inesperadas. Esses testes comparam screenshots tiradas durante a execução dos testes com imagens de referência.

## Adicionando Novos Cenários de Teste

Para adicionar novos cenários de teste no formato BDD:

1. Crie um novo arquivo `.feature` na pasta `cypress/e2e/features/`.
2. Escreva os cenários utilizando a sintaxe Gherkin (Given, When, Then).
3. Implemente os steps (passos) dos testes na pasta `cypress/e2e/step_definitions/`.

Exemplo de cenário Gherkin:

```gherkin
Feature: Buscar produto na API do Advantage Online Shopping

  Scenario: Usuário busca por um produto existente via API
    Given que o usuário realiza uma busca pelo produto "laptop"
    Then o sistema deve exibir somente produtos que correspondem à busca
    And o sistema deve retornar o status code 200
```

## Testes de Regressão Visual

Os testes de regressão visual foram configurados com **Cypress Image Snapshot**. Para ajustar a sensibilidade do teste, você pode alterar a tolerância de diferença entre as imagens:

```javascript
cy.matchImageSnapshot('nome-do-snapshot', {
  failureThreshold: 0.05, // Tolerância de 5%
  failureThresholdType: 'percent', // Define a tolerância como percentual
});
```

## Documentação das APIs

- **Buscar Produto (GET)**:
  - URL: `/catalog/api/v1/products/search`
  - Parâmetros: `query`
  - Exemplo: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?query=laptop`

- **Atualizar Imagem de Produto (PUT)**:
  - URL: `/catalog/api/v1/product/image/{userId}/{source}/{color}`
  - Parâmetros: `userId`, `source`, `color`
  - Exemplo: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/123456/website/preto`

## Contribuição

1. Faça um **fork** do repositório.
2. Crie uma **branch** para a sua nova feature (`git checkout -b feature/nova-feature`).
3. Faça o **commit** das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça um **push** para a branch (`git push origin feature/nova-feature`).
5. Abra um **Pull Request**.



---
