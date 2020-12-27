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

//Example GET request
it.skip("Example request GET", () => {
  cy.request("https://next.privat24.ua/").then((response) => {
    console.log(response);
  });
});

//Example POST request
it("Example request POST", () => {
  const mobileData = {
    action: "info",
    phone: "+380686979712",
    amount: 50,
    currency: "UAH",
    cardCvv: "111",
    card: "4552331448138217",
    cardExp: "0524",
    xref: "9f38d4d42c1bb772b9e04697f37dbf9d",
    _: 1609095629770,
  };

  const headersData = {
    cookie:
      "_ga=GA1.2.1276086127.1608750658; _gid=GA1.2.687351041.1609060591; pubkey=ba05d66470715444631937bd7183e844; fp=12; lfp=12/23/2020, 9:11:08 PM",
  };

  cy.request({
    method: "POST",
    url: "https://next.privat24.ua/api/p24/pub/mobipay",
    body: mobileData,
    headers: headersData,
  }).then((response) => {
    console.log(response.body);
  });
});
