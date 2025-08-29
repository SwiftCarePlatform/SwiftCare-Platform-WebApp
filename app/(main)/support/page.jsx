'use client'

import Section from '@/components/framer/FramerMotion';
import styles from './support.module.css';
import { FaFile } from "react-icons/fa";

const MentalHealthSupport = () => {
  const firstAidResources = [
    {
      title: "Choking Distress",
      description: "What to Do When Someone is Choking."
    },
    {
      title: "CPR Support",
      description: "Learn how to perform CPR safely, step by step."
    },
    {
      title: "Breathing Exercises:",
      description: "Watch calming videos."
    },
    {
      title: "Bleeding & Wound Care",
      description: "Apply pressure, clean wounds, and dress cuts effectively."
    }
  ];

  const selfHelpResources = [
    {
      title: "Managing Anxiety PDF",
      icon: <FaFile/>
    },
    {
      title: "Sleep Hygiene Checklist",
      icon: <FaFile/>
    },
    {
      title: "Daily Mood Tracker",
      icon: <FaFile/>
    }
  ];

  return (
    <Section
     initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
    
    >
    <div className={styles.container}>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          You're Not Alone, Find Support for Your Mental Health
        </h1>
        <p className={styles.heroSubtitle}>
          Access self-help tools, resources, and answers to your most pressing questions.
        </p>
        <button className={styles.emergencyButton}>
          Emergency Help
        </button>
      </section>

      {/* First Aid Resources Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>First Aid Resources</h2>
        <div className={styles.resourcesGrid}>
          {firstAidResources.map((resource, index) => (
            <div key={index} className={styles.resourceCard}>
              <h3 className={styles.resourceTitle}>{resource.title}</h3>
              <p className={styles.resourceDescription}>{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Self-Help Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Self-Help Library</h2>
        <div className={styles.libraryGrid}>
          {selfHelpResources.map((resource, index) => (
            <div key={index} className={styles.libraryCard}>
              <div className={styles.documentIcon}>{resource.icon}</div>
              <h3 className={styles.libraryTitle}>{resource.title}</h3>
              <button className={styles.downloadButton}>Download</button>
            </div>
          ))}
        </div>
        <div className={styles.viewAllContainer}>
          <button className={styles.viewAllButton}>View All</button>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Still Not Sure Where to Start?</h2>
        <p className={styles.ctaSubtitle}>
          Let me guide you toward the right support.
        </p>
        <button className={styles.consultButton}>
          Consult a Doctor
        </button>
      </section>
    </div>
    </Section>
  );
};

export default MentalHealthSupport;