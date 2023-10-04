import { RawPlayer } from "../../Interfaces/PokerTableData";
import { AppContextParams } from "../../../../Context/AppContext";
import { Socket } from "socket.io-client";
import { useState } from "react";
import { getHighestBetValue } from "../Utils";
import PrimaryButton from "../../../../UI/Buttons/PrimaryButton";
import { PlayerController } from "../PlayerControls";
import { PlayerControls } from "../ControlTypes";
export const DisplayGameMoveButtons = ({
  players,
  player_id,
  winner_id,
  app,
  socket,
}: {
  players: RawPlayer[];
  player_id: number;
  winner_id: number;
  app: AppContextParams;
  socket: Socket;
}) => {
  const [betAmount, setBetAmount] = useState<number>(0);
  const [buyInAmount, setBuyInAmount] = useState<number>(0);
  const highestValue = getHighestBetValue(players);
  // Find the current player
  const currentPlayer = players.find(
    (player) => player.player_id === player_id
  );

  // Render buttons and input fields only if the current player exists
  if (currentPlayer && winner_id === 0) {
    return (
      <>
        {/* Input field for adjusting the bet amount */}
        <input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(parseInt(e.target.value))}
        />
        <PrimaryButton
          onClick={() => {
            app.table?.pokerTable_id &&
              PlayerController(
                socket,
                currentPlayer.player_id,
                app.table?.pokerTable_id,
                PlayerControls.BET,
                betAmount
              );
          }}
          disabled={false}
          text="Bet"
        ></PrimaryButton>

        {/* Input field for adjusting the buy-in amount */}
        <input
          type="number"
          value={buyInAmount}
          onChange={(e) => setBuyInAmount(parseInt(e.target.value))}
        />
        <PrimaryButton
          onClick={() => {
            app.table?.pokerTable_id &&
              PlayerController(
                socket,
                currentPlayer.player_id,
                app.table?.pokerTable_id,
                PlayerControls.BUYIN,
                buyInAmount
              );
          }}
          disabled={false}
          text="Buy In"
        ></PrimaryButton>
        <PrimaryButton
          onClick={() => {
            app.table?.pokerTable_id &&
              PlayerController(
                socket,
                currentPlayer.player_id,
                app.table?.pokerTable_id,
                PlayerControls.BET,
                highestValue - currentPlayer.bet
              );
          }}
          disabled={false}
          text="Check"
        ></PrimaryButton>

        <PrimaryButton
          onClick={() => {
            app.table?.pokerTable_id &&
              PlayerController(
                socket,
                currentPlayer.player_id,
                app.table?.pokerTable_id,
                PlayerControls.FOLD
              );
          }}
          disabled={false}
          text="Fold"
        ></PrimaryButton>
      </>
    );
  } else {
    return null; // If the current player is not found, render nothing
  }
};
