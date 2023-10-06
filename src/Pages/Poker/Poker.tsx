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
import {
  POKERLOCALSTORAGEKEYS,
  saveAppDataIntoLocalStorage,
} from "./CacheManager/Localstorage";
import { deleteAppDataFromLocalStorage } from "./CacheManager/Localstorage";
export default function Poker() {
  const [joinTableId, setJoinTableId] = useState<string>(""); // State to store the table ID for joining
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { app, setApp } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for the "tableCreated" event from the server
    deleteAppDataFromLocalStorage(POKERLOCALSTORAGEKEYS.winner);
    socket.on(SOCKETEVENTS.on.serverError, async (err: { error: string }) => {
      setError(err.error);
    });
    socket.on(
      SOCKETEVENTS.on.tableCreated,
      async (newPoker: RawPokerServiceData) => {
        console.log(newPoker);
        if (newPoker) {
          const updatedApp = {
            ...app,
            state: newPoker.state,
            player: newPoker.player,
            table: newPoker.table,
          };
          saveAppDataIntoLocalStorage(POKERLOCALSTORAGEKEYS.app, updatedApp);
          setApp(updatedApp);
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
          const updatedApp = {
            ...app,
            state: newPoker.state,
            player: newPoker.player,
            table: newPoker.table,
          };
          saveAppDataIntoLocalStorage(POKERLOCALSTORAGEKEYS.app, updatedApp);
          setApp(updatedApp);

          navigate(
            `${
              MainRoutes.PokerRoom.path
            }/${newPoker.table.pokerTable_id.toString()}`
          ); // Navigate to the PokerRoom component with the new table ID
        }
      }
    );

    // Clean up the event listener when the component unmounts
    return () => {
      //socket.off("tableCreated");
    };
  }, [app, navigate, setApp, socket]);
  window.addEventListener("beforeunload", () => {
    // Emit a custom event to the server indicating intentional disconnect
    socket.emit(SOCKETEVENTS.emit.intentionalDisconnect);
  });

  const handleJoinTable = () => {
    if (name === "") {
      setError("Enter at least one character");
    } else if (joinTableId === "") {
      setError("Please enter a join table");
    } else if (joinTableId) {
      socket.emit(SOCKETEVENTS.emit.joinTable, parseInt(joinTableId), {
        name: name,
      });
    }
  };

  const handleCreateTable = () => {
    if (name === "") {
      setError("Enter at least one character");
    } else {
      socket.emit(SOCKETEVENTS.emit.createTable, { name: name });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter table ID"
        value={joinTableId}
        onChange={(e) => setJoinTableId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{error}</p>
      <PrimaryButton
        onClick={handleJoinTable}
        text="Join Table"
        disabled={false}
      />
      <PrimaryButton
        onClick={handleCreateTable}
        text="Create Table"
        disabled={false}
      />
    </div>
  );
}
