/// <reference types="Cypress" />

import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";
import { archivePage } from "../support/pages/archive";

//Setup test logic
beforeEach("setuo success response with stub", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/confirm/check?", {
    fixture: "confirmResponse/success.json",
  });
});

//Example STUB API success response: state of archive: a, b, e
it("check success state of payment in the archive | public session", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/archive", {
    fixture: "archiveResponse/success.json",
  });
  basePage.open("https://next.privat24.ua?lang=en");
  archivePage.selectArchiveMenu();
});

//Example STUB API error response: state of archive: a, b, e
it("check error state of payment in the archive | public session", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/archive", {
    fixture: "archiveResponse/error.json",
  });
  basePage.open("https://next.privat24.ua?lang=en");
  archivePage.selectArchiveMenu();
});

//Example MOCK thank you screen in mobile replenishment proccess
it("Replenishment of Ukrainian mobile phone number", () => {
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

//Example E2E test for transfers
it("Money transfer between foreign cards", () => {
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

//Example HTTP GET request
it("Example sending the GET request", () => {
  cy.request("https://next.privat24.ua").then((response) => {
    console.log(response);
  });
});

//Example HTTP POST request with EXPECT verification of response
it("Example sending the POST request", () => {
  const requestBody = {
    action: "info",
    phone: "+380686979712",
    amount: 50,
    currency: "UAH",
    cardCvv: "111",
    card: "4552331448138217",
    cardExp: "0526",
    xref: "08ff0ad086fe9e4c5ab2e88a4bcee171",
    _: 1609237038419,
  };

  const headersData = {
    cookie:
      "_ga=GA1.2.1276086127.1608750658; _gid=GA1.2.687351041.1609060591; pubkey=964d8434883ba595c7170ec0f1fb503a; fp=18; lfp=12/23/2020, 9:11:08 PM",
  };

  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: requestBody,
    headers: headersData,
  }).then((response) => {
    expect(response).to.have.property("status").to.equal(200);
    expect(response.requestHeaders)
      .to.have.property("cookie")
      .not.be.oneOf(["", null]);
    expect(response.body).to.have.property("status").to.equal("success");
    expect(response.body.data).to.have.property("amount").to.equal("50.0");
    expect(response.body.data).to.have.property("status").to.equal("ok");
    console.log(response.body);
  });
});

//Example VISUAL test with STUB response for archive
it("check error state of payment in the archive | public session", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/archive", {
    fixture: "archiveResponse/error.json",
  });
  basePage.open("https://next.privat24.ua?lang=en");
  archivePage.selectArchiveMenu();

  cy.wait(2000).get("tbody").toMatchImageSnapshot();
});
