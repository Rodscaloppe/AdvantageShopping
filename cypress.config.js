const { defineConfig } = require('cypress');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

const cucumber = require('cypress-cucumber-preprocessor').default;
const { initPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Cucumber Preprocessor
      on('file:preprocessor', cucumber());

      // Cypress Image Snapshot
      initPlugin(on, config);

      // Definir variáveis de ambiente
      config.env.BASE_URL = process.env.BASE_URL;
      config.env.USER_ID = process.env.USER_ID;
      config.env.AUTH_TOKEN = process.env.AUTH_TOKEN;

      return config;
    },
    baseUrl: process.env.BASE_URL,
    specPattern: '**/*.feature', // Configuração para rodar arquivos .feature
  },
});
