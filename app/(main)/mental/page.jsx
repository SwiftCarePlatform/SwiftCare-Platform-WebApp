'use client'

import Section from '@/components/framer/FramerMotion';
import styles from './mentalService.module.css';

const MentalHealthServices = () => {

  const services = [
    {
      title: "Depression",
      description: "Support to help you navigate low moods, find hope, and reconnect with your life."
    },
    {
      title: "Trauma",
      description: "Heal at your own pace with support that's safe, validating, and grounded in evidence-based care."
    },
    {
      title: "Addiction & Recovery",
      description: "Compassionate guidance to break the cycle and build a healthier, lasting recovery."
    },
    {
      title: "Anxiety",
      description: "Understand your triggers and build lasting strategies to feel more at ease."
    },
    {
      title: "Grief & Loss",
      description: "Find space to mourn, process, and gently move forward after loss."
    },
    {
      title: "Stress",
      description: "Learn to manage overwhelming thoughts and regain a sense of calm and control."
    },
    {
      title: "Couple counselling",
      description: "Strengthen your relationship, improve communication, and navigate challenges together."
    }
  ];

  return (
    <Section
     initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
    
    >
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Mental Health Services</h1>
        <p className={styles.subtitle}>Supportive, evidence-based care for your well-being</p>
      </header>

      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <button className={styles.ctaButton}>See Our Doctors</button>
            </div>
          ))}
        </div>
      </main>
    </div>
    </Section>
  );
  
};

export default MentalHealthServices;