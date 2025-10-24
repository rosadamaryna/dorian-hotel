import styles from './Home.module.css';
import background from '../assets/images/header.jpg'; // ← встав своє зображення у цю теку

export default function Home() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.centered}>
          <h1 className={styles.title}>Hotel Dorian</h1>
          <p className={styles.subtitle}>
            Where shadows gently embrace the light
          </p>
          <button className={styles.offerBtn}>See offers</button>
        </div>

        <div className={styles.bookingBox}>
          <form className={styles.bookingForm}>
            <div className={styles.inputGroup}>
              <label>Check-in Date</label>
              <input type="date" />
            </div>
            <div className={styles.inputGroup}>
              <label>Check-out Date</label>
              <input type="date" />
            </div>
            <div className={styles.inputGroup}>
              <label>Guests</label>
              <select>
                <option>1 ROOM</option>
                <option>2 ROOMS</option>
                <option>3 ROOMS</option>
              </select>
            </div>
            <button type="submit" className={styles.bookNow}>
              BOOK NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
