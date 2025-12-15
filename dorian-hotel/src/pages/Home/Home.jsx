import Hero from "../../components/Hero/Hero";
import RoomCard from "../../components/RoomCard/RoomCard";

import standard from "../../assets/rooms/standard.jpg";
import deluxe from "../../assets/rooms/deluxe.jpg";
import suite from "../../assets/rooms/suite.jpg";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">

        
      {/* HERO */}
      <Hero />

      {/* HIGHLIGHTS */}
      <section className="highlights">
        <div className="highlight">
          <h3>🏰 Elegant Rooms</h3>
          <p>Experience comfort in a gothic-inspired atmosphere.</p>
        </div>

        <div className="highlight">
          <h3>📍 Central Location</h3>
          <p>In the heart of Uzhhorod with beautiful surroundings.</p>
        </div>

        <div className="highlight">
          <h3>🍳 Breakfast Included</h3>
          <p>Enjoy freshly prepared meals each morning.</p>
        </div>

        <div className="highlight">
          <h3>📶 Free Wi-Fi</h3>
          <p>High-speed internet for all guests.</p>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="featured-rooms">
        <h2>Our Featured Rooms</h2>

        <div className="rooms-grid">
          <RoomCard
            image={standard}
            title="Standard Room"
            price="120"
            link="/rooms/standard"
          />
          <RoomCard
            image={deluxe}
            title="Deluxe Room"
            price="180"
            link="/rooms/deluxe"
          />
          <RoomCard
            image={suite}
            title="Suite"
            price="260"
            link="/rooms/suite"
          />
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="gallery-preview">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A glimpse into the world of Hotel Dorian</p>

        <div className="gallery-mosaic">
          <div className="gallery-item item-large">
            <img src={suite} alt="Suite" />
          </div>

          <div className="gallery-item">
            <img src={deluxe} alt="Deluxe" />
          </div>

          <div className="gallery-item item-tall">
            <img src={standard} alt="Standard" />
          </div>

          <div className="gallery-item">
            <img src={suite} alt="Suite Detail" />
          </div>

          <div className="gallery-item">
            <img src={deluxe} alt="Lighting" />
          </div>
        </div>

        <a href="/gallery" className="view-gallery-btn">View Full Gallery</a>
      </section>

      <hr className="section-divider" />

      {/* BOTTOM CTA */}
      <section className="bottom-cta">
        <h2>Ready to book your stay?</h2>
        <a href="/booking" className="cta-btn">Book Now</a>
      </section>

    </div>
  );
}
