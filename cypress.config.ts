import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    apiUrl: 'http://localhost:4000',
    user: {
      email: 'reactuser@test.com',
      password: 'React123456!!',
    },
  },
  viewportHeight: 1000,
  viewportWidth: 1000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})
