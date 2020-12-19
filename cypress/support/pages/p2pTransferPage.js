export class TransfersPage{

    typeFullCardData(card, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(card)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typeFirstName(firstName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
    }

    typeSurname(surname){
        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }

    typeReceiverCardNumber(receiverCardNumber){
        cy.get('[data-qa-node="numberreceiver"]')
            .type(receiverCardNumber)
    }

    typeReceiverFirstName(receiverFirstName){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(receiverFirstName)
    }

    typeReceiverSurname(receiverSurname){
        cy.get('[data-qa-node="lastNamereceiver"]')
            .type(receiverSurname)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }

    submitPayment(){
        cy.get('button[type="submit"]')
            .click()
    }

    checkPayerCard(payerCard){
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', payerCard)
    }

    checkReceiverCard(receiverCard){
        cy.get('[data-qa-node="receiver-card"]')
            .should('have.text', receiverCard)
    }

    checkPayerAmountAndCurrency(amountAndCurrency){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', amountAndCurrency)
    }

    checkPayerComissionAmountAndCurrency(comissionAmountAndCurrency){
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', comissionAmountAndCurrency)
    }

    checkTotalAmount(totalAmount){
        cy.get('[data-qa-node="total"]')
            .find('span')
            .should('contains.text', totalAmount)
    }

    checkCurrencyOftotalAmount(currencyOftotalAmount){
        cy.get('[data-qa-node="total"]')
            .find('small')
            .should('contains.text', currencyOftotalAmount)
    }

}

export const transferPage = new TransfersPage()