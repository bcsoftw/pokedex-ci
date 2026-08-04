/* global cy */

describe('Test e2e', () => {
  // Se ejecuta antes de cada caso de prueba individual
  beforeEach(() => {
    // Visita la página de inicio configurada en baseUrl
    cy.visit('http://localhost:5000/')
  })

  it('Frontend opened', () => {
    cy.contains('Bulbasaur',{ timeout: 240000 })
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.',{ timeout: 240000 })
  })
})
