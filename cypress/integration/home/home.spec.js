const URL = '/'

describe('Home', () => {
  context('static', () => {
    before(() => {
      cy.visit(URL)
    })
    it('renders title text', () => {
      cy.get('h1').should('contain', 'Hello world!')
    })
  })
  context('dynamic', () => {
    // Dynamic tests go here.
  })
})
