import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { playingCards } from "../../Card/Cards";
import { shuffleDeck } from "../../Card/Controller";
import { PlayingCard } from "../../Types/interfaces";
import BackButton from "../../UI/Buttons/BackButton";
import { MainRoutes } from "../../Routes/Routes";
import Card from "../../Card/Card";
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
export default function TwentyFour() {
  const navigation = useNavigate();
  const [deckOfCards, setDeckOfCards] = useState<PlayingCard[]>(
    shuffleDeck([...playingCards])
  );
  const [discardPile, setDiscardPile] = useState<PlayingCard[]>([]);
  const discardTopFourCards = () => {
    setDiscardPile(deckOfCards.slice(-4));
    deckOfCards.splice(deckOfCards.length - 4, 4);
  };
  const resetGame = () => {
    setDeckOfCards(shuffleDeck([...playingCards]));
    setDiscardPile([]);
  };
  return (
    <div style={{ width: "100%", paddingLeft:20 }}>
      <BackButton
        onClick={() => {
          navigation(`${MainRoutes.Home.path}`);
        }}
        text=""
      ></BackButton>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <h1 style={{ color: "white" }}>Twenty-Four</h1>
        {<Card card={deckOfCards[0]} isBack={true}></Card>}
        <p>{deckOfCards.length} cards left</p>
        {deckOfCards.length >= 4 && (
          <PrimaryButton
            text="Draw"
            onClick={() => {
              discardTopFourCards();
            }}
          ></PrimaryButton>
        )}
        <PrimaryButton
          text="Reset"
          onClick={() => {
            resetGame();
          }}
        ></PrimaryButton>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            marginTop: 10,
          }}
        >
          {discardPile.map((card: PlayingCard, index: number) => {
            return <Card card={card} isBack={false}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}
