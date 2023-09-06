import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BettingRounds,
  RawPlayer,
  RawTableData,
} from "../Pages/Poker/Interfaces/PokerTableData";

export interface AppContextParams {
  app: string;
  table: RawTableData | null;
  player: RawPlayer | null;
  state: BettingRounds | null;
}
export const AppContext = createContext<{
  app: AppContextParams;
  setApp: React.Dispatch<React.SetStateAction<AppContextParams>>;
}>({
  app: {
    app: "app",
    table: null,
    player: null,
    state: null,
  },
  setApp: () => {},
});

export const AppClientContext = ({ children }: { children: any }) => {
  const [app, setApp] = useState<AppContextParams>({
    app: "app",
    table: null,
    player: null,
    state: null,
  });

  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
};
