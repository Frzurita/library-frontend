// Copyright (c) 2019 Applitools
// https://github.com/cypress-io/cypress-example-realworld

describe('Signup', () => {
  before(() => cy.registerUserIfNeeded())
  beforeEach(() => {
    cy.visit('/')
    // we are not logged in
  })

  it('does not work with weak password', () => {
    cy.contains('button.MuiButton-root', 'Signup').click()

    cy.get('input[type="text"]').type('wrong@email.com')
    cy.get('input[type="password"]').type('no-such-user')
    cy.get('button[type="submit"]').click()

    // error message is shown and we remain on the login page
    cy.contains('ul li', 'password too weak')
    cy.url().should('contain', '/signup')
  })

  it('does not work with password too short', () => {
    cy.contains('button.MuiButton-root', 'Signup').click()


    cy.get('input[type="text"]').type('wrong@email.com')
    cy.get('input[type="password"]').type('noR!')
    cy.get('button[type="submit"]').click()

    // error message is shown and we remain on the login page
    cy.contains(
      'ul li',
      'password must be longer than or equal to 6 characters'
    )
    cy.url().should('contain', '/signup')
  })

  it('does not work with an existing user', () => {
    cy.contains('button.MuiButton-root', 'Signup').click()

    const user = Cypress.env('user')
    cy.get('input[type="text"]').type(user.email)
    cy.get('input[type="password"]').type(user.password)
    cy.get('button[type="submit"]').click()

    // error message is shown and we remain on the login page
    cy.contains('ul li', 'Email already exists')
    cy.url().should('contain', '/signup')
  })

  it('signup', () => {
    cy.contains('button.MuiButton-root', 'Signup').click()

    const user = Cypress.env('user')
    cy.get('input[type="text"]').type(`new${Date.now()}@test.com`)
    cy.get('input[type="password"]').type(user.password)
    cy.get('button[type="submit"]').click()

    cy.url().should('contain', '/books')
  })
})
