/// <reference types="Cypress" />
import { basePage } from "../support/pages/basePage"
import { mobileReplenishmentPage } from "../support/pages/mobileReplenishmentPage"
import { transferPage } from "../support/pages/p2pTransferPage"

it('Replenishment of Ukraine mobile phone number', ()=> {
        basePage.navigate('https://next.privat24.ua/mobile?lang=en')
        mobileReplenishmentPage.typePhoneNumber('686979712')
        mobileReplenishmentPage.typeAmount('1')
        mobileReplenishmentPage.typeFullCardData('4552331448138217', '0524', '111')
        cy.wait(3000)
        mobileReplenishmentPage.submitPayment()
        mobileReplenishmentPage.checkReceiverCard('4552 **** **** 8217')
        mobileReplenishmentPage.checkAmount('1')
        mobileReplenishmentPage.checkPaymentCurrency('UAH')
        mobileReplenishmentPage.checkTotalAmountWithComission('2')
        mobileReplenishmentPage.checkComissionCurrency('UAH')
})

it('Money transfer between foreign cards', () => {         
        basePage.navigate('https://next.privat24.ua/money-transfer/card?lang=en')
        transferPage.typeFullCardData('4552331448138217', '0524', '111')
        transferPage.typeFirstName('Shayne')
        transferPage.typeSurname('McConnell')
        transferPage.typeReceiverCardNumber('5309233034765085')
        transferPage.typeReceiverFirstName('Juliana')
        transferPage.typeReceiverSurname('Jansen')
        transferPage.typeAmount('300')
        transferPage.typeComment('cypress test')
        transferPage.submitPayment()
        transferPage.checkPayerCard('* 8217')
        transferPage.checkReceiverCard('* 5085')
        transferPage.checkPayerAmountAndCurrency('300 UAH')
        transferPage.checkPayerComissionAmountAndCurrency('89.10 UAH')
        transferPage.checkTotalAmount('389.10')
        transferPage.checkCurrencyOftotalAmount('UAH')
})