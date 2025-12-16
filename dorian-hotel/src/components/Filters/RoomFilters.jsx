export default function RoomFilters({ onFilterChange }) {
  return (
    <div className="room-filters">
      <button onClick={() => onFilterChange("all")}>All</button>
      <button onClick={() => onFilterChange("standard")}>Standard</button>
      <button onClick={() => onFilterChange("deluxe")}>Deluxe</button>
      <button onClick={() => onFilterChange("suite")}>Suite</button>
    </div>
  );
}
