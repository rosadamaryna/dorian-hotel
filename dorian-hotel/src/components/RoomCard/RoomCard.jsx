import { Link } from "react-router-dom";
import "./RoomCard.css";

export default function RoomCard({ image, title, price, link }) {
  return (
    <div className="room-card">
      <img src={image} alt={title} />

      <div className="room-info">
        <h3>{title}</h3>
        <p>From ${price} / night</p>
        <Link to={link} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}
