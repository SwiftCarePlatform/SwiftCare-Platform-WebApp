"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PriceToggle from "./PriceToggle";
import { ServiceCard } from "./ServiceCard";
import "./consultation.css";

export const ConsultationPackages = () => {
  const [pricingMode, setPricingMode] = useState("session");

  const emergencyFeatures = [
    { text: "24/7 emergency helplines" },
    { text: "Guidance for urgent care needs" },
    { text: "Symptom Triage Tool" },
    { text: "Crisis Intervention" },
    { text: "And more......" },
  ];

  const mentalHealthFeatures = [
    { text: "Therapy Session" },
    { text: "Stress and anxiety management" },
    { text: "Access to support group" },
    { text: "Online therapy chats and video calls" },
    { text: "And more......" },
  ];

  const doctorConsultationFeatures = [
    { text: "General health check-ups" },
    { text: "Specialist video consultation" },
    { text: "E-prescription services" },
    { text: "Lifestyle & Wellness" },
    { text: "And more......" },
  ];

  const handleContinue = (serviceType) => {
    console.log(`Continue clicked for ${serviceType}`);
  };

 

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };


  const card = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15, y: 100 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <section className="consultation-packages">
      <header className="consultation-header">
        <h1>Consultation Packages</h1>
      </header>

      <PriceToggle activeOption={pricingMode} onToggle={setPricingMode} />

      <motion.div
        className="service-cards-wrapper"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={card}>
          <ServiceCard
            headerImage="/Rectangle1.svg"
            title="Emergency Support Services"
            price="Free"
            borderColor="border-amber-200"
            dividerColor="divider-line"
            buttonColor="button-line"
            featuresTitle="For solo use:"
            features={emergencyFeatures}
            onContinue={() => handleContinue("Emergency Support")}
          />
        </motion.div>

        <motion.div variants={card}>
          <ServiceCard
            headerImage="/Rectangle2.svg"
            title="Mental / Emotional Wellbeing"
            price="#3500"
            borderColor="border-blue-400"
            dividerColor="divider-cyan"
            buttonColor="button-cyan"
            featuresTitle="For Solo & Family use:"
            features={mentalHealthFeatures}
            onContinue={() => handleContinue("Mental Health")}
          />
        </motion.div>

        <motion.div variants={card}>
          <ServiceCard
            headerImage="/Rectangle3.svg"
            title="Doctor Consultation"
            price="#5000"
            borderColor="border-line-300"
            dividerColor="divider-line"
            buttonColor="button-line-dark"
            featuresTitle="For Solo & Family use:"
            features={doctorConsultationFeatures}
            onContinue={() => handleContinue("Doctor Consultation")}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConsultationPackages;


