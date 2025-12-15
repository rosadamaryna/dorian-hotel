import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to assist you with bookings, questions or special requests.</p>
      </div>

      {/* CONTACT DETAILS */}
      <section className="contact-info">

        <div className="info-block">
          <h3>📍 Address</h3>
          <p>Korzo Street 12, Uzhhorod, Ukraine</p>
        </div>

        <div className="info-block">
          <h3>📞 Phone</h3>
          <p>+38 (066) 123-45-67</p>
        </div>

        <div className="info-block">
          <h3>📧 Email</h3>
          <p>info@dorianhotel.com</p>
        </div>

        <div className="info-block">
          <h3>🕒 Working Hours</h3>
          <p>24/7 reception</p>
        </div>

      </section>

      {/* MAP */}
      <div className="map-wrapper">
        <iframe
          title="hotel-map"
          src="https://maps.google.com/maps?q=Uzhhorod%20Korzo&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </div>

      {/* CONTACT FORM */}
      <div className="contact-form">
        <h2>Send Us a Message</h2>

        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* CTA */}
      <div className="contact-cta">
        <a href="/booking" className="cta-btn">Book Your Stay</a>
      </div>

    </div>
  );
}
