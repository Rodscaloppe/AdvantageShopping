const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      config.env.USER_ID = process.env.USER_ID;
      config.env.AUTH_TOKEN = process.env.AUTH_TOKEN;
      return config;
    }
  },
});
