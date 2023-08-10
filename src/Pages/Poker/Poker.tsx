import React from "react";
import io from "socket.io-client";
import { useEffect } from "react";
export default function Poker() {
  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io("http://localhost:8080"); // Update with your server URL and port

    // Handle events from the server
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("updateTable", (tableData) => {
      console.log("Received table update:", tableData);
      // Update your React state with the received tableData
    });

    // Clean up when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);
  return <div>Poker</div>;
}
