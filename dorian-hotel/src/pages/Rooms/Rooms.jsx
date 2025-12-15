import RoomsHeader from "../../components/RoomsHeader/RoomsHeader";
import RoomFilters from "../../components/Filters/RoomFilters";
import RoomsGrid from "../../components/RoomsGrid/RoomsGrid";

import "./Rooms.css";

export default function Rooms() {
  return (
    <div className="rooms-page">
      <RoomsHeader />     {/* Заголовок */}
      <RoomFilters />     {/* Фільтри */}
      <RoomsGrid />       {/* Список номерів */}
    </div>
  );
}
