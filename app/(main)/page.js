"use client";

import Faq from "@/components/faq/Faq";
import FeaturesSection from "@/components/features/FeaturesSection";
import WhySwiftCare from "@/components/features2/WhySwiftCare";
import Hero from "@/components/Hero";
import HowSwiftcareWorks from "@/components/hero-1/HowSwiftcareWorks";
import HealthcareProfessionalSection from "@/components/joinus/HealthCare";
import ConsultationPackages from "@/components/pricing/Consultation";
import Section from "@/components/framer/FramerMotion";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
      >
        <Hero />
      </motion.div>

      <Section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <HowSwiftcareWorks />
      </Section>

      <Section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <FeaturesSection />
      </Section>

      <Section
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <ConsultationPackages />
      </Section>

      <Section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.8, 0.25, 1], delay: 0.25 }}
      >
        <WhySwiftCare />
      </Section>

      <Section
        initial={{ opacity: 0, rotate: -5, y: 50 }}
        animate={{ opacity: 1, rotate: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <Faq />
      </Section>

      <Section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      >
        <HealthcareProfessionalSection />
      </Section>
    </>
  );
};

export default Homepage;
