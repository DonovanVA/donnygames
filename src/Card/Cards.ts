import { PlayingCard, Suit } from "../Types/interfaces";

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
import { Value } from "../Types/interfaces";
export const playingCards: PlayingCard[] = [
  {
    unicode: "🂡",
    image: ace_of_spades,
    name: Value.ACE,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂢",
    image: two_of_spades,
    name: Value.TWO,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂣",
    image: three_of_spades,
    name: Value.THREE,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂤",
    image: four_of_spades,
    name: Value.FOUR,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂥",
    image: five_of_spades,
    name: Value.FIVE,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂦",
    image: six_of_spades,
    name: Value.SIX,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂧",
    image: seven_of_spades,
    name: Value.SEVEN,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂨",
    image: eight_of_spades,
    name: Value.EIGHT,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂩",
    image: nine_of_spades,
    name: Value.NINE,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂪",
    image: ten_of_spades,
    name: Value.TEN,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂫",
    image: jack_of_spades,
    name: Value.JACK,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂭",
    image: queen_of_spades,
    name: Value.QUEEN,
    suit: Suit.SPADES,
    isRed: false,
  },
  {
    unicode: "🂮",
    image: king_of_spades,
    name: Value.KING,
    suit: Suit.SPADES,
    isRed: false,
  },

  // Hearts
  {
    unicode: "🃑",
    image: ace_of_hearts,
    name: Value.ACE,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃒",
    image: two_of_hearts,
    name: Value.TWO,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃓",
    image: three_of_hearts,
    name: Value.THREE,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃔",
    image: four_of_hearts,
    name: Value.FOUR,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃕",
    image: five_of_hearts,
    name: Value.FIVE,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃖",
    image: six_of_hearts,
    name: Value.SIX,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃗",
    image: seven_of_hearts,
    name: Value.SEVEN,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃘",
    image: eight_of_hearts,
    name: Value.EIGHT,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃙",
    image: nine_of_hearts,
    name: Value.NINE,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃚",
    image: ten_of_hearts,
    name: Value.TEN,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃛",
    image: jack_of_hearts,
    name: Value.JACK,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃝",
    image: queen_of_hearts,
    name: Value.QUEEN,
    suit: Suit.HEARTS,
    isRed: true,
  },
  {
    unicode: "🃞",
    image: king_of_hearts,
    name: Value.KING,
    suit: Suit.HEARTS,
    isRed: true,
  },

  // Diamonds
  {
    unicode: "🂱",
    image: ace_of_diamonds,
    name: Value.ACE,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂲",
    image: two_of_diamonds,
    name: Value.TWO,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂳",
    image: three_of_diamonds,
    name: Value.THREE,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂴",
    image: four_of_diamonds,
    name: Value.FOUR,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂵",
    image: five_of_diamonds,
    name: Value.FIVE,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂶",
    image: six_of_diamonds,
    name: Value.SIX,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂷",
    image: seven_of_diamonds,
    name: Value.SEVEN,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂸",
    image: eight_of_diamonds,
    name: Value.EIGHT,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂹",
    image: nine_of_diamonds,
    name: Value.NINE,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂺",
    image: ten_of_diamonds,
    name: Value.TEN,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂻",
    image: jack_of_diamonds,
    name: Value.JACK,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂽",
    image: queen_of_diamonds,
    name: Value.QUEEN,
    suit: Suit.DIAMONDS,
    isRed: true,
  },
  {
    unicode: "🂾",
    image: king_of_diamonds,
    name: Value.KING,
    suit: Suit.DIAMONDS,
    isRed: true,
  },

  // Clubs
  {
    unicode: "🃁",
    image: ace_of_clubs,
    name: Value.ACE,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃂",
    image: two_of_clubs,
    name: Value.TWO,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃃",
    image: three_of_clubs,
    name: Value.THREE,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃄",
    image: four_of_clubs,
    name: Value.FOUR,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃅",
    image: five_of_clubs,
    name: Value.FIVE,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃆",
    image: six_of_clubs,
    name: Value.SIX,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃇",
    image: seven_of_clubs,
    name: Value.SEVEN,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃈",
    image: eight_of_clubs,
    name: Value.EIGHT,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃉",
    image: nine_of_clubs,
    name: Value.NINE,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃊",
    image: ten_of_clubs,
    name: Value.TEN,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃋",
    image: jack_of_clubs,
    name: Value.JACK,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃍",
    image: queen_of_clubs,
    name: Value.QUEEN,
    suit: Suit.CLUBS,
    isRed: false,
  },
  {
    unicode: "🃎",
    image: king_of_clubs,
    name: Value.KING,
    suit: Suit.CLUBS,
    isRed: false,
  },
];
