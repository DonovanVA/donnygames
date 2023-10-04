import React from "react";
import { RawPokerCard } from "../../Pages/Poker/Interfaces/PokerTableData";

// cards.ts
const RenderServerCard = ({
  card,
  isFaceDown,
}: {
  card: RawPokerCard;
  isFaceDown: boolean;
}) => {
  return (
    <>
      {isFaceDown ? (
        <>
          <img src={card.image_url_back} height="120px" />
        </>
      ) : (
        <img
          src={card.image_url_front}
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

export default RenderServerCard;
