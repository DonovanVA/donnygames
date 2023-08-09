import { PlayingCard } from "../Types/interfaces";
import ace_of_spades from "../Assets/playing-cards/ace_of_spades.png";
import two_of_spades from "../Assets/playing-cards/2_of_spades.png";
import three_of_spades from "../Assets/playing-cards/3_of_spades.png";
import four_of_spades from "../Assets/playing-cards/4_of_spades.png";
import five_of_spades from "../Assets/playing-cards/5_of_spades.png";
import six_of_spades from "../Assets/playing-cards/6_of_spades.png";
import seven_of_spades from "../Assets/playing-cards/7_of_spades.png";
import eight_of_spades from "../Assets/playing-cards/8_of_spades.png";
import nine_of_spades from "../Assets/playing-cards/9_of_spades.png";
import ten_of_spades from "../Assets/playing-cards/10_of_spades.png";
import jack_of_spades from "../Assets/playing-cards/jack_of_spades.png";
import queen_of_spades from "../Assets/playing-cards/queen_of_spades.png";
import king_of_spades from "../Assets/playing-cards/king_of_spades.png";

import ace_of_hearts from "../Assets/playing-cards/ace_of_hearts.png";
import two_of_hearts from "../Assets/playing-cards/2_of_hearts.png";
import three_of_hearts from "../Assets/playing-cards/3_of_hearts.png";
import four_of_hearts from "../Assets/playing-cards/4_of_hearts.png";
import five_of_hearts from "../Assets/playing-cards/5_of_hearts.png";
import six_of_hearts from "../Assets/playing-cards/6_of_hearts.png";
import seven_of_hearts from "../Assets/playing-cards/7_of_hearts.png";
import eight_of_hearts from "../Assets/playing-cards/8_of_hearts.png";
import nine_of_hearts from "../Assets/playing-cards/9_of_hearts.png";
import ten_of_hearts from "../Assets/playing-cards/10_of_hearts.png";
import jack_of_hearts from "../Assets/playing-cards/jack_of_hearts.png";
import queen_of_hearts from "../Assets/playing-cards/queen_of_hearts.png";
import king_of_hearts from "../Assets/playing-cards/king_of_hearts.png";

import ace_of_diamonds from "../Assets/playing-cards/ace_of_diamonds.png";
import two_of_diamonds from "../Assets/playing-cards/2_of_diamonds.png";
import three_of_diamonds from "../Assets/playing-cards/3_of_diamonds.png";
import four_of_diamonds from "../Assets/playing-cards/4_of_diamonds.png";
import five_of_diamonds from "../Assets/playing-cards/5_of_diamonds.png";
import six_of_diamonds from "../Assets/playing-cards/6_of_diamonds.png";
import seven_of_diamonds from "../Assets/playing-cards/7_of_diamonds.png";
import eight_of_diamonds from "../Assets/playing-cards/8_of_diamonds.png";
import nine_of_diamonds from "../Assets/playing-cards/9_of_diamonds.png";
import ten_of_diamonds from "../Assets/playing-cards/10_of_diamonds.png";
import jack_of_diamonds from "../Assets/playing-cards/jack_of_diamonds.png";
import queen_of_diamonds from "../Assets/playing-cards/queen_of_diamonds.png";
import king_of_diamonds from "../Assets/playing-cards/king_of_diamonds.png";

