/// <reference types="Cypress" />

import { basePage } from "../support/pages/basePage";
import { archivePage } from "../support/pages/archive";

beforeEach("setuo success response with stub", () => {
  cy.intercept("https://next.privat24.ua/api/p24/pub/confirm/check?", {
    fixture: "confirmResponse/success.json",
  });
});

//Example stub api success response: state of archive: a, b, e
it("check success state of payment in the archive | public session", () => {
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