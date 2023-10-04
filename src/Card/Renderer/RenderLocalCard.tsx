import React from "react";
import { PlayingCard } from "../../Types/interfaces";
import stylishBack from "../../Assets/playing-cards/stylishBack.png";


// cards.ts

const RenderLocalCard = ({
  card,
  isFaceDown,
}: {
  card: PlayingCard;
  isFaceDown: boolean;
}) => {
  return (
    <>
      {isFaceDown ? (
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

export default RenderLocalCard;
