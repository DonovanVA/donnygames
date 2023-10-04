import { RawPlayer } from "../../Interfaces/PokerTableData";
import { AppContextParams } from "../../../../Context/AppContext";
import { Socket } from "socket.io-client";
import { BettingRounds } from "../../Interfaces/PokerTableData";
import PrimaryButton from "../../../../UI/Buttons/PrimaryButton";
import { PlayerController } from "../PlayerControls";
import { PlayerControls } from "../ControlTypes";
import { RawTableData } from "../../Interfaces/PokerTableData";
export const DisplayHostButtons = ({
  players,

  table,
  player_id,
  app,
  socket,
  disabled,

}: {
  players: RawPlayer[];

  table: RawTableData;
  player_id: number;

  app: AppContextParams;
  socket: Socket;
  disabled: boolean;
 
}) => {
  const currentPlayer = players.find(
    (player) => player.player_id === player_id
  );
  if (currentPlayer?.playerTableOrderInstance.isHost) {
    return (
      <>
        {table.bettingRound === BettingRounds.BEGINNING && (
          <PrimaryButton
            onClick={() => {
              app.player?.player_id &&
                app.table?.pokerTable_id &&
                PlayerController(
                  socket,
                  app.player?.player_id,
                  app.table?.pokerTable_id,
                  PlayerControls.STARTGAME
                );
            }}
            disabled={disabled}
            text="start game"
          ></PrimaryButton>
        )}
        
      </>
    );
  } else {
    return null; // If the current player is not found, render nothing
  }
};
