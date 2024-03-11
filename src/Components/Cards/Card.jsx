import React, { useEffect } from "react";
import "./CardBoxes.css";

const Card = ({
  icon,
  iconName,
  iconClickHandler,
  show,
  index,
  setFeedBack,
  cardIndex,
  enabled,
  isGameOver,
  isHintActivebegning,
  lengthMinusOne,
  isClicked,
}) => {
  let isLastRow = index === lengthMinusOne;
  const uniqueid = `activeCard-${cardIndex}`;

  const arrangeFedBack = () => {
    setFeedBack((prev) => {
      return {
        ...prev,
        activeHint: isLastRow && isHintActivebegning ? true : false,
        isGameOver: isGameOver ? true : false,
      };
    });
  };

  useEffect(() => {
    arrangeFedBack();
  }, [isLastRow, isHintActivebegning, isGameOver]);
  return (
    <div
      className={`CardBoxes ${enabled ? "" : "disabled"} ${
        show ? "show " : "hidden"
      }${show ? iconName : ""} ${isClicked ? `${iconName}Clicked` : ""}${
        isLastRow && isHintActivebegning ? "hintActive" : ""
      }`}
      onClick={() => iconClickHandler(iconName, index, cardIndex)}
      id={`${enabled ? uniqueid : ""}`}
    >
      <img src={icon} alt="icons" />
    </div>
  );
};

export default Card;
