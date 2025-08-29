import styles from "./appointPage.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Booking your appointment...</p>
    </div>
  );
}
