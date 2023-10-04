export const SOCKETEVENTS = {
  on: {
    userCreated: "userCreated",
    disconnectedFromTable: "disconnectedFromTable",
    tableCreated: "tableCreated",
    tableJoined: "tableJoined",
    getTableData: "getTableData",
    roundSummary: "roundSummary",
    connect: "connect",
    winner:"getWinner",
  },

  emit: {
    createTable: "createTable",
    joinTable: "joinTable",
    intentionalDisconnect: "intentionalDisconnect",
    disconnect: "disconnect",
    PlayerAction: "PlayerAction",

  },
};
