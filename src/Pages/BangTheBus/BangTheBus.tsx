import React from "react";
import Card from "../../Card/Card";
import { playingCards } from "../../Card/Cards";
import { PlayingCard, Suit } from "../../Types/interfaces";
import { useState } from "react";
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import {
  getSecondCardOfDeck,
  getSuit,
  getTopOfDeck,
  shuffleDeck,
} from "../../Card/Controller";
import { isRed, getValue } from "./Context";
import { useNavigate } from "react-router-dom";
import BackButton from "../../UI/Buttons/BackButton";
import { MainRoutes } from "../../Routes/Routes";
export default function BangTheBus() {
  const navigation = useNavigate();
  const [deckOfCards, setDeckOfCards] = useState<PlayingCard[]>(
    shuffleDeck([...playingCards])
  );
  const [discardPile, setDiscardPile] = useState<PlayingCard[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [stage, setStage] = useState<number>(1);
  const revealCard = () => {
    discardPile.push(deckOfCards[deckOfCards.length - 1]);
    deckOfCards.pop();
  };
  // reveal cards after every answer
  const checkAnswer = (
    deckOfCards: PlayingCard[],
    discardPile: PlayingCard[],
    stage: number,
    input: string
  ) => {
    switch (stage) {
      case 2:
        if (
          (getValue(getTopOfDeck(discardPile)) <
            getValue(getTopOfDeck(deckOfCards)) &&
            input == "up") ||
          (getValue(getTopOfDeck(discardPile)) >
            getValue(getTopOfDeck(deckOfCards)) &&
            input == "down")
        ) {
          setStage(3);
          revealCard();
          return;
        }
        break;
      case 3:
        let firstCardValue = getValue(getTopOfDeck(discardPile));
        let secondCardValue = getValue(getSecondCardOfDeck(discardPile));
        let drawnCardValue = getValue(getTopOfDeck(deckOfCards));
        // win condition #1 drawn is more than second and less than first vice versa and inbtw
        if (
          (input === "inBetween" &&
            firstCardValue > secondCardValue &&
            drawnCardValue > secondCardValue &&
            drawnCardValue < firstCardValue) ||
          (input === "inBetween" &&
            firstCardValue < secondCardValue &&
            drawnCardValue < secondCardValue &&
            drawnCardValue > firstCardValue)
        ) {
          revealCard();
          setStage(4);

          return;
        }
        // win condition #2 drawn is more than second and less than first vice versa and outside
        else if (
          input === "outside" &&
          ((firstCardValue > secondCardValue &&
            (drawnCardValue > firstCardValue ||
              drawnCardValue < secondCardValue)) ||
            (firstCardValue < secondCardValue &&
              (drawnCardValue < firstCardValue ||
                drawnCardValue > secondCardValue)) ||
            (firstCardValue === secondCardValue &&
              (drawnCardValue > firstCardValue ||
                drawnCardValue < secondCardValue)))
        ) {
          revealCard();
          setStage(4);
          return;
        }
        break;
      case 4:
        if (getSuit(getTopOfDeck(deckOfCards)) === input) {
          revealCard();
          setStage(5);
          return;
        }
        break;
      default:
        if (isRed(getTopOfDeck(deckOfCards)) === input) {
          revealCard();
          setStage(2);
          return;
        }
    }
    revealCard();
    setIsGameOver(true);
  };

  const resetGame = () => {
    setStage(1);
    setDeckOfCards(shuffleDeck([...playingCards]));
    setIsGameOver(false);
    setDiscardPile([]);
  };

  const retry = () => {
    setStage(1);
    setIsGameOver(false);
  };
  //stack implementation

  const Game = ({ stage }: { stage: number }) => {
    switch (stage) {
      case 2:
        return (
          <div>
            <PrimaryButton
              text="up"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, "up");
              }}
            ></PrimaryButton>
            <PrimaryButton
              text="down"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, "down");
              }}
            ></PrimaryButton>
          </div>
        );
      case 3:
        return (
          <div>
            <PrimaryButton
              text="in between"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, "inBetween");
              }}
            ></PrimaryButton>
            <PrimaryButton
              text="outside"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, "outside");
              }}
            ></PrimaryButton>
          </div>
        );
      case 4:
        return (
          <div>
            <PrimaryButton
              text="spades"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, Suit.SPADES);
              }}
            ></PrimaryButton>
            <PrimaryButton
              text="diamond"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, Suit.DIAMONDS);
              }}
            ></PrimaryButton>
            <PrimaryButton
              text="heart"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, Suit.HEARTS);
              }}
            ></PrimaryButton>
            <PrimaryButton
              text="clubs"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, Suit.CLUBS);
              }}
            ></PrimaryButton>
          </div>
        );
      case 5:
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p>Congrats you win the game</p>
            <PrimaryButton
              text="reset"
              onClick={() => {
                resetGame();
              }}
            ></PrimaryButton>
          </div>
        );
      default:
        return (
          <div>
            <PrimaryButton
              text="red"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, "red");
              }}
            ></PrimaryButton>
            <PrimaryButton
              text="black"
              onClick={() => {
                checkAnswer(deckOfCards, discardPile, stage, "black");
              }}
            ></PrimaryButton>
          </div>
        );
    }
  };

  return (
    <div style={{ width: "100%", paddingLeft: 20 }}>
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
          marginTop: 0,
        }}
      >
        <h1 style={{ color: "white" }}>Bang The Bus!</h1>
        {deckOfCards.length <= 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0,
            }}
          >
            <p>Game Over!</p>
            <p>Penalty: MAX</p>
            <PrimaryButton
              text="reset"
              onClick={() => {
                resetGame();
              }}
            ></PrimaryButton>
          </div>
        ) : (
          <>
            <Card card={deckOfCards[0]} isBack={true}></Card>

            <p>{deckOfCards.length} cards left</p>
            {isGameOver ? (
              <div style={{ marginBottom: 10 }}>
                <PrimaryButton
                  text="reset"
                  onClick={() => {
                    resetGame();
                  }}
                ></PrimaryButton>
                <PrimaryButton
                  text="retry"
                  onClick={() => {
                    retry();
                  }}
                ></PrimaryButton>
              </div>
            ) : (
              <div style={{ marginBottom: 10 }}>
                <Game stage={stage}></Game>
              </div>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
              {discardPile.length > 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 12,
                    alignItems: "center",
                  }}
                >
                  <Card card={getTopOfDeck(discardPile)} isBack={false}></Card>
                  <p>Drawn Card</p>
                </div>
              ) : (
                <></>
              )}
              {stage == 3 && isGameOver == false ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 12,
                    alignItems: "center",
                  }}
                >
                  <Card
                    card={discardPile[discardPile.length - 2]}
                    isBack={false}
                  ></Card>
                  <p>Prev Card</p>
                </div>
              ) : (
                <></>
              )}
              {(stage == 4 && isGameOver === false) ||
              (stage == 3 && isGameOver === true) ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 12,
                    alignItems: "center",
                  }}
                >
                  <Card
                    card={discardPile[discardPile.length - 3]}
                    isBack={false}
                  ></Card>
                  <p>Prev Card</p>
                </div>
              ) : (
                <></>
              )}

              {(stage == 4 && isGameOver === false) ||
              (stage == 3 && isGameOver === true) ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: 12,
                    alignItems: "center",
                  }}
                >
                  <Card
                    card={discardPile[discardPile.length - 2]}
                    isBack={false}
                  ></Card>
                  <p>Prev Card</p>
                </div>
              ) : (
                <></>
              )}
            </div>

            {isGameOver === true && <p>penalty: {stage}</p>}
          </>
        )}
      </div>
    </div>
  );
}
