export class MobileReplenishmentPage{

    typeFullCardData(card, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(card)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    submitPayment(){
        cy.get('button[type="submit"]')
            .click()
    }

    checkReceiverCard(cardNumber){
        cy.get('[data-qa-node="card"]')
            .should('have.text', cardNumber)
    }

    checkAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .should('have.text', amount)
    }

    checkPaymentCurrency(paymentCurrency){
        cy.get('[data-qa-node="currency"]')
            .eq(0)
            .should('contain.text', paymentCurrency)
    }

    checkTotalAmountWithComission(totalSum){
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('have.text', totalSum)
    }

    checkComissionCurrency(comissionCurrency){
        cy.get('[data-qa-node="commission-currency"]')
            .should('contain.text', comissionCurrency)
    }
}

export const mobileReplenishmentPage = new MobileReplenishmentPage()