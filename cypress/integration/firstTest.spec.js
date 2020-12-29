/// <reference types="Cypress" />

import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";
import { archivePage } from "../support/pages/archive";

beforeEach("setuo success response with stub", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/confirm/check?", {
    fixture: "confirmResponse/success.json",
  });
});

//Example stub api success response: state of archive: a, b, e
it.skip("check success state of payment in the archive | public session", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/archive", {
    fixture: "archiveResponse/success.json",
  });
  basePage.open("https://next.privat24.ua?lang=en");
  archivePage.selectArchiveMenu();
});

//Example stub api error response: state of archive: a, b, e
it("check error state of payment in the archive | public session", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/archive", {
    fixture: "archiveResponse/error.json",
  });
  basePage.open("https://next.privat24.ua?lang=en");
  archivePage.selectArchiveMenu();
});

//Example mock thank you screen in mobile replenishment proccess
it.skip("Replenishment of Ukrainian mobile phone number", () => {
  basePage.open("https://next.privat24.ua/mobile?lang=en");
  mobileReplenishment.typePhoneNumber("686979712");
  basePage.typeAmount("1");
  basePage.typeDebitCardData("4552331448138217", "0524", "111");
  cy.wait(3000);
  basePage.submitPayment();
  mobileReplenishment.checkDebitCard("4552 **** **** 8217");
  mobileReplenishment.checkDebitAmount("1");
  mobileReplenishment.checkDebitAmountAndComission("2");
  mobileReplenishment.checkReceiverAmount("1");
  mobileReplenishment.checkPaymentCurrency("UAH");
  cy.contains("Confirm").click();
});

//Example e2e test for transfers
it.skip("Money transfer between foreign cards", () => {
  basePage.open("https://next.privat24.ua/money-transfer/card?lang=en");
  basePage.typeDebitCardData("4552331448138217", "0524", "111");
  transfers.typeDebitNameAndSurname("Shayne", "McConnell");
  transfers.typeReceiverCard("5309233034765085");
  transfers.typeReceiverNameAndSurname("Juliana", "Janssen");
  basePage.typeAmount("300");
  transfers.typeComment("Cypress test");
  cy.wait(2000);
  basePage.submitPayment();
  transfers.checkDebitAndReceiverCards("* 8217", "* 5085");
  transfers.checkDebitAmountAndTotalAmount("300 UAH", "389.33");
  transfers.checkDebitComission("89.33 UAH");
  transfers.checktotalCurrency("UAH");
  transfers.checkComment("Cypress test");
});
