import { FaChevronRight } from "react-icons/fa";
import "./HealthCare.css";
import JoinUsImage from '@/public/JoinUs.png';
import Image from "next/image";


function HealthcareProfessionalSection() {
  return (
  <div className="healthcare-wrapper">
      <section className="healthcare-container">
        <div className="healthcare-image">
          <Image src={JoinUsImage} alt="Healthcare professionals" width={608}  height={438}/>
        </div>
        <div className="healthcare-content">
          <h2>
            Are you a <span>Healthcare Professional?</span>
          </h2>
          <p>
            Become part of a vibrant network of healthcare professionals committed
            to providing personalized, innovative care that puts patients first
            and helps shape the future of healthcare.
          </p>
          <h3>
            500+ 
           <div className="span-down">Professionals</div>
          </h3>
          <button className="healthcare-btn">
            Join Us <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default HealthcareProfessionalSection;
