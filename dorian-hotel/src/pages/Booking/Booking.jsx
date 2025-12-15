import { useState } from "react";
import { useLocation } from "react-router-dom";
import { roomsData } from "../../data/roomsData";
import "./Booking.css";

export default function Booking() {
  const location = useLocation();

  // якщо прийшли з RoomDetails — підставляємо кімнату
  const preselectedRoom = location.state?.room || "";

  const [form, setForm] = useState({
    room: preselectedRoom,
    checkIn: "",
    checkOut: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // базова перевірка
    if (!form.room || !form.checkIn || !form.checkOut || !form.name || !form.email) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Booking data:", form); // тут буде API в майбутньому
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-page">
        <div className="booking-success">
          <h1>Booking Request Sent</h1>
          <p>
            Thank you, <strong>{form.name}</strong>!  
            We will contact you shortly to confirm your reservation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Book Your Stay</h1>

        <form className="booking-form" onSubmit={handleSubmit}>
          {/* ROOM */}
          <div className="form-group">
            <label>Room *</label>
            <select name="room" value={form.room} onChange={handleChange} required>
              <option value="">Select room</option>
              {roomsData.map((room) => (
                <option key={room.slug} value={room.slug}>
                  {room.title} — ${room.price}/night
                </option>
              ))}
            </select>
          </div>

          {/* DATES */}
          <div className="form-row">
            <div className="form-group">
              <label>Check-in *</label>
              <input type="date" name="checkIn" value={form.checkIn} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Check-out *</label>
              <input type="date" name="checkOut" value={form.checkOut} onChange={handleChange} />
            </div>
          </div>

          {/* GUESTS */}
          <div className="form-group">
            <label>Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              max="5"
              value={form.guests}
              onChange={handleChange}
            />
          </div>

          {/* CONTACT */}
          <div className="form-row">
            <div className="form-group">
              <label>Full name *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label>Additional requests</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="booking-btn">
            Send Booking Request
          </button>
        </form>
      </div>
    </div>
  );
}
