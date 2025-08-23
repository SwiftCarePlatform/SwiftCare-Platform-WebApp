import Image from "next/image";
import { FeatureList } from "./FeatureList";
import "./ServiceSection.css";

export const ServiceCard = ({
  headerImage,
  title,
  price,
  borderColor,
  dividerColor,
  buttonColor,
  featuresTitle,
  features,
  onContinue,
}) => {
  return (
    <article className={`service-card ${borderColor}`}>
      <div className="service-card-image-wrapper">
       <Image
          src={headerImage}
          alt={`${title} header`}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="service-card-content">
        <header>
          <h2 className="service-card-title">{title}</h2>
          <div className="service-card-price">{price}</div>
          <div className={`service-card-divider ${dividerColor}`} />
        </header>

        <FeatureList title={featuresTitle} features={features} />

        <button
          onClick={onContinue}
          className={`service-card-button ${buttonColor}`}
        >
          Continue
        </button>
      </div>
    </article>
  );
};
