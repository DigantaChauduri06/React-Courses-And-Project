import React from "react";
import "./SingleCard.css";

export const SingleCard = ({ item, handelChoice, flipped, disabled }) => {
  //hadleClick
  const hadleClick = () => {
    if (!disabled) handelChoice(item);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={item.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={hadleClick}
        />
      </div>
    </div>
  );
};
