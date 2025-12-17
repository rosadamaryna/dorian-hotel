import { MemoryRouter } from "react-router-dom";
import Home from "../../src/pages/Home/Home";

describe("Home page", () => {
  it("renders main home components", () => {
    cy.mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Hero
    cy.contains("Hotel Dorian").should("exist");

    // Rooms section (назва може відрізнятись)
    cy.contains("Rooms").should("exist");
  });
});
