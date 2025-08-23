'use client'
import { useState } from "react";
import FaqItem from "./FaqItem";
import "./Faq.css";

const Faq = () => {

  const faqItems = [
    {
      question: "What is SwiftCare?",
      answer: `SwiftCare is a comprehensive digital platform that provides access to physical, mental, and emotional healthcare. 
               It offers virtual consultations with healthcare professionals, emergency helpline access, grief counseling, peer support groups, 
               and legacy preservation tools — all in one integrated solution.`,
    },
    {
      question: "Who can use SwiftCare?",
      answer: `SwiftCare  is for anyone in need of medical, mental health, or grief-related support. 
               It’s built for patients, healthcare professionals, mental health providers, grief counselors and individuals navigating loss.`,
    },
    {
      question: "Is SwiftCare available 24/7?",
      answer: `Yes. Emergency helplines and community support groups are available 24/7. 
               Virtual consultation with healthcare professionals and grief group sessions are available based on appointment scheduling.`,
    },
    {
      question: "How do i join a grief support group",
      answer: `You can browse available groups on the platform and join with just a few clicks. 
               You will receive a schedule, access link, and any session detail via email.`,
    },
    {
      question: "Are therapy sessions confidential?",
      answer: `Absolutely, All therapy sessions, messages, and user data are protected with end~to~end encryption and strict privacy policy.`,
    },
  ];
  
  

  const [openIndex, setOpenIndex] = useState(0); 

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <header className="faq-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-subtitle">
            Everything you need to know about the SwiftCare Platform
          </p>
        </header>

        <div className="faq-items">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
