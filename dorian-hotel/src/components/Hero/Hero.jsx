import styles from "./Hero.module.css";
import bg from "../../assets/bg.jpeg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.overlay}>
        
        <h1 className={styles.title}>Hotel Dorian</h1>

        <p className={styles.subtitle}>
          Where shadows gently embrace the light
        </p>

        <Link to="/booking" className={styles.button}>
          Book Now
        </Link>

      </div>
    </section>
  );
}
