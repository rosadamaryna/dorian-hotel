import { MemoryRouter } from "react-router-dom";
import Hero from "../../src/components/Hero/Hero";

describe("Hero component", () => {
  it("renders hero title, subtitle and booking link", () => {
    cy.mount(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    cy.contains("Hotel Dorian").should("exist");
    cy.contains("Where shadows gently embrace the light").should("exist");
    cy.contains("Book Now").should("exist");
  });
});
