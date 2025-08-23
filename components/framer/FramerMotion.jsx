'use client';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ children, variants, initial, animate, transition, refProp, className }) => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <motion.div
      ref={refProp || sectionRef}
      className={className}
      initial={variants ? 'hidden' : initial}
      animate={inView ? (variants ? 'show' : animate) : 'hidden'}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Section;
