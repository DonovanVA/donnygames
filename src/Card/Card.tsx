import React from "react";
import { PlayingCard } from "../Types/interfaces";
import cardBack from "../Assets/playing-cards/back.png";
import stylishBack from "../Assets/playing-cards/stylishBack.png";
import "./Card.css";

// cards.ts

const Card = ({ card, isBack }: { card: PlayingCard; isBack: boolean }) => {
  return (
    <>
      {isBack ? (
        <>
          <img src={stylishBack} height="120px" />
        </>
      ) : (
        <img
          src={card.image}
          height="120px"
          style={{
            border: "1px solid grey",
            backgroundColor: "white",
          }}
        />
      )}
    </>
  );
};

export default Card;
