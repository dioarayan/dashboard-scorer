describe('when visiting the page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  
  describe('when interacting with +1 button', () => {
    it('works and updates the element', () => {
      cy.contains('+1').first().click()
      cy.get('.score-output').contains(1)
    })
  })

  describe('when interacting with +3 button', () => {
    it('works and updates the element', () => {
      cy.contains('+3').first().click()
      cy.get('.score-output').contains(3)
    })
  })

  describe('when interacting with Delete button', () => {
    beforeEach(() => {
      cy.contains('+1').first().click()
      cy.get('.score-output').contains(1)
    })

    it('works and updates the element', () => {
      cy.contains('Delete').first().click()
      cy.get('.score-output').contains(0)
    })

    it('pop up an alert when score is going to be negative', () => {
      cy.contains('Delete').first().click()
      cy.contains('Delete').first().click()

      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Counter should not be negative.')
      })
    })
  })

  describe('when interacting with Clear! button', () => {
    beforeEach(() => {
      cy.contains('+3').first().click()
      cy.get('.score-output').contains(3)
    })

    it('works and updates the element', () => {
      cy.contains('Clear!').first().click()
      cy.get('.score-output').contains(0)
    })
  })

  describe('when editing the team name', () => {
    beforeEach(() => {
      cy.get('h3').first().should('exist').click()
      cy.get('input.text-center').as('inputVisible')
      cy.get('@inputVisible').should('be.visible')
    })

    it('updates the team name', () => {
      cy.get('@inputVisible').clear().type('Sample Team').blur()
      cy.contains('Sample Team')
    })
  })

  describe('when editing the clock timer', () => {
    beforeEach(() => {
      cy.get('p.timer').first().should('exist').click()
      cy.get('input.timerInput').as('inputVisible')
      cy.get('@inputVisible').should('be.visible')
    })

    it.only('updates the clock timer', () => {
      cy.get('@inputVisible').clear().type('05:30')
      cy.get('@inputVisible').blur({ force: true })
      cy.contains('05:30')
    })
  })
})
