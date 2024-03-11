import React, { useEffect, useRef, useState } from "react";
import "./RightBlock.css";
import Section from "../UI/Section";
import Icons from "../UI/Icons";
import Game from "../Game/Game";

const RightBlock = ({ startGame, setStartGame , setFeedBack}) => {
  const [isGameOver, setGameOver] = useState(false);

  const parentRef = useRef(null);

  useEffect(() => {
    // Ensure parentRef is defined before attempting to access it
    if (parentRef.current) {
      const scrollInterval = 2; // Scroll interval in milliseconds
      const scrollStep = 5; // Scroll step in pixels
      let scrollTop = parentRef.current.scrollTop;
      const scrollHeight = parentRef.current.scrollHeight;
      const scrollIncrement = () => {
        if (scrollTop < scrollHeight) {
          scrollTop += scrollStep;
          parentRef.current.scrollTop = scrollTop;
          setTimeout(scrollIncrement, scrollInterval);
        }
      };
      scrollIncrement();
    }
  }, []);

  return (
    <Section className="rightBlock__container">
      <div
        className="section__rightBlock"
        ref={parentRef}
        style={{ height: "500px", overflowY: "auto" }}
      >
        <div className="tiles__section">
          <Game
            startGame={startGame}
            setStartGame={setStartGame}
            setGameOver={setGameOver}
            setFeedBack={setFeedBack}
            isGameOver={isGameOver}
          />
        </div>
        <div className="icons__section">
          <Icons isGameOver={isGameOver} startGame={startGame} />
        </div>
      </div>
    </Section>
  );
};

export default RightBlock;
