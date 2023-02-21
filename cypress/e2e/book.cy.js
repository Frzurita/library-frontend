describe('Book', () => {
  function fillAndSubmitForm(name = '') {
    if (name) cy.get('input[id="name"]').type(name)
    cy.get('button[type="submit"]').click()
  }
  before(() => {
    cy.registerUserIfNeeded()
  })

  beforeEach(() => {
    cy.login()
    cy.visit('/admin-panel/books')
  })

  it('Being in the front page width empty results', () => {
    cy.url().should('contain', '/books')
  })

  it('Typing an empty book form', () => {
    cy.get('button svg[data-testid="AddIcon"]').click()
    fillAndSubmitForm(undefined)
    cy.contains('ul li', 'name should not be empty')
  })
  it('Create book', () => {
    cy.get('button svg[data-testid="AddIcon"]').click()
    fillAndSubmitForm('name')
    cy.contains('div', 'name')
  })
  it('Book already exists', () => {
    cy.get('button svg[data-testid="AddIcon"]').click()
    fillAndSubmitForm('name')
    cy.contains('ul li', 'Name already exists')
  })
  it('Remove book', () => {
    cy.get('button svg[data-testid="DeleteIcon"]').click()
    cy.contains('div', 'name')
  })
})
