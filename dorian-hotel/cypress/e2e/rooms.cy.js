Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Failed to fetch")) {
    return false;
  }
});

describe("Rooms page", () => {
  it("opens rooms page from navbar", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Rooms").click();

    cy.url().should("include", "/rooms");

    cy.contains("Standard").should("exist");
    cy.contains("Deluxe").should("exist");
    cy.contains("Suite").should("exist");
  });
});
