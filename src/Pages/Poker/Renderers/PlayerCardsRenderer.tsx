import React from "react";
import { playingCards } from "../../../Card/Cards";
import { RawPokerCard } from "../Interfaces/PokerTableData";
import { PlayingCard, Suit, Value } from "../../../Types/interfaces";
import Card from "../../../Card/Renderer/RenderLocalCard";
import RenderServerCard from "../../../Card/Renderer/RenderServerCard";

export default function PlayerCardsRenderer({
  playingCards,
  rawPlayingCards,
}: {
  playingCards: PlayingCard[];
  rawPlayingCards: RawPokerCard[];
}) {
  return (
    <>
      {rawPlayingCards.map((card: RawPokerCard) => {
        return (
          <RenderServerCard
            card={card}
            isFaceDown={card.faceDown}
          ></RenderServerCard>
        );
      })}
    </>
  );
}
