import styles from "./doctorPage.module.css";

export default function AboutSection({ about }) {
  return (
    <div className={styles.about}>
      <h4>About:</h4>
      <p>{about}</p>
    </div>
  );
}
