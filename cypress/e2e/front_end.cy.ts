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

  it("Go to Apps page and check the app links", () => {
    cy.get("#button-307965270-1").should("be.visible"); // Check by Id, Whether the element is visible
    cy.get("#button-307965270-1").click(); // Navigate to
    cy.url().should("eq", "https://www.simplyhealth.co.uk/health-plan/apps");
    cy.get(
      'a.sh-link.app_store_link[href="https://apps.apple.com/gb/app/simplyhealth/id1484099929"]'
    ).should("exist");
    cy.get(
      'a.sh-link.app_store_link[href="https://play.google.com/store/apps/details?id=co.uk.simplyhealth.app&hl=en_GB"]'
    ).should("exist");
  });

  it("Go to My Accounts Login page", () => {
    cy.get("a[href='https://www.simplyhealth.co.uk/member-portal']").should(
      "be.visible"
    );
    cy.get("a[href='https://www.simplyhealth.co.uk/member-portal']").click();
    cy.url().should("eq", "https://www.simplyhealth.co.uk/member-portal");``
    cy.get('input[name="email"]').type("example@example.com");
    cy.get('input[data-testid="general_password_password"]').type("Password@123");
    cy.get('button[data-testid="Login_SignIn_Button"]').click();
    cy.contains('Error: Incorrect username or password.').should('be.visible');
  });
  // More frontend tests go here...
});
