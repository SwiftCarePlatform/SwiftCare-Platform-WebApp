'use client'
import styles from './emergency.module.css';
import { MdWarning } from "react-icons/md";
import Section from '@/components/framer/FramerMotion';
const EmergencyHelp = () => {
  const crisisHotlines = [
    {
      title: "Mental Health Helpline",
      phone: "7000006463",
      description: "Free, confidential support 24/7"
    },
    {
      title: "Ambulance Service",
      phone: "8002255372",
      description: "Free, confidential support 24/7"
    },
    {
      title: "Medical Emergency",
      phone: "8091116264",
      description: "Free, confidential support 24/7"
    },
    {
      title: "Child Abuse Hotline",
      phone: "8002255372",
      description: "Free, confidential support 24/7"
    }
  ];

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Section 
     initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
    
    
    >
    <div className={styles.container}>
      {/* Emergency Header */}
      <header className={styles.emergencyHeader}>
        <h1 className={styles.emergencyTitle}>Emergency Help</h1>
        <p className={styles.emergencySubtitle}>
          If you're in crisis or need immediate support, please use the resources below.
        </p>
      </header>

      <main className={styles.main}>
        {/* Immediate Danger Alert */}
        <div className={styles.dangerAlert}>
          <div className={styles.alertIcon}><MdWarning /></div>
          <div className={styles.alertContent}>
            <p className={styles.alertText}>
              If you or someone you know is in immediate danger, call 767 (or your local emergency number).
            </p>
          </div>
        </div>

        {/* Crisis Hotlines Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>24/7 Crisis Hotlines</h2>
          
          <div className={styles.hotlinesGrid}>
            {crisisHotlines.map((hotline, index) => (
              <div key={index} className={styles.hotlineCard}>
                <h3 className={styles.hotlineTitle}>{hotline.title}</h3>
                <div className={styles.phoneSection}>
                  <span className={styles.callLabel}>Call: </span>
                  <button 
                    className={styles.phoneButton}
                    onClick={() => handleCall(hotline.phone)}
                    aria-label={`Call ${hotline.title} at ${hotline.phone}`}
                  >
                    {hotline.phone}
                  </button>
                </div>
                <p className={styles.hotlineDescription}>{hotline.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
    </Section>
  );
};

export default EmergencyHelp;