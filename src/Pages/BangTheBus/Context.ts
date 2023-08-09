import { playingCards } from "../../Card/Cards";
import { PlayingCard } from "../../Types/interfaces";

export const getValue = (playingCard: PlayingCard): number => {
    switch (playingCard.name) {
        case 'ace':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        case 'ten':
            return 10;
        case 'jack':
            return 11;
        case 'queen':
            return 12;
        case 'king':
            return 13;
        default:
            throw new Error('Invalid card name');
    }
};


export const isRed = (card: PlayingCard) => {
    // Determine the color based on the card's Unicode suit (using character code point)
    return card.isRed ? "red" : "black"
};




