import ProcessStep from "./ProcessStep";
import "./howSwiftcareWorks.css";

const HowSwiftcareWorks = () => {
  const processSteps = [
    {
      title: "Create an account",
      description:
        "Sign up quickly to unlock access to trusted, personalized healthcare services.",
    },
    {
      title: "Choose a Service",
      description:
        "Pick the care you need-medical, mental health, or emergency-quickly and easily.",
    },
    {
      title: "Schedule Session",
      description:
        "Book a time that works for you and connect with healthcare expert fast and hassle-free.",
    },
    {
      title: "Join a Community",
      description:
        "Connect with supportive groups and resources to empower your health journey together.",
    },
  ];

  return (
    <section className="how-swiftcare-section">
      <div className="how-swiftcare-container">
        <div className="how-swiftcare-left">
          <h2 className="how-swiftcare-title">
            <span>How </span>
            <span className="highlight">Swiftcare</span>
            <span> works</span>
          </h2>
          <p className="how-swiftcare-description">
            Begin your journey to accessible healthcare and compassionate grief
            support-no barriers, just care when you need it most.
          </p>
          <button className="how-swiftcare-button">Book an appointment</button>
        </div>
        <div className="how-swiftcare-right">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step-row">
              <div className="process-step-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
                </svg>
              </div>

              <ProcessStep title={step.title} description={step.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSwiftcareWorks;
