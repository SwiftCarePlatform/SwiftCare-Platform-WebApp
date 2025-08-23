import "./WhySwiftCare.css";
import { PiSwatches } from "react-icons/pi";
import { PiHandHeartLight } from "react-icons/pi";
import { PiFirstAid } from "react-icons/pi";
import { PiStethoscope } from "react-icons/pi";
import { PiVaultLight } from "react-icons/pi";
import { PiUsersFour } from "react-icons/pi";

const WhySwiftCare = () => {
  return (
    <section className="why-features-section">


      <div className="why-features-heading">
        <h2 className="why-h2">
          Why choose <span className="why-highlight">Swiftcare</span>?
        </h2>
      </div>


      <div className="why-features-grid">
        <div className="why-feature-box">
          <div className="why-icon">{<PiSwatches />}</div>
          <h3 className="why-h3">Clear, Simple Plans</h3>
          <p className="why-p">
            No hidden fees or confusing terms—just straightforward pricing
            designed to fit your needs and budget, so you always know what to
            expect.
          </p>
        </div>
        <div className="why-feature-box">
          <div className="why-icon">{<PiHandHeartLight />}</div>
          <h3 className="why-h3">Always-On Care</h3>
          <p className="why-p">
            Healthcare that fits your schedule. Get reliable medical support
            anytime—day or night—so you're never left waiting when it matters
            most.
          </p>
        </div>
        <div className="why-feature-box">
          <div className="why-icon">{<PiFirstAid />}</div>
          <h3 className="why-h3">Instant Specialist Help</h3>
          <p className="why-p">
            Healthcare that fits your schedule. Get reliable medical support
            anytime—day or night—so you're never left waiting when it matters
            most.
          </p>
        </div>
        <div className="why-feature-box">
          <div className="why-icon">{<PiStethoscope />}</div>
          <h3 className="why-h3">Tailored for Every Age</h3>
          <p className="why-p">
            From children to seniors, our care adapts to every stage of
            life—providing personalized support that meets your unique health
            needs.
          </p>
        </div>
        <div className="why-feature-box">
          <div className="why-icon">{<PiVaultLight />}</div>
          <h3 className="why-h3">Safe & Confidential</h3>
          <p className="why-p">
            Your privacy matters. We ensure every interaction is secure and
            judgment-free, with your personal health information fully
            protected.
          </p>
        </div>
        <div className="why-feature-box">
          <div className="why-icon">{<PiUsersFour />}</div>
          <h3 className="why-h3">Wellness Together</h3>
          <p className="why-p">
            Find strength and healing through a caring, supportive community
            offering trusted resources and shared experiences, healing through
            shared support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySwiftCare;

