import "./toggle.css";

const PriceToggle = ({ activeOption, onToggle }) => {
  return (
    <div className="pricing-toggle">
      <div
        className="toggle-indicator"
        style={{
          transform:
            activeOption === "session" ? "translateX(0%)" : "translateX(100%)",
        }}
      />
      <div
        onClick={() => onToggle("session")}
        className={`toggle-button ${
          activeOption === "session" ? "active" : ""
        }`}
      >
        <span>Per&nbsp;<span className="highlight">Session</span></span>
      </div>

      <div
        onClick={() => onToggle("year")}
        className={`toggle-button ${activeOption === "year" ? "active" : ""}`}
      >
        <span>Per&nbsp;<span className="highlight">Year</span></span>

      </div>
    </div>
  );
};

export default PriceToggle;
