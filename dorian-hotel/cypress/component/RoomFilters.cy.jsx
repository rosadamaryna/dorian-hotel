import RoomFilters from "../../src/components/Filters/RoomFilters";

describe("RoomFilters component", () => {
  it("calls onFilterChange with correct value when button is clicked", () => {
    const onFilterChange = cy.stub();

    cy.mount(<RoomFilters onFilterChange={onFilterChange} />);

    // клікаємо по кнопці
    cy.contains("Deluxe").click();

    // перевіряємо, що callback був викликаний з правильним аргументом
    cy.wrap(onFilterChange).should("have.been.calledWith", "deluxe");
  });
});
