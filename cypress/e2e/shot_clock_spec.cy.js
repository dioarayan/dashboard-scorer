describe('with shot clock controls', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
    cy.contains('23:59')
    cy.get('.startShotClock').first().click()
  })

  it('starts the shot clock timer', () => {
    cy.get('.shotClockTimer').first().contains('22')
    cy.get('.shotClockTimer').first().contains('21')
  })

  it('pauses the timer', () => {
    cy.wait(2000)
    cy.get('.pauseShotClock').first().click()
    cy.get('.shotClockTimer').first().contains('21')
    cy.wait(2000)
    cy.get('.shotClockTimer').first().contains('21')
  })

  it('resets the timer', () => {
    cy.wait(2000)
    cy.get('.resetShotClock').first().click()
    cy.get('.shotClockTimer').first().contains('23:59')
  })

  it('restart the timer', () => {
    cy.wait(2000)
    cy.get('.restartShotClock').first().click()
    cy.get('.shotClockTimer').first().should('not.have.value', '23:59')
    cy.wait(5000)
    cy.get('.shotClockTimer').first().contains('18')
  })
})
