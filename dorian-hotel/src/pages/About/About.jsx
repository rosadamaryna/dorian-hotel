import "./About.css";
import aboutImg from "../../assets/about.jpeg"; 
// додай будь-яке зображення сюди

export default function About() {
  return (
    <div className="about-page">

      {/* HEADER */}
      <div className="about-header">
        <h1>About Hotel Dorian</h1>
        <p>A boutique gothic-inspired hotel where elegance meets mystery.</p>
      </div>

      {/* IMAGE BANNER */}
      <div className="about-banner">
        <img src={aboutImg} alt="Hotel Dorian" />
      </div>

      {/* HISTORY */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Nestled in the historic heart of Uzhhorod, Hotel Dorian was founded with 
          a vision to blend timeless gothic architecture with modern luxury.
        </p>

        <p>
          Every detail — from handcrafted furniture to curated decor — reflects 
          our passion for elegance, mystery, and unforgettable ambience.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="about-section">
        <h2>Our Philosophy</h2>
        <p>
          At Hotel Dorian, we believe that hospitality is an art form. 
          Our mission is to create an atmosphere where guests feel both enchanted and at home.
        </p>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        <div className="feature">
          <h3>✨ Timeless Atmosphere</h3>
          <p>Inspired by gothic and Victorian aesthetics.</p>
        </div>

        <div className="feature">
          <h3>🕯 Personalized Experience</h3>
          <p>Attentive service tailored to every guest.</p>
        </div>

        <div className="feature">
          <h3>🏰 Historical Elegance</h3>
          <p>Located near iconic landmarks of Uzhhorod.</p>
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <a href="/booking" className="cta-btn">Book Your Stay</a>
      </div>

    </div>
  );
}
