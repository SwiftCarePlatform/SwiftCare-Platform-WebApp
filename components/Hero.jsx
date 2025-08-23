"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/HeroSection.css";
import HeroImage1 from "@/public/Hero Image 1.png";
import HeroImage2 from "@/public/Hero Image 2.png";
import HeroImage3 from "@/public/Hero Image 3.png";
import Image from "next/image";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [HeroImage1, HeroImage2, HeroImage3];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);


  // Variants for staggered text
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };


  // Variant for image animation
  const imageWrapperVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 className="hero-heading" variants={childVariants}>
          Explore Innovative{" "}
          <span className="highlight underline-style">Healthcare</span>
          <span>
            {" "}
            Solutions
            <br /> that Truly Resonate with Everyone.
          </span>
        </motion.h1>

        <motion.p className="hero-description" variants={childVariants}>
          we connect you with dedicated medical experts, mental health
          professionals, and supportive community services, delivering
          whole-person care for every stage of life and every walk of life.
        </motion.p>

        <motion.button
          className="cta-button"
          variants={childVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Let&apos;s get started
        </motion.button>
      </motion.div>


      <motion.div
        className="hero-image-wrapper"
        style={{ position: "relative", overflow: "hidden" }}
        variants={imageWrapperVariants}
        initial="hidden"
        animate="show"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-image ${currentIndex === index ? "active" : ""}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <Image
              src={image}
              alt={`Doctor ${index + 1}`}
              width={667}
              height={643}
              priority={index === 0}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ))}

        <div className="caption">
          <div className="slider">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
