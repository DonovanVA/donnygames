import React, { useEffect, useState, useContext } from "react";
import io from "socket.io-client";
import { AppContext } from "../../Context/AppContext";
import socket from "../../SocketManager/SocketManager";
import { SOCKETEVENTS } from "../../SocketManager/SocketEvents";
import {
  RawPokerCard,
  RawPokerServiceData,
  RawTableData,
} from "./Interfaces/PokerTableData";
import { RawPlayer } from "./Interfaces/PokerTableData";
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import { useImmer } from "use-immer";
import { PlayerController } from "./Controller/PlayerControls";
import { PlayerControls } from "./Controller/ControlTypes";
export default function PokerRoom() {
  const { app, setApp } = useContext(AppContext);
  useEffect(() => {
    console.log(app);
    socket.on(SOCKETEVENTS.on.connect, () => {
      console.log("Connected to server");
      if (app.table?.pokerTable_id !== 0) {
        socket.emit(SOCKETEVENTS.emit.joinTable, app.table?.pokerTable_id); // Join the specific table based on the room number
        socket.emit(SOCKETEVENTS.emit.RequestGameState);
      }
    });
    socket.on(
      SOCKETEVENTS.on.getTableData,
      (newTableData: RawPokerServiceData) => {
        console.log("Received table update:", newTableData);
        setApp({
          ...app,
          state:newTableData.state,
          table: newTableData.table,
        });
      }
    );

    return () => {
      // Clean up event listeners when the component unmounts
      socket.off(SOCKETEVENTS.on.connect);
      socket.off(SOCKETEVENTS.on.getTableData);
      socket.off(SOCKETEVENTS.on.tableJoined);
    };
  }, [app]); // Make sure to include app.room as a dependency
  useEffect(() => {
    socket.on(
      SOCKETEVENTS.on.tableJoined,
      (newTableData: RawPokerServiceData) => {
        console.log(newTableData);
        if (newTableData.table) {
          // Update the app state with the new data
          setApp({
            ...app,
            state: newTableData.state,
            table: newTableData.table,
          });
        } else {
          console.log("table not found");
        }
      }
    );
    return () => {
      // Clean up event listeners when the component unmounts
      socket.off(SOCKETEVENTS.on.connect);
      socket.off(SOCKETEVENTS.on.getTableData);
      socket.off(SOCKETEVENTS.on.tableJoined);
    };
  }, [app]);

  window.addEventListener("beforeunload", () => {
    // Emit a custom event to the server indicating intentional disconnect
    socket.disconnect();
  });
  const renderCards = (rawCardData: RawPokerCard[]) => {};
  return (
    <div>
      <h1>Poker Table</h1>
      <p>{app.app}</p>
      <p>Room: {app.table?.pokerTable_id}</p>
      <p>Player: {app.player?.player_id}</p>
      {/* Render your table components using the state */}
      {/* Example: */}
      <p>Round: {app.table?.bettingRound}</p>
      <p>no. of Players: {app.table?.players.length}</p>
      <div className="circle-container">
        {app.table?.players.map((player: RawPlayer, index: number) => (
          <div
            key={player.player_id}
            className="player-card"
            style={{
              transform: `rotate(${
                (360 / app.table?.players.length!) * index
              }deg) translate(100px) rotate(-${
                (360 / app.table?.players.length!) * index
              }deg)`,
            }}
          >
            {/* Render player avatar and cards here */}
            <p>{player.name}</p>

            {player.cards.length > 0 &&
              player.cards.map((card: RawPokerCard, cardIndex: number) => (
                <p>Suit{card.suit}</p>
              ))}
          </div>
        ))}
      </div>
      <PrimaryButton onClick={() => {app.player?.player_id && app.table?.pokerTable_id && PlayerController(socket,app.player?.player_id,app.table?.pokerTable_id,PlayerControls.STARTGAME)}} text="start game"></PrimaryButton>
      <PrimaryButton onClick={() => {app.player?.player_id && app.table?.pokerTable_id && PlayerController(socket,app.player?.player_id,app.table?.pokerTable_id,PlayerControls.ENDGAME)}} text="end game"></PrimaryButton>
      <PrimaryButton onClick={() => {app.player?.player_id && app.table?.pokerTable_id && PlayerController(socket,app.player?.player_id,app.table?.pokerTable_id,PlayerControls.BET,10)}} text="bet"></PrimaryButton>
      <PrimaryButton onClick={() => {app.player?.player_id && app.table?.pokerTable_id && PlayerController(socket,app.player?.player_id,app.table?.pokerTable_id,PlayerControls.FOLD)}} text="fold"></PrimaryButton>
      <PrimaryButton onClick={() => {app.player?.player_id && app.table?.pokerTable_id && PlayerController(socket,app.player?.player_id,app.table?.pokerTable_id,PlayerControls.BUYIN,10)}} text="buy in"></PrimaryButton>

      {/* Add more UI elements based on tableData */}
    </div>
  );
}
