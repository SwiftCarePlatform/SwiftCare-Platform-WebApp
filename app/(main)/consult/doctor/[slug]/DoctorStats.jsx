import styles from "./doctorPage.module.css";

export default function DoctorStats({ doctor }) {
  return (
    <div className={styles.stats}>
      <div>
        <h3>{doctor.patients}</h3>
        <p>Patients</p>
      </div>
      <div>
        <h3>{doctor.experience} Years</h3>
        <p>Experience</p>
      </div>
      <div>
        <h3>{doctor.rating}</h3>
        <p>Ratings</p>
      </div>
      <div>
        <h3>{doctor.reviews}</h3>
        <p>Reviews</p>
      </div>
    </div>
  );
}
