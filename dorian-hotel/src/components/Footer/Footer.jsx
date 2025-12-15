import { Link } from "react-router-dom";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h2>Hotel Dorian</h2>
          <p>Where shadows gently embrace the light</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/amenities">Amenities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Korzo Street 12, Uzhhorod, Ukraine</p>
          <p>+38 (066) 123-45-67</p>
          <p>info@dorianhotel.com</p>

          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TripAdvisor</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Hotel Dorian. All rights reserved.
      </div>
    </footer>
  );
}
