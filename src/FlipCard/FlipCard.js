import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onMouseOver={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Content for the front side */}
          <h2>Front Side</h2>
        </div>
        <div className="flip-card-back">
          {/* Content for the back side */}
          <h2>Back Side</h2>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
