import React from "react";
import { BsCheckCircle } from "react-icons/bs"; 
import "./featurelist.css"; 

export const FeatureList = ({ title, features }) => {
  return (
    <div className="feature-list">
      <p className="feature-list-title">{title}</p>
      <ul className="feature-list-items">
        {features.map((feature, index) => (
          <li key={index} className="feature-list-item">
            <BsCheckCircle className="circle-icon" aria-hidden="true" />
            <span className="feature-text">{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
