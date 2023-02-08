describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('#name').type('bi')
    cy.get('#score').type('8')
    cy.get('#filter').click()
    cy.get('#count').contains('7 resultados')
  })
})



