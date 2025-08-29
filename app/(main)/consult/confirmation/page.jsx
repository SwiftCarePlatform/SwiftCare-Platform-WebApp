"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import styles from "./appointPage.module.css";
import Section from "@/components/framer/FramerMotion";

function ConfirmationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const date = searchParams.get('date');
  const time = searchParams.get('time');

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <Section 
     initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
    
    >
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>

          <div className={styles.iconCircle }>
            <FaCheck className={styles.checkIcon}/>
          </div>
        </div>

        <h1 className={styles.title}>Appointment Booked</h1>

        <p className={styles.message}>
          Your appointment has been booked for {date || 'Tuesday, July 22'}, 2025, at {time || '12:00 PM'}.
        </p>

        <button className={styles.backButton} onClick={handleBackToHome}>
          <FaArrowLeft className={styles.arrowIcon} />
          Back to Home Page
        </button>
      </div>
    </div>
    </Section>
  );
}

export default ConfirmationContent
