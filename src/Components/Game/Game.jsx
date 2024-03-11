import React, { useCallback, useEffect, useState } from "react";
import { generateArray, icons, shuffleArray } from "./utils"; // Importing necessary functions and data from utils file
import Card from "../Cards/Card"; // Importing the Card component


const Game = ({ startGame, setStartGame, setGameOver, isGameOver, setFeedBack }) => {
  // State declarations
  const [arrayOfICons, setArrayOfICons] = useState(generateArray()); // State to manage array of icons
  const [isHintActivebegning, setHintActivebegning] = useState(true); // State to manage hint activation at the beginning
  const [clickedCards, setClickedCards] = useState([]); // State to manage clicked cards

  
  const initializeGame = useCallback(() => {
    const enableLast = generateArray().map((iconArray, i) =>
      iconArray
        .map((icon) => ({ ...icon }))
        .map((ele) =>
          9 === i
            ? { ...ele, enabled: true, show: false }
            : { ...ele, enabled: false, show: false }
        )
    );
    if (startGame === true) {
      setArrayOfICons(enableLast);
      setClickedCards([]);
      setHintActivebegning(false);
      setGameOver(false);
    }
  }, [startGame, setGameOver]); // Include setGameOver in the dependency array
  useEffect(() => {
    initializeGame(); // Call the initializeGame function
  }, [initializeGame]); // Add initializeGame to the dependency array

  // Function to handle icon click
  const iconClickHandler = (name, index, cardIndex) => {
    if (name === "black-head-icon") { // If black-head-icon is clicked
      const allVisibleIcons = arrayOfICons.map((iconArray) =>
        iconArray.map((icon) => ({ ...icon, show: true, enabled: false }))
      );
      setArrayOfICons(allVisibleIcons); // Show all icons
      setStartGame(false); // End the game
      setGameOver(true); // Set game over state to true
    } else {
      const newArrayOfIcons = new Array(0).fill(shuffleArray(icons, true));
      const oneRowVisibleIcons = arrayOfICons.map((iconArray, i) =>
        iconArray
          .map((icon) => (index === i ? { ...icon, show: true } : { ...icon }))
          .map((ele) =>
            index - 1 === i
              ? { ...ele, enabled: true }
              : { ...ele, enabled: false }
          )
      );
      setArrayOfICons([...newArrayOfIcons, ...oneRowVisibleIcons]);
    }
    // Create a unique identifier for the clicked card
    const uniqueIdentifier = `${name}-${cardIndex}`;
    // Add the unique identifier to the clicked cards array of the respective column
    const newClickedCards = [...clickedCards];
    newClickedCards[index] = newClickedCards[index]
      ? [...newClickedCards[index], uniqueIdentifier]
      : [uniqueIdentifier];
    setClickedCards(newClickedCards); // Update clicked cards state
  };

  // Function to check if a card is clicked
  const isClicked = (alt, index, cardIndex) => {
    // Check if the unique identifier for the card is in the clickedCards array of the respective column
    const uniqueIdentifier = `${alt}-${cardIndex}`;
    return clickedCards[index]
      ? clickedCards[index].includes(uniqueIdentifier)
      : false;
  };

  return (
    <>
      {arrayOfICons?.map((arr, i) => (
        <div className="box_wrapper" key={i}>
          {arr?.map((ele, cardIndex) => (
            <Card
              enabled={ele.enabled}
              key={ele.id}
              show={ele.show}
              index={i}
              cardIndex={cardIndex}
              iconClickHandler={iconClickHandler}
              isClicked={isClicked(ele.name, i, cardIndex)}
              lengthMinusOne={arrayOfICons.length - 1}
              isHintActivebegning={isHintActivebegning}
              icon={ele.icon}
              iconName={ele.name}
              setFeedBack={setFeedBack}
              isGameOver={isGameOver}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Game; 
