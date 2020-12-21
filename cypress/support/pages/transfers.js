export class Transfers {

    typeDebitNameAndSurname(name, surname){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(name)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(surname)
    }

    typeReceiverCard(receiverCard){
        cy.get('[data-qa-node="numberreceiver"]')
            .type(receiverCard)
    }

    typeReceiverNameAndSurname(name, surname){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(name)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(surname)
    }

     typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
     }

     checkDebitAndReceiverCards(debitCard, receiverCard){
        cy.get('[data-qa-node="payer-card"]')
            .should("have.text", debitCard)
            .get('[data-qa-node="receiver-card"]')
            .should("have.text", receiverCard)
     }

     checkDebitAmountAndTotalAmount(debitAmount, totalAmount){
        cy.get('[data-qa-node="payer-amount"]')
            .should("have.text", debitAmount)
            .get('[data-qa-node="total"]')
            .find("span")
            .should("contain.text", totalAmount)
     }

     checkDebitComission(comission){
        cy.get('[data-qa-node="payer-currency"]')
            .should("have.text", comission)
     }

     checktotalCurrency(currency){
        cy.get('[data-qa-node="total"]')
            .find("small")
            .should("contain.text", currency)
     }

     checkComment(comment){
        cy.get('[data-qa-node="comment"]')
            .should("have.text", comment);
     }
}

export const transfers = new Transfers()