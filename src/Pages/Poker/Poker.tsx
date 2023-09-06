import React, { useState } from "react";
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import socket from "../../SocketManager/SocketManager";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { MainRoutes } from "../../Routes/Routes";
import { useEffect } from "react";
import { SOCKETEVENTS } from "../../SocketManager/SocketEvents";
import { RawPokerServiceData, RawTableData } from "./Interfaces/PokerTableData";
export default function Poker() {
  const [joinTableId, setJoinTableId] = useState(""); // State to store the table ID for joining
  const { app, setApp } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for the "tableCreated" event from the server
    socket.on(
      SOCKETEVENTS.on.tableCreated,
      async (newPoker: RawPokerServiceData) => {
        console.log(newPoker);
        if (newPoker) {
          setApp({
            ...app,
            state: newPoker.state,
            player: newPoker.player,
            table: newPoker.table,
          });
          navigate(
            `${
              MainRoutes.PokerRoom.path
            }/${newPoker.table.pokerTable_id.toString()}`
          ); // Navigate to the PokerRoom component with the new table ID
        }
      }
    );
    socket.on(
      SOCKETEVENTS.on.tableJoined,
      async (newPoker: RawPokerServiceData) => {
        console.log(newPoker);
        if (newPoker.table) {
          setApp({
            ...app,
            state: newPoker.state,
            player: newPoker.player,
            table: newPoker.table,
          });
          navigate(
            `${MainRoutes.PokerRoom.path}/${newPoker.table.pokerTable_id.toString()}`
          ); // Navigate to the PokerRoom component with the new table ID
        } else {
          console.log("table not found");
        }
      }
    );

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("tableCreated");
    };
  }, [app, navigate, setApp]);
  window.addEventListener("beforeunload", () => {
    // Emit a custom event to the server indicating intentional disconnect
    socket.emit(SOCKETEVENTS.emit.intentionalDisconnect);
  });

  const handleJoinTable = () => {
    if (joinTableId) {
      socket.emit(SOCKETEVENTS.emit.joinTable, parseInt(joinTableId), {
        name: "John",
      });
    }
  };

  const handleCreateTable = () => {
    socket.emit(SOCKETEVENTS.emit.createTable, { name: "Donovan" });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter table ID"
        value={joinTableId}
        onChange={(e) => setJoinTableId(e.target.value)}
      />
      <PrimaryButton onClick={handleJoinTable} text="Join Table" />
      <PrimaryButton onClick={handleCreateTable} text="Create Table" />
    </div>
  );
}
