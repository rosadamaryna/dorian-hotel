describe("Booking page", () => {
  it("opens booking page from Book Now button", () => {
    cy.visit("http://localhost:5173");

    // клік по кнопці бронювання
    cy.contains("Book Now").first().click();

    // перевіряємо URL
    cy.url().should("include", "/booking");

    // перевіряємо, що сторінка бронювання завантажилась
    cy.contains("Book Your Stay").should("exist");
  });
});
