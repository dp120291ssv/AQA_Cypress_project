export class MobilePhoneReplenishment {
    
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should("have.text", debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
            .should("have.text", debitAmount)
    }

    checkDebitAmountAndComission(debotComission){
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should("have.text", debotComission)
    }

    checkReceiverAmount(receiverAmount){
        cy.get(".amount")
            .find("span")
            .should("have.text", receiverAmount)
    }

    checkPaymentCurrency(paymentCurrency){
        cy.get(".amount")
            .find("small")
            .should("contain.text", paymentCurrency);
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()