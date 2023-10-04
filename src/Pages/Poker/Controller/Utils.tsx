import { RawPlayer } from "../Interfaces/PokerTableData";

export const getHighestBetValue = (players: RawPlayer[]) => {
  if (!players || players.length === 0) {
    return 0; // Return 0 if players array is not available or empty
  }

  // Initialize highestBet to the bet of the first player
  let highestBet = players[0].bet || 0;

  // Loop through all players to find the maximum bet
  for (let i = 1; i < players.length; i++) {
    const playerBet = players[i].bet || 0;
    if (playerBet > highestBet) {
      highestBet = playerBet;
    }
  }

  return highestBet;
};
