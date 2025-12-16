import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./RoomDetails.css";

import standard from "../../assets/rooms/standard.jpg";
import deluxe from "../../assets/rooms/deluxe.jpg";
import suite from "../../assets/rooms/suite.jpg";

const photosMap = {
  standard,
  deluxe,
  suite,
};

export default function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3001/rooms/${id}`)
      .then(res => res.json())
      .then(data => setRoom(data));
  }, [id]);

  if (!room) {
    return (
      <div className="room-details-page">
        <div className="room-details-container">
          <h1>Room not found</h1>
          <p>Try going back to Rooms.</p>
          <Link to="/rooms" className="rd-btn">Back to Rooms</Link>
        </div>
      </div>
    );
  }

  const photos = (room.photos || []).map(key => photosMap[key]);
  const current = photos[index];

  const prev = () => setIndex(i => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setIndex(i => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <div className="room-details-page">
      <div className="room-details-container">

        {/* TOP */}
        <div className="rd-top">
          <div>
            <p className="rd-breadcrumb">
              <Link to="/" className="rd-link">Home</Link> /{" "}
              <Link to="/rooms" className="rd-link">Rooms</Link> /{" "}
              <span>{room.title}</span>
            </p>

            <h1 className="rd-title">{room.title}</h1>

            {/* META + PRICE INLINE */}
            <p className="rd-meta">
              {room.guests} · {room.size} · {room.bed}
              <span className="rd-price-inline">
                {" "}· ${room.price} / night
              </span>
            </p>
          </div>
        </div>

        {/* GALLERY */}
        <div className="rd-gallery">
          <div className="rd-main-photo">
            <img src={current} alt={`${room.title} photo`} />

            {photos.length > 1 && (
              <>
                <button className="rd-nav rd-prev" onClick={prev}>‹</button>
                <button className="rd-nav rd-next" onClick={next}>›</button>
              </>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="rd-content">
          <div className="rd-block">
            <h2>About this room</h2>
            <p className="rd-text">{room.description}</p>
          </div>

          <div className="rd-columns">
            <div className="rd-block">
              <h2>Amenities</h2>
              <ul className="rd-list">
                {room.amenities.map(a => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>
            </div>

            <div className="rd-block">
              <h2>Rules</h2>
              <ul className="rd-list">
                {room.rules.map(r => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM ACTIONS */}
          <div className="rd-bottom-actions">
            <Link to="/rooms" className="rd-btn rd-outline">
              Back to Rooms
            </Link>

            <Link to="/booking" className="rd-book">
              Book now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
