describe("Login page", () => {
  it("logs in user with valid credentials", () => {
    cy.visit("http://localhost:5173/login");
    
    cy.contains("Sign In").should("exist");

    cy.get('input[type="email"]').type("admin@hotel.com");
    cy.get('input[type="password"]').type("123456");

    cy.contains("Login").click();

    cy.contains("Hotel Dorian", { timeout: 5000 }).should("exist");
  });
});
