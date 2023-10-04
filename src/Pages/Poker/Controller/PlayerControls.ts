import { Socket } from "socket.io-client";
import { PlayerControls } from "./ControlTypes";
import { SOCKETEVENTS } from "../../../SocketManager/SocketEvents";
export const PlayerController = async (
  socket: Socket,
  player_id: number,
  table_id: number,
  PlayerControls: PlayerControls,
  amount?: number
) => {
  socket.emit(
    SOCKETEVENTS.emit.PlayerAction,
    player_id,
    table_id,
    PlayerControls,
    amount
  );
};


