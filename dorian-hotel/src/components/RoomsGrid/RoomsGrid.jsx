import RoomCard from "../RoomCard/RoomCard";
import standard from "../../assets/rooms/standard.jpg";
import deluxe from "../../assets/rooms/deluxe.jpg";
import suite from "../../assets/rooms/suite.jpg";

export default function RoomsGrid() {
  return (
    <div className="rooms-grid">
      <RoomCard image={standard} title="Standard Room" price="120" link="/rooms/standard" />
      <RoomCard image={deluxe} title="Deluxe Room" price="180" link="/rooms/deluxe" />
      <RoomCard image={suite} title="Suite" price="260" link="/rooms/suite" />
    </div>
  );
}
