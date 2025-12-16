import RoomsHeader from "../../src/components/RoomsHeader/RoomsHeader";

describe("RoomsHeader component", () => {
  it("renders rooms header title", () => {
    cy.mount(<RoomsHeader />);

    // заголовок
    cy.contains("Rooms & Suites").should("exist");
  });
});
