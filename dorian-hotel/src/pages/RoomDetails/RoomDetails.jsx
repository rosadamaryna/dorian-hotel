import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { roomsData } from "../../data/roomsData";
import "./RoomDetails.css";

export default function RoomDetails() {
  const { slug } = useParams();
  const room = useMemo(() => roomsData.find((r) => r.slug === slug), [slug]);

  const [index, setIndex] = useState(0);

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

  const photos = room.photos || [];
  const current = photos[index];

  const prev = () => setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <div className="room-details-page">
      <div className="room-details-container">

        {/* верх: назва + breadcrumb */}
        <div className="rd-top">
          <div>
            <p className="rd-breadcrumb">
              <Link to="/" className="rd-link">Home</Link> /{" "}
              <Link to="/rooms" className="rd-link">Rooms</Link> /{" "}
              <span>{room.title}</span>
            </p>
            <h1 className="rd-title">{room.title}</h1>
            <p className="rd-meta">
              {room.guests} · {room.size} · {room.bed}
            </p>
          </div>

          <div className="rd-price">
            <p className="rd-from">From</p>
            <p className="rd-price-value">${room.price} / night</p>
            <Link to="/booking" className="rd-book">Book now</Link>
          </div>
        </div>

        {/* карусель */}
        <div className="rd-gallery">
          <div className="rd-main-photo">
            <img src={current} alt={`${room.title} photo ${index + 1}`} />

            {photos.length > 1 && (
              <>
                <button className="rd-nav rd-prev" onClick={prev} aria-label="Previous photo">
                  ‹
                </button>
                <button className="rd-nav rd-next" onClick={next} aria-label="Next photo">
                  ›
                </button>
              </>
            )}
          </div>

          {photos.length > 1 && (
            <div className="rd-thumbs">
              {photos.map((src, i) => (
                <button
                  key={i}
                  className={`rd-thumb ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Open photo ${i + 1}`}
                >
                  <img src={src} alt={`thumb ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* контент */}
        <div className="rd-content">
          <div className="rd-block">
            <h2>About this room</h2>
            <p className="rd-text">{room.description}</p>
          </div>

          <div className="rd-columns">
            <div className="rd-block">
              <h2>Amenities</h2>
              <ul className="rd-list">
                {room.amenities.map((a) => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>
            </div>

            <div className="rd-block">
              <h2>Rules</h2>
              <ul className="rd-list">
                {room.rules.map((r) => (
                  <li key={r}>• {r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rd-bottom-actions">
            <Link to="/rooms" className="rd-btn rd-outline">Back to Rooms</Link>
            <Link to="/booking" state={{ room: room.slug }} className="rd-book">
                Book now
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
