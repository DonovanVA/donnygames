export interface PlayingCard {
  unicode: string;
  image: string;
  name: string;
  suit: Suit
  isRed: boolean
}


export enum Suit {
  SPADES = "SPADES",
  CLUBS = "CLUBS",
  DIAMONDS = "DIAMONDS",
  HEARTS = "HEARTS"

}
export interface PrimaryButtonProps {
  text: string
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