import ace_of_clubs from "../Assets/playing-cards/ace_of_clubs.png";
import two_of_clubs from "../Assets/playing-cards/2_of_clubs.png";
import three_of_clubs from "../Assets/playing-cards/3_of_clubs.png";
import four_of_clubs from "../Assets/playing-cards/4_of_clubs.png";
import five_of_clubs from "../Assets/playing-cards/5_of_clubs.png";
import six_of_clubs from "../Assets/playing-cards/6_of_clubs.png";
import seven_of_clubs from "../Assets/playing-cards/7_of_clubs.png";
import eight_of_clubs from "../Assets/playing-cards/8_of_clubs.png";
import nine_of_clubs from "../Assets/playing-cards/9_of_clubs.png";
import ten_of_clubs from "../Assets/playing-cards/10_of_clubs.png";
import jack_of_clubs from "../Assets/playing-cards/jack_of_clubs.png";
import queen_of_clubs from "../Assets/playing-cards/queen_of_clubs.png";
import king_of_clubs from "../Assets/playing-cards/king_of_clubs.png";
import { Suit } from "../Types/interfaces";
export const playingCards: PlayingCard[] = [
  { unicode: "🂡", image: ace_of_spades, name: "ace", suit: Suit.SPADES, isRed: false },
  { unicode: "🂢", image: two_of_spades, name: "two", suit: Suit.SPADES, isRed: false },
  { unicode: "🂣", image: three_of_spades, name: "three", suit: Suit.SPADES, isRed: false },
  { unicode: "🂤", image: four_of_spades, name: "four", suit: Suit.SPADES, isRed: false },
  { unicode: "🂥", image: five_of_spades, name: "five", suit: Suit.SPADES, isRed: false },
  { unicode: "🂦", image: six_of_spades, name: "six", suit: Suit.SPADES, isRed: false },
  { unicode: "🂧", image: seven_of_spades, name: "seven", suit: Suit.SPADES, isRed: false },
  { unicode: "🂨", image: eight_of_spades, name: "eight", suit: Suit.SPADES, isRed: false },
  { unicode: "🂩", image: nine_of_spades, name: "nine", suit: Suit.SPADES, isRed: false },
  { unicode: "🂪", image: ten_of_spades, name: "ten", suit: Suit.SPADES, isRed: false },
  { unicode: "🂫", image: jack_of_spades, name: "jack", suit: Suit.SPADES, isRed: false },
  { unicode: "🂭", image: queen_of_spades, name: "queen", suit: Suit.SPADES, isRed: false },
  { unicode: "🂮", image: king_of_spades, name: "king", suit: Suit.SPADES, isRed: false },

  // Hearts
  { unicode: "🃑", image: ace_of_hearts, name: "ace", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃒", image: two_of_hearts, name: "two", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃓", image: three_of_hearts, name: "three", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃔", image: four_of_hearts, name: "four", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃕", image: five_of_hearts, name: "five", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃖", image: six_of_hearts, name: "six", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃗", image: seven_of_hearts, name: "seven", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃘", image: eight_of_hearts, name: "eight", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃙", image: nine_of_hearts, name: "nine", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃚", image: ten_of_hearts, name: "ten", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃛", image: jack_of_hearts, name: "jack", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃝", image: queen_of_hearts, name: "queen", suit: Suit.HEARTS, isRed: true },
  { unicode: "🃞", image: king_of_hearts, name: "king", suit: Suit.HEARTS, isRed: true },

  // Diamonds
  { unicode: "🂱", image: ace_of_diamonds, name: "ace", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂲", image: two_of_diamonds, name: "two", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂳", image: three_of_diamonds, name: "three", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂴", image: four_of_diamonds, name: "four", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂵", image: five_of_diamonds, name: "five", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂶", image: six_of_diamonds, name: "six", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂷", image: seven_of_diamonds, name: "seven", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂸", image: eight_of_diamonds, name: "eight", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂹", image: nine_of_diamonds, name: "nine", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂺", image: ten_of_diamonds, name: "ten", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂻", image: jack_of_diamonds, name: "jack", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂽", image: queen_of_diamonds, name: "queen", suit: Suit.DIAMONDS, isRed: true },
  { unicode: "🂾", image: king_of_diamonds, name: "king", suit: Suit.DIAMONDS, isRed: true },

  // Clubs
  { unicode: "🃁", image: ace_of_clubs, name: "ace", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃂", image: two_of_clubs, name: "two", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃃", image: three_of_clubs, name: "three", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃄", image: four_of_clubs, name: "four", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃅", image: five_of_clubs, name: "five", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃆", image: six_of_clubs, name: "six", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃇", image: seven_of_clubs, name: "seven", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃈", image: eight_of_clubs, name: "eight", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃉", image: nine_of_clubs, name: "nine", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃊", image: ten_of_clubs, name: "ten", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃋", image: jack_of_clubs, name: "jack", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃍", image: queen_of_clubs, name: "queen", suit: Suit.CLUBS, isRed: false },
  { unicode: "🃎", image: king_of_clubs, name: "king", suit: Suit.CLUBS, isRed: false },
];

