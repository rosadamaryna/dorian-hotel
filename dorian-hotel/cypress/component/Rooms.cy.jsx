import { MemoryRouter } from "react-router-dom";
import Rooms from "../../src/pages/Rooms/Rooms";

describe("Rooms page", () => {
  it("renders rooms page content", () => {
    cy.mount(
      <MemoryRouter>
        <Rooms />
      </MemoryRouter>
    );

    // заголовок сторінки
    cy.contains("Rooms").should("exist");

    // фільтри
    cy.contains("All").should("exist");
  });
});
