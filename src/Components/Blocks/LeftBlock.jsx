import React from "react";
import "./LeftBlock.css";

const LeftBlock = ({ setStartGame, startGame, feedBack }) => {
  return (
    <div className="leftBlock">
      <div className="section__leftContent">
        <button
          onClick={() => setStartGame(true)}
          className={` ${startGame ? "startGame" : "notStarted"}`}
        >
          {startGame ? "PICK A TILE" : "PLAY"}
        </button>

        <div className="info__">
          {feedBack.activeHint && <p>{feedBack.begningMsg}</p>}
          {feedBack.isGameOver && <h3>Game Over. Try Again</h3>}
        </div>
      </div>
    </div>
  );
};

export default LeftBlock;
