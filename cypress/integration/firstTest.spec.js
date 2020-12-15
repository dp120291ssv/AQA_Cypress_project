/// <reference types="Cypress" />

it('type', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(112233344)
})

it('focus', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
})

it('blur', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
        .blur()
})

it('clear', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .type(999)
        .wait(2000)
        .clear()
})

it('submit', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('form[method="post"]')
        .submit()
})

it('click', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})

it('rightclick', ()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick()
})

it('dblclick', ()=>{
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_samples_/Examples')
        .contains('My Card')
        .dblclick()
})

it('check', ()=>{
    cy.visit('https://www.facebook.com/reg/?')
        .get('input[value="2"]')
        .check()
})

it('uncheck', ()=>{
    cy.visit('https://en.privatbank.ua/')
        .get('#switch-input')
        .check({force: true})
        .wait(2000)
        .uncheck({force: true})
})

it('select', ()=>{
    cy.visit('https://www.facebook.com/r.php?locale=en_US')
        .get('#month')
        .select('Feb')
        .get('#day')
        .select('12')
        .get('#year')
        .select('1991')
})

it('scrollIntoView', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="lang"]')
        .wait(2000)
        .scrollIntoView()
})

it('scrollTo', ()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .wait(2000)
    cy.scrollTo(0, 500)
})

it.only('check', ()=>{
    cy.visit('https://next.privat24.ua/?lang=en')
        .contains('Services')
        .wait(2000)
        .trigger('mouseover')
})