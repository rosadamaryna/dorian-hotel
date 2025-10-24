import styles from './Book.module.css';

export default function Book() {
  return (
    <section className={styles.book}>
      <h2>Billing Information</h2>
      <form>
        <div className={styles.row}>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
        </div>
        <div className={styles.row}>
          <input placeholder="E-mail" />
          <input placeholder="Phone" />
        </div>
        <div className={styles.row}>
          <input placeholder="Address" />
          <input placeholder="Zip Code" />
        </div>
        <textarea placeholder="Special Requests" rows="4"></textarea>
        <label>
          <input type="checkbox" /> I agree to terms and conditions
        </label>
        <div className={styles.buttons}>
          <button type="button">Back</button>
          <button type="submit">Confirm Reservation</button>
        </div>
      </form>
    </section>
  );
}
