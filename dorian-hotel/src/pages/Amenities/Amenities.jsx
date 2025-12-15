import "./Amenities.css";

import wifi from "../../assets/icons/wifi.png";
import breakfast from "../../assets/icons/breakfast.png";
import spa from "../../assets/icons/spa.png";
import gym from "../../assets/icons/gym.png";
import parking from "../../assets/icons/parking.png";
import transfer from "../../assets/icons/transfer.png";

export default function Amenities() {
  return (
    <div className="amenities-page">

      {/* HEADER */}
      <div className="amenities-header">
        <h1>Amenities</h1>
        <p>Everything you need for a comfortable and elegant stay at Hotel Dorian.</p>
      </div>

      {/* GRID */}
      <div className="amenities-grid">

        <div className="amenity">
          <img src={wifi} alt="Wi-Fi" />
          <h3>High-Speed Wi-Fi</h3>
          <p>Fast and secure internet throughout the entire hotel.</p>
        </div>

        <div className="amenity">
          <img src={breakfast} alt="Breakfast" />
          <h3>Breakfast Included</h3>
          <p>Freshly prepared meals served every morning.</p>
        </div>

        <div className="amenity">
          <img src={spa} alt="Spa" />
          <h3>Spa & Wellness</h3>
          <p>Relax in our sauna, massage rooms and jacuzzi.</p>
        </div>

        <div className="amenity">
          <img src={gym} alt="Gym" />
          <h3>Fitness Center</h3>
          <p>Fully equipped gym available 24/7.</p>
        </div>

        <div className="amenity">
          <img src={parking} alt="Parking" />
          <h3>Private Parking</h3>
          <p>Secure on-site parking for our guests.</p>
        </div>

        <div className="amenity">
          <img src={transfer} alt="Transfer" />
          <h3>Airport Transfer</h3>
          <p>Convenient shuttle service to and from the airport.</p>
        </div>

      </div>

      {/* CTA */}
      <div className="amenities-cta">
        <a href="/booking" className="cta-btn">Book Now</a>
      </div>

    </div>
  );
}
