/// <reference types="cypress" />

describe("SauceLab Landing Page", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
    cy.visit("https://www.saucedemo.com/");
  });
  it("Should display Swaglabs homepage", () => {
    cy.matchImageSnapshot("Full homepage");
  });
  it("Should display the logo", () => {
    cy.get(".login_logo").matchImageSnapshot("SwagLogo");
  });
});

["macbook-13", "ipad-2", "iphone-x"].forEach((screenSize) => {
  describe("testing screensizes", () => {
    beforeEach(() => {
      cy.viewport(screenSize);
      cy.visit("https://www.saucedemo.com/");
    });
    it("Should display screensizes correctly", () => {
      cy.matchImageSnapshot(`Image on ${screenSize}`);
    });
  });
});
