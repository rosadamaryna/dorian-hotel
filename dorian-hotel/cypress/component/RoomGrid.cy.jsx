import { MemoryRouter } from "react-router-dom";
import RoomsGrid from "../../src/components/RoomsGrid/RoomsGrid";
import { roomsData } from "../../src/data/roomsData";

describe("RoomsGrid component", () => {
  it("renders list of rooms from props", () => {
    cy.mount(
      <MemoryRouter>
        <RoomsGrid rooms={roomsData} />
      </MemoryRouter>
    );

    // перевіряємо кількість карток
    cy.get(".room-card").should("have.length", roomsData.length);

    // перевіряємо наявність конкретної кімнати
    cy.contains(roomsData[0].title).should("exist");
  });
});
