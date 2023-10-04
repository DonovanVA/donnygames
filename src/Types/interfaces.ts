export interface PlayingCard {
  unicode: string;
  image: string;
  name: Value;
  suit: Suit;
  isRed: boolean;
}

export enum Suit {
  SPADES = "SPADES",
  CLUBS = "CLUBS",
  DIAMONDS = "DIAMONDS",
  HEARTS = "HEARTS",
}

export interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  disabled: boolean;
  errormsg?: string;
}

export enum Value {
  TWO = "TWO",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE",
  SIX = "SIX",
  SEVEN = "SEVEN",
  EIGHT = "EIGHT",
  NINE = "NINE",
  TEN = "TEN",
  JACK = "JACK",
  QUEEN = "QUEEN",
  KING = "KING",
  ACE = "ACE",
}
