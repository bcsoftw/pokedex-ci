// cypress.config.js


module.exports = {
  e2e: {
    baseUrl: 'http://localhost:5000',
    supportFile: false,
    pageLoadTimeout: 300000,
    // Aquí puedes definir tu baseUrl, carpetas o eventos si los necesitas
    setupNodeEvents(on, config) {
      return config
    },
  },
}
