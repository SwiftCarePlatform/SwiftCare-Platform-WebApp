"use client";

import DoctorHeader from "./DoctorHeader";
import { allDoctors } from "../../doctors";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import DoctorStats from "./DoctorStats";
import AboutSection from "./AboutSection";
import AppointmentSection from "./AppointmentSection";
import Section from "@/components/framer/FramerMotion";

export default function DoctorProfile() {
  const params = useParams();
  const { slug } = params;

  if (!slug || Array.isArray(slug)) {
    notFound();
  }

  const doctor = allDoctors.find((doc) => doc.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <Section
     initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="container">
          <DoctorHeader doctor={doctor} />
          <DoctorStats doctor={doctor} />
          <AboutSection about={doctor.about} />
          <AppointmentSection />
        </div>
      </div>
    </Section>
  );
}
