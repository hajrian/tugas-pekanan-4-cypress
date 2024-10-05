const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/login.cy.js', // Ganti dengan pola yang sesuai
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

