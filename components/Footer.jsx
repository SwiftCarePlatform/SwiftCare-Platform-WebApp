'use client';
import { FaUserMd } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Section from "./framer/FramerMotion";
import { motion } from "framer-motion";
import "../css/FooterSection.css"

const Footer = () => {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Section variants={container} initial="hidden" animate="show">
      <footer className="footer">
        <div className="footer-container">

          <motion.div className="footer-brand" variants={item}>
            <div className="footer-row">
              <div className="footer-box">
                <FaUserMd className="doctor-icon" />
              </div>
              <span className="footer-text">SWIFTCARE</span>
            </div>
          </motion.div>

          <div className="footer-right">
            <motion.div className="footer-section" variants={item}>
              <p className="footer-para1">Follow us</p>
              <div className="social-icons">
                <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                  <div className="icon-circle"><FaLinkedinIn /></div>
                </Link>
                <Link href="https://twitter.com" aria-label="X (Twitter)">
                  <div className="icon-circle"><FaXTwitter /></div>
                </Link>
                <Link href="https://facebook.com" aria-label="Facebook">
                  <div className="icon-circle"><FaFacebookF /></div>
                </Link>
                <Link href="https://instagram.com" aria-label="Instagram">
                  <div className="icon-circle"><FaInstagram /></div>
                </Link>
              </div>
            </motion.div>

            <motion.div className="footer-section" variants={item}>
              <p className="footer-para">Company</p>
              <ul>
                <li>About</li>
                <li>Features</li>
              </ul>
            </motion.div>

            <motion.div className="footer-section" variants={item}>
              <p className="footer-para">Help</p>
              <ul>
                <li>Terms & Conditions</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div className="footer-bottom" variants={item}>
          <p>&copy;{new Date().getFullYear()} SwiftCare. All Rights Reserved</p>
        </motion.div>
      </footer>
    </Section>
  );
};

export default Footer;
