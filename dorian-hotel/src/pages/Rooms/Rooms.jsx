import { useState } from "react";
import { useRooms } from "../../hooks/useRooms";


import RoomsHeader from "../../components/RoomsHeader/RoomsHeader";
import RoomFilters from "../../components/Filters/RoomFilters";
import RoomsGrid from "../../components/RoomsGrid/RoomsGrid";

import "./Rooms.css";

export default function Rooms() {

  const { rooms } = useRooms();
  const [filter, setFilter] = useState("all");
  const filteredRooms = rooms.filter(room => {
    if (filter === "all") return true;
    return room.title.toLowerCase().includes(filter);
  });

  return (
    <div className="rooms-page">
      <RoomsHeader />
      <RoomFilters onFilterChange={setFilter} />
      <RoomsGrid rooms={filteredRooms} />
    </div>
  );
}
