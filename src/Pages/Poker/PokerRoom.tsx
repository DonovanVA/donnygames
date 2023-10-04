import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import socket from "../../SocketManager/SocketManager";
import { SOCKETEVENTS } from "../../SocketManager/SocketEvents";
import {
  BettingRounds,
  RawPokerCard,
  RawPokerServiceData,
} from "./Interfaces/PokerTableData";
import { RawPlayer } from "./Interfaces/PokerTableData";
import { DisplayGameMoveButtons } from "./Controller/ControllerDisplays/DisplayGameMoveButtons";
import { DisplayHostButtons } from "./Controller/ControllerDisplays/DisplayHostButtons";
import PlayerCardsRenderer from "./Renderers/PlayerCardsRenderer";
import { playingCards } from "../../Card/Cards";
import RenderServerCard from "../../Card/Renderer/RenderServerCard";
import { PlayerController } from "./Controller/PlayerControls";
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import { PlayerControls } from "./Controller/ControlTypes";
// TBD: after 2 rounds, then has issues continuing
export default function PokerRoom() {
  const { app, setApp } = useContext(AppContext);
  const [winner_id, setWinner_id] = useState<number>(0);

  useEffect(() => {
    console.log(app);
    socket.on(SOCKETEVENTS.on.connect, async () => {
      console.log("Connected to server");
      if (app.table?.pokerTable_id === 0) {
        socket.emit(SOCKETEVENTS.emit.joinTable, app.table?.pokerTable_id); // Join the specific table based on the room number
      }
    });
    socket.on(
      SOCKETEVENTS.on.getTableData,
      async (newTableData: RawPokerServiceData) => {
        console.log("Received table update:", newTableData);
        const newPlayerData = newTableData.table.players.find(
          (player: RawPlayer) => player.player_id === app.player?.player_id
        );

        newPlayerData &&
          setApp({
            ...app,
            player: newPlayerData,
            state: newTableData.state,
            table: newTableData.table,
          });
      }
    );
    socket.on(SOCKETEVENTS.on.winner, async (anon: any) => {
      console.log(anon)
      setWinner_id(anon.winner_id);
    });
  }, [app, socket]); // Make sure to include app.room as a dependency

  window.addEventListener("beforeunload", () => {
    // Emit a custom event to the server indicating intentional disconnect
    // socket.disconnect();
  });
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Poker Table</h1>
      <p>{app.app}</p>
      <p>Room: {app.table?.pokerTable_id}</p>
      <p>Player: {app.player?.player_id}</p>
      {app.player?.playerTableOrderInstance.isHost ? (
        <p>isHost: yes</p>
      ) : (
        <p>isHost: no</p>
      )}

      <p>Order: {app.player?.playerTableOrderInstance.order}</p>
      <p>cash:{app.player?.cash}</p>
      <p>bet:{app.player?.bet}</p>

      {/* Render your table components using the state */}
      {/* Example: */}
      <p>Round: {app.table?.bettingRound}</p>
      <p>no. of Players: {app.table?.players.length}</p>
      <p>active Index:{app.table?.activeIndex}</p>
      <div>
        {app.table?.cards
          .filter(
            (card: RawPokerCard) => !card.faceDown && card.playerId === null
          ) // Filter the cards
          .map((card: RawPokerCard, index: number) => (
            <RenderServerCard card={card} isFaceDown={false}></RenderServerCard>
          ))}
      </div>
      <div style={{ marginBottom: 500 }}>
        {app.table?.players.map((player: RawPlayer, index: number) => (
          <div
            key={player.player_id}
            className="player-card"
            style={{
              marginTop: 100,
              transform: `rotate(${
                (270 / app.table?.players.length!) * index
              }deg) translate(200px) rotate(-${
                (270 / app.table?.players.length!) * index
              }deg)`,
            }}
          >
            {/* Render player avatar and cards here */}
            <p>{player.name}</p>

            {player.cards.length > 0 && (
              <PlayerCardsRenderer
                playingCards={playingCards}
                rawPlayingCards={player.cards}
              ></PlayerCardsRenderer>
            )}
            {app.table?.players &&
              app.player &&
              app.player.player_id === player.player_id &&
              app.table.bettingRound !== BettingRounds.BEGINNING &&
              app.table.bettingRound !== BettingRounds.ENDING &&
              app.table.activeIndex ===
                player.playerTableOrderInstance.order && (
                <DisplayGameMoveButtons
                  player_id={player.player_id}
                  players={app.table?.players}
                  winner_id={winner_id}
                  app={app}
                  socket={socket}
                ></DisplayGameMoveButtons>
              )}
            {app.table?.players &&
              app.player &&
              app.player.player_id === player.player_id &&
              (app.table.bettingRound === BettingRounds.BEGINNING ||
                winner_id > 0) && (
                <DisplayHostButtons
                  player_id={app.player.player_id}
                  players={app.table?.players}
                  table={app.table}
                  app={app}
                  socket={socket}
                  disabled={app.table.players.length < 2 ? true : false}
                ></DisplayHostButtons>
              )}
          </div>
        ))}
        {winner_id > 0 && app.player?.playerTableOrderInstance.isHost && (
          <>
            <PrimaryButton
              onClick={() => {
                app.player?.player_id &&
                  app.table?.pokerTable_id &&
                  PlayerController(
                    socket,
                    app.player?.player_id,
                    app.table?.pokerTable_id,
                    PlayerControls.ENDGAME
                  );
                setWinner_id(0);
              }}
              disabled={false}
              text="end game"
            ></PrimaryButton>
            <PrimaryButton
              onClick={() => {
                app.player?.player_id &&
                  app.table?.pokerTable_id &&
                  PlayerController(
                    socket,
                    app.player?.player_id,
                    app.table?.pokerTable_id,
                    PlayerControls.NEXTROUND
                  );
                setWinner_id(0);
              }}
              disabled={false}
              text="Next Round"
            ></PrimaryButton>
          </>
        )}
      </div>
    </div>
  );
}
