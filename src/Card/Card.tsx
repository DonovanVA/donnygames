import React from "react";
import { PlayingCard } from "../Types/interfaces";
import cardBack from "../Assets/playing-cards/back.png";
import "./Card.css";
// cards.ts

const Card = ({ card, isBack }: { card: PlayingCard; isBack: boolean }) => {
  const getColor = () => {
    // Determine the color based on the card's Unicode suit (using character code point)
    const firstCodePoint = card.unicode.codePointAt(0) ?? 0; // Provide 0 as a default value if codePointAt(0) returns undefined
    console.log(firstCodePoint);
    return firstCodePoint >= 127153 && firstCodePoint <= 127182 // Clubs or Spades
      ? true
      : false;
  };
  const getBack = () => {};
  return (
    <>
      {isBack ? (
        <>
          <img src={cardBack} height="50px" />
        </>
      ) : (
        <>
          {getColor() ? (
            <img
              src={card.image}
              height="50px"
              style={{
                border: "1px solid grey",
                backgroundColor:"white"
              }}
            />
          ) : (
            <img
              src={card.image}
              height="50px"
              style={{
                border: "1px solid grey",
                backgroundColor:"white"
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default Card;
