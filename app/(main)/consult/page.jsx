"use client";
import RecommendedSection from "./recommended";
import TopRatedSection from "./toprated";
import styles from "./consultPage.module.css";
import { useState } from "react";
import Section from "@/components/framer/FramerMotion";

export default function ConsultADoctor() {
  const [searchValue, setSearchValue] = useState("");





  return (
      <Section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <TopRatedSection searchValue={searchValue} setSearchValue={setSearchValue} />
          <RecommendedSection searchValue={searchValue} />
        </div>
      </div>
    </Section>
  );
}
