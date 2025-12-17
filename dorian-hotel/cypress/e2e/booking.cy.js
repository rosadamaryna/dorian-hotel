describe("Booking page", () => {
  it("opens booking page from Book Now button", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Book Now").first().click();

    cy.url().should("include", "/booking");

    cy.contains("Book Your Stay").should("exist");
  });
});
