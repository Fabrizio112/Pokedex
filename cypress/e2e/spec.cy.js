describe('template spec', () => {

  describe('Basic working test', () => {
    beforeEach('passes', () => {
      cy.visit('http://127.0.0.1:8080')
    })
    it('Test if the program is working', () => {
      cy.get('#kanto').click()
      expect(cy.get('.card').eq(0).should("be.exist"))
      expect(cy.get('.card').eq(0).find(`[class*="card-top"]`).should("be.exist"))
      expect(cy.get('.card').eq(0).find(`[class*="card-top"]`).should("be.exist"))
      expect(cy.get('.card').eq(0).find('.img-card').should("be.exist"))
      expect(cy.get('.card').eq(0).find('.titulo-card').should("be.exist"))
      expect(cy.get('.card').eq(0).find('#text-card').should("be.exist"))
      expect(cy.get('.card').eq(0).find('.contenedor-de-botones-tipos').should("be.exist"))
      expect(cy.get('.card').eq(0).find(' .contenedor-de-botones-tipos').children().should("have.length", 2))

    })
  })
  describe('Test if the buttons are working', () => {
    beforeEach('passes', () => {
      cy.visit('http://127.0.0.1:8080')
    })
    it(`Test if the button "Kanto"`, () => {
      cy.get("#kanto").click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 151))
    })
    it(`Test if the button "Johto"`, () => {
      cy.get("#johto").click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 100))
    })
    it(`Test if the button "Hoenn"`, () => {
      cy.get("#hoenn").click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 135))
    })
    it(`Test if the button "Sinnoh"`, () => {
      cy.get("#sinnoh").click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 107))
    })
    it(`Test if the button "Teselia"`, () => {
      cy.get("#teselia").click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 156))
    })
    it(`Test if the button "Kalos"`, () => {
      cy.get("#kalos",).click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 72))
    })
    it(`Test if the button "Alola"`, () => {
      cy.get("#alola").click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 88))
    })
    it(`Test if the button "Galar"`, () => {
      cy.get("#galar").click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 93))
    })
    it(`Test if the button "Paldea"`, () => {
      cy.get("#paldea").click();
      expect(cy.get(".card", { timeout: 30000 }).should("have.length", 108))
    })
  })

})