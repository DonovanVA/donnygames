import { playingCards } from "../../Card/Cards";
import { PlayingCard, Value } from "../../Types/interfaces";

export const getValue = (playingCard: PlayingCard): number => {
  switch (playingCard.name) {
    case Value.ACE:
      return 1;
    case Value.TWO:
      return 2;
    case Value.THREE:
      return 3;
    case Value.FOUR:
      return 4;
    case Value.FIVE:
      return 5;
    case Value.SIX:
      return 6;
    case Value.SEVEN:
      return 7;
    case Value.EIGHT:
      return 8;
    case Value.NINE:
      return 9;
    case Value.TEN:
      return 10;
    case Value.JACK:
      return 11;
    case Value.QUEEN:
      return 12;
    case Value.KING:
      return 13;
    default:
      throw new Error("Invalid card name");
  }
};

export const isRed = (card: PlayingCard) => {
  // Determine the color based on the card's Unicode suit (using character code point)
  return card.isRed ? "red" : "black";
};
