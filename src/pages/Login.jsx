import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <h2>Log in</h2>
      <label>Username or E-mail</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <button>Apply</button>
      <p className={styles.forgot}>Forgot the password?</p>
    </div>
  );
}
