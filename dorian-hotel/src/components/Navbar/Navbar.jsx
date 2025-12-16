import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src={logo} alt="Hotel Dorian logo" className="logo-img" />
          </Link>
        </div>

        <div className="navbar-right">
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

            <li className="dropdown">
              <Link to="/rooms" className="dropdown-title">
                Rooms ▾
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/rooms/1" onClick={() => setMenuOpen(false)}>Standard Room</Link></li>
                <li><Link to="/rooms/2" onClick={() => setMenuOpen(false)}>Deluxe Room</Link></li>
                <li><Link to="/rooms/3" onClick={() => setMenuOpen(false)}>Suite</Link></li>
              </ul>
            </li>

            <li><Link to="/amenities" onClick={() => setMenuOpen(false)}>Amenities</Link></li>
            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contacts" onClick={() => setMenuOpen(false)}>Contact</Link></li>

            {!user && (
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            )}

            {user && (
              <li>
                <button className="logout-btn" onClick={logout}>Logout</button>
              </li>
            )}

            <li className="nav-book">
              <Link to="/booking" className="book-btn" onClick={() => setMenuOpen(false)}>
                Book Now
              </Link>
            </li>
          </ul>

          {/* BURGER */}
          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* MOBILE STICKY BOOK */}
      <Link to="/booking" className="mobile-book">
        Book Now
      </Link>
    </>
  );
}
