import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
        <>
          <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <img src={logo} alt="Hotel Dorian logo" className="logo-img" />
                </Link>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li className="dropdown">
                        <Link to="/rooms" className="dropdown-title">Rooms ▾</Link>
                        
                        <ul className="dropdown-menu">
                            <li><Link to="/rooms/standard">Standard Room</Link></li>
                            <li><Link to="/rooms/deluxe">Deluxe Room</Link></li>
                            <li><Link to="/rooms/suite">Suite</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/amenities">Amenities</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                    {!user && (
                        <li><Link to="/login">Login</Link></li>
                    )}

                    {user && (
                        <li><button className="logout-btn" onClick={logout}>Logout</button></li>
                    )}
                    <Link to="/booking" className="book-btn">Book Now</Link>
                </ul>
            </div>
          </nav>
        </>
    )
}
