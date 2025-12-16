import { MemoryRouter } from "react-router-dom";
import Footer from "../../src/components/Footer/Footer";

describe("Footer component", () => {
  it("renders footer content and links", () => {
    cy.mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // базова перевірка
    cy.get("footer").should("exist");

    // бренд
    cy.contains("Hotel Dorian").should("exist");
    cy.contains("Where shadows gently embrace the light").should("exist");

    // секції
    cy.contains("Quick Links").should("exist");
    cy.contains("Contact").should("exist");

    // приклад посилання
    cy.contains("Home").should("exist");
    cy.contains("Rooms").should("exist");
  });
});
