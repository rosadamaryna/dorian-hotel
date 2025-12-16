describe("Home page", () => {
  it("opens home page and shows hero content", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Hotel Dorian").should("exist");
    cy.contains("Book Now").should("exist");
  });
});