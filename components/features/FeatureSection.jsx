import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import ExploreButton from "./ExploreButton";
import "./FeatureSection.css";
import { FaPhone, FaBrain, FaUsers, FaLock } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";

const features = [
  {
    icon: <IoVideocam className="feature-icon" />,
    title: "Virtual Medical Consultation",
    description:
      "Talk to a doctor online from anywhere. Get medical advice, prescriptions, follow-ups without visiting the clinic — fast, safe, and convenient.",
  },
  {
    icon: <FaPhone className="feature-icon" />,
    title: "Emergency Helpline Integration",
    description:
      "Get instant help in emergencies. Quickly connect with trusted medical helplines or emergency services directly through the platform.",
  },
  {
    icon: <FaBrain className="feature-icon" />,
    title: "Mental Health Therapy Services",
    description:
      "Professional and compassionate care to support your mental health. Whether facing stress, anxiety, or life's challenges, our therapy services offer personalized help.",
  },
  {
    icon: <FaUsers className="feature-icon" />,
    title: "Community/Peer Group Support",
    description:
      "You're not alone. Join support groups and connect with others who share similar health experiences. Share stories, ask questions, and find comfort.",
  },
  {
    icon: <FaLock className="feature-icon" />,
    title: "Secure Data Storage and Privacy",
    description:
      "Your health information stays safe and private. We use strong security to protect your data, so only you and your healthcare team can access it.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section gradient">
      <div className="features-wrapper">
        <SectionHeader title="What we Provide" />

        <div className="features-grid">
          <div className="feature-row">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="feature-row">
            {features.slice(3).map((feature, index) => (
              <FeatureCard
                key={index + 3}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        <ExploreButton />
      </div>
    </section>
  );
}

export default FeaturesSection;
