/// <reference types="cypress" />

describe("Frontend Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://www.simplyhealth.co.uk/");
    cy.get("#onetrust-accept-btn-handler").click();
  });

  it("successfully loads the webpage", () => {
    cy.url().should("include", "simplyhealth");
  });

  it("has a visible logo", () => {
    cy.get(".sh-site__logo").should("be.visible"); // replace with actual selector for the logo
  });

  // More frontend tests go here...
});
