import { useEffect, useState } from "react";

import RoomsHeader from "../../components/RoomsHeader/RoomsHeader";
import RoomFilters from "../../components/Filters/RoomFilters";
import RoomsGrid from "../../components/RoomsGrid/RoomsGrid";

import "./Rooms.css";

export default function Rooms() {

  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3001/rooms")
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

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
