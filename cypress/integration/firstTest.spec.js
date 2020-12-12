/// <reference types="Cypress" />

it('SHOULD', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100)
        .should('have.value', 100)
        .and('be.visible')
})

it('EXPECT', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100).then( input=> {
            expect(input).to.have.value(100)
        })
})

it('check default value for Deposits', ()=> {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.get('[data-qa-value="UAH"]')
        .should('be.checked')
})

it('check is visible Archive link', ()=> {
    cy.visit('https://next.privat24.ua/deposit/open?lang=en')
    cy.contains('Мої депозити')
        .trigger('mouseover')
        .get('#archiveDeposits')
        .should('be.visible')
})

it('check is correct attr in button', ()=> {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards')
        .should('have.attr', 'type')
        .and('match', /button/)
})

it.only('check is correct URL', ()=> {
    cy.visit('https://next.privat24.ua?lang=en')
    cy.url()
        .should('eq', 'https://next.privat24.ua/?lang=en')
})
















