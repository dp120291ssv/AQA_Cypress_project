/// <reference types="Cypress" />

import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";

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
});

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

it.skip("Example sending the GET request", () => {
  cy.request("https://next.privat24.ua").then((response) => {
    console.log(response);
  });
});

//Example HTTP POST request with expect verification of response
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
    console.log(response.body);
    expect(response).to.have.property("status").to.equal(200);
    expect(response.requestHeaders)
      .to.have.property("cookie")
      .not.be.oneOf(["", null]);
    expect(response.body).to.have.property("status").to.equal("success");
    expect(response.body.data).to.have.property("amount").to.equal("50.0");
    expect(response.body.data).to.have.property("status").to.equal("ok");
  });
});

//Example HTTP POST request with should verification of response
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
  })
    .its("body")
    .should("contain", {
      status: "success",
    })
    .its("data")
    .should("contain", {
      status: "ok",
    });
});
