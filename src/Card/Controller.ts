import { PlayingCard, Suit } from "../Types/interfaces";

export const discardPile = (setDeckOfCards: React.SetStateAction<PlayingCard[]>, deckOfCards: PlayingCard[]) => {

};

export const shuffleDeck = (deckOfCards: PlayingCard[]):PlayingCard[] => {
    let copyofDeck = [...deckOfCards]
    for (var i = copyofDeck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copyofDeck[i];
        copyofDeck[i] = copyofDeck[j];
        copyofDeck[j] = temp;
    }
    return copyofDeck
}

export const getTopOfDeck = (deckOfCards: PlayingCard[]): PlayingCard => {
    return deckOfCards[deckOfCards.length - 1]
}
export const getSecondCardOfDeck = (deckOfCards: PlayingCard[]) => {
    return deckOfCards[deckOfCards.length - 2]
}

export const getSuit = (card: PlayingCard): Suit => {
    return card.suit

}