export const SOCKETEVENTS = {
  on: {
    userCreated: "userCreated",
    disconnectedFromTable: "disconnectedFromTable",
    tableCreated: "tableCreated",
    tableJoined: "tableJoined",
    getPlayerAction: "getPlayerAction",
    getTableData: "getTableData",
    connect: "connect",
  },

  emit: {
    createTable: "createTable",
    joinTable: "joinTable",
    intentionalDisconnect: "intentionalDisconnect",
    disconnect: "disconnect",
    PlayerAction: "PlayerAction",
    RequestGameState: "onRequestGameState",
  },
};
