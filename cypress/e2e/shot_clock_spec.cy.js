describe('with shot clock controls', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    cy.contains('24')
    cy.contains('10:00')
    cy.get('#startTimerBtn').click()
  })

  it('starts the clock timer', () => {
    cy.wait(3000)
    cy.get('.timer').contains('09:57')
    cy.get('.shotClockTimer').first().contains('21')
    cy.get('.shotClockTimer').first().contains('20')
  })

  it('pauses the timer', () => {
    cy.wait(5000)
    cy.get('#pauseTimerBtn').click()
    cy.get('.timer').contains('09:55')
    cy.get('.shotClockTimer').first().contains('19')
    cy.wait(2000)
    cy.get('.timer').contains('09:55')
    cy.get('.shotClockTimer').first().contains('19')
  })

  it('resets the timer', () => {
    cy.wait(3000)
    cy.get('#resetTimerBtn').click()
    cy.get('.timer').contains('10:00')
    cy.get('.shotClockTimer').contains('24')
  })

  it.only('pauses all the timer', () => {
    cy.wait(24000)
    cy.get('.shotClockTimer').should('have.text', 0)
    cy.get('.timer').should('have.text', '09:36')
  })

  it.only('can able to edit the shot clock timer', () => {
    cy.get('.shotClockTimer').click()
    cy.get('input.text-center').should('exist').clear().type(14).blur()
    cy.get('.shotClockTimer').should('have.text', '14')
  })
})
