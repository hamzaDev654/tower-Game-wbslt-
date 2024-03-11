import React from "react";
import hand from "../../assets/hand.png";
import normalIcong from "../../assets/normal_face.png";
import sadFace from "../../assets/sad_face.png";
import sadHand from "../../assets/sad-hand.png";
import "./Icons.css";

const Icons = ({ isGameOver, startGame }) => {
  return (
    <div className="icon__section">
      {startGame || isGameOver ? (
        <div style={{ opacity: 1, height: "inherit", position: "relative" }}>
          <img
            src={isGameOver ? sadHand : hand}
            alt={`${isGameOver ? "sadHand" : "hand"}`}
            style={{ maxHeight: "66.6667%" }}
            className={`${startGame ? "animatedHandLeft" : ""}${
              isGameOver ? "animatedSadHandOnce" : ""
            }`}
          />
        </div>
      ) : (
        ""
      )}
      <div style={{ height: "inherit" }}>
        <img
          src={isGameOver ? sadFace : normalIcong}
          alt={`${isGameOver ? "sadFace" : "normalIcong"}`}
          style={{ maxHeight: "100%" }}
        />
      </div>
      {startGame || isGameOver ? (
        <div
          style={{
            height: "inherit",
            opacity: 1,
            transform: "rotateY(180deg)",
            position: "relative",
          }}
        >
          <img
            src={isGameOver ? sadHand : hand}
            alt={`${isGameOver ? "sadHand" : "hand"}`}
            style={{ maxHeight: "66.6667%" }}
            className={`${startGame ? "animatedHandRight" : ""}${
              isGameOver ? "animatedSadHandOnce" : ""
            }`}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Icons;
