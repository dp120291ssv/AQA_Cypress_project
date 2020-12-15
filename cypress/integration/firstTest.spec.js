/// <reference types="Cypress" />

it('type example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(112223344)
})

it('focus example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .focus()
})

it('focus blur', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
        .blur()
})

it('clear example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .type(112223344)
        .clear()
})

it('submit example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('form[method="post"]')
        .submit()
})

it('click example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})

it('click example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})

it('rightclick example', ()=> {
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .scrollIntoView()
        .wait(2000)
        .rightclick()
})

it('dblclick example', ()=> {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_samples_/Examples')
        .get('h3')
        .dblclick()
})

it('check example', ()=> {
    cy.visit('https://www.facebook.com/r.php?locale=en_US&display=page')
        .get('input[value="2"]')
        .check()
})

it('uncheck example', ()=> {
    cy.visit('https://en.privatbank.ua/')
        .get('#switch-input')
        .check({force: true})
        .wait(2000)
        .uncheck({force: true})
})

it('select example', ()=> {
    cy.visit('https://www.facebook.com/r.php?locale=en_US')
        .get('#month')
        .select('Feb')
        .get('#day')
        .select('12')
        .get('#year')
        .select('1991')
})

it('scrollIntoView example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .wait(2000) // wait for load all requests for current page
        .get('[data-qa-node="lang"]')
        .scrollIntoView()
})

it('scrollTo example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .wait(2000) // wait for load all requests for current page
    cy.scrollTo(0, 450)
})

it('trigger example', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .contains('Services')
        .trigger('mouseover')
})