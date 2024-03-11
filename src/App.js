import React, { useState } from "react";
import Section from "./Components/UI/Section";
import LeftBlock from "./Components/Blocks/LeftBlock";
import RightBlock from "./Components/Blocks/RightBlock";
import CardSection from "./Components/UI/CardSection";
import { initiFeedBack } from "./Components/Game/utils";
import "./App.css";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [feedBack, setFeedBack] = useState(initiFeedBack);

  return (
    <Section>
      <div className="parentblock__content">
        <LeftBlock
          startGame={startGame}
          setStartGame={setStartGame}
          feedBack={feedBack}
        />
        <CardSection>
          <div className="title__game">
            <h2>Tower Game</h2>
          </div>
          <RightBlock
            startGame={startGame}
            setStartGame={setStartGame}
            setFeedBack={setFeedBack}
          />
        </CardSection>
      </div>
    </Section>
  );
}

export default App;
