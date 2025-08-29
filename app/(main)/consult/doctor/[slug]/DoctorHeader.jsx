"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import styles from "./doctorPage.module.css";

export default function DoctorHeader({ doctor }) {
  const router = useRouter();

  const handleBackClick = () => {
    router.push("/consult");
  };

  return (
    <div className={styles.header}>
      <button className={styles.backBtn} onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <Image
        src={doctor.image}
        alt={doctor.name}
        width={400}
        height={400}
        className={styles.profileImage}
      />
      <h2>{doctor.name}</h2>

      <p className={styles.specialty}>{doctor.specialty}</p>
      <p className={styles.location}>
        <FaMapMarkerAlt /> {doctor.location}
      </p>
    </div>
  );
}