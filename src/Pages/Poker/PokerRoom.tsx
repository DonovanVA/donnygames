import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import socket from "../../SocketManager/SocketManager";
import { SOCKETEVENTS } from "../../SocketManager/SocketEvents";
import {
  BettingRounds,
  RawPokerCard,
  RawPokerServiceData,
  RawSidePot,
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
import {
  POKERLOCALSTORAGEKEYS,
  deleteAppDataFromLocalStorage,
  loadAppDataFromLocalStorage,
  saveAppDataIntoLocalStorage,
} from "./CacheManager/Localstorage";
import { useNavigate } from "react-router-dom";
import { MainRoutes } from "../../Routes/Routes";
// TBD: after 2 rounds, then has issues continuing
export default function PokerRoom() {
  const { app, setApp } = useContext(AppContext);
  const [winner_id, setWinner_id] = useState<number>(0);
  const [raise, setRaise] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loadedAppData = loadAppDataFromLocalStorage(
      POKERLOCALSTORAGEKEYS.app
    );
    const loadedWinnerData = loadAppDataFromLocalStorage(
      POKERLOCALSTORAGEKEYS.winner
    );
    if (loadedAppData) {
      setApp(loadedAppData);
    }
    if (!loadedAppData) {
      navigate(`${MainRoutes.Poker.path}`);
    }
    if (loadedWinnerData) {
      setWinner_id(loadedWinnerData);
    }

    socket.on(SOCKETEVENTS.on.connect, async () => {
      console.log("Connected to server");
      if (app.table?.pokerTable_id === 0) {
        socket.emit(SOCKETEVENTS.emit.joinTable, app.table?.pokerTable_id); // Join the specific table based on the room number
      }
    });
    socket.on(
      SOCKETEVENTS.on.getTableData,
      async (newTableData: RawPokerServiceData) => {
        const newPlayerData = newTableData.table.players.find(
          (player: RawPlayer) => player.player_id === app.player?.player_id
        );
        if (newTableData.table.numRaises > 0) {
          setRaise(true);
        }
        if (newPlayerData) {
          const newPokerData = {
            ...app,
            player: newPlayerData,
            state: newTableData.state,
            table: newTableData.table,
          };
          saveAppDataIntoLocalStorage(POKERLOCALSTORAGEKEYS.app, newPokerData);
          setApp(newPokerData);
        }
      }
    );
    socket.on(SOCKETEVENTS.on.winner, async (anon: any) => {
      saveAppDataIntoLocalStorage(POKERLOCALSTORAGEKEYS.winner, anon.winner_id);
      setWinner_id(anon.winner_id);
    });
  }, [socket]); // Make sure to include app.room as a dependency

  window.addEventListener("beforeunload", () => {
    // Emit a custom event to the server indicating intentional disconnect
    // socket.disconnect();
  });
  return (
    <div>
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
              deleteAppDataFromLocalStorage(POKERLOCALSTORAGEKEYS.winner);
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
              deleteAppDataFromLocalStorage(POKERLOCALSTORAGEKEYS.winner);
            }}
            disabled={false}
            text="Next Round"
          ></PrimaryButton>
        </>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h1>Poker Table</h1>
        <p>{app.app}</p>
        <p>Room: {app.table?.pokerTable_id}</p>

        <p>cash:{app.player?.cash}</p>
        <p>bet:{app.player?.bet}</p>
        {app.table?.sidePot.map((value: RawSidePot, index: number) => {
          return <p>{value.amount}</p>;
        })}

        {/* Render your table components using the state */}
        {/* Example: */}
        <p>Round: {app.table?.bettingRound}</p>
        <p>no. of Players: {app.table?.players.length}</p>
        <p>active Index:{app.table?.activeIndex}</p>
        {winner_id && winner_id === app.player?.player_id && <p>You win!</p>}
        <div>
          {app.table?.cards
            .filter(
              (card: RawPokerCard) => !card.faceDown && card.playerId === null
            ) // Filter the cards
            .map((card: RawPokerCard, index: number) => (
              <RenderServerCard
                card={card}
                isFaceDown={false}
              ></RenderServerCard>
            ))}
        </div>
        <div style={{ marginBottom: 500 }}>
          {app.table?.players.map((player: RawPlayer, index: number) => (
            <div
              key={player.player_id}
              className="player-card"
              style={{
                marginTop: 10,
                transform: `rotate(${
                  (270 / app.table?.players.length!) * index
                }deg) translate(200px) rotate(-${
                  (270 / app.table?.players.length!) * index
                }deg)`,
              }}
            >
              {/* Render player avatar and cards here */}
              <div>
                {player.playerTableOrderInstance.order ===
                  app.table?.activeIndex && app.table.activeIndex !== 0 ? (
                  <p> making a move...</p>
                ) : (
                  <></>
                )}

                <p>{player.name}</p>
              </div>

              {player.cards.length > 0 && (
                <PlayerCardsRenderer
                  playingCards={playingCards}
                  rawPlayingCards={player.cards}
                ></PlayerCardsRenderer>
              )}
              {app.table?.players &&
                app.player &&
                app.player.player_id == player.player_id &&
                app.table.bettingRound !== BettingRounds.BEGINNING &&
                app.table.bettingRound !== BettingRounds.ENDING &&
                app.table.activeIndex ==
                  app.player.playerTableOrderInstance.order && (
                  <DisplayGameMoveButtons
                    player_id={app.player.player_id}
                    players={app.table?.players}
                    winner_id={winner_id}
                    app={app}
                    raise={raise}
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
        </div>
      </div>
    </div>
  );
}
