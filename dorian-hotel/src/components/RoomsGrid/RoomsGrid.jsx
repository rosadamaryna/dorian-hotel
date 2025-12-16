import RoomCard from "../RoomCard/RoomCard";

import standard from "../../assets/rooms/standard.jpg";
import deluxe from "../../assets/rooms/deluxe.jpg";
import suite from "../../assets/rooms/suite.jpg";

const images = {
  "Standard Room": standard,
  "Deluxe Room": deluxe,
  "Suite": suite
};

export default function RoomsGrid({ rooms }) {
  return (
    <div className="rooms-grid">
      {rooms.map(room => (
        <RoomCard
          key={room.id}
          image={images[room.title]}
          title={room.title}
          price={room.price}
          link={`/rooms/${room.id}`}
        />
      ))}
    </div>
  );
}
