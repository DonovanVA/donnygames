import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { MainRoutes } from "./Routes";
import BangTheBus from "../Pages/BangTheBus/BangTheBus";
import Home from "../Pages/Home/Home";
import TwentyFour from "../Pages/TwentyFour/TwentyFour";
import Poker from "../Pages/Poker/Poker";
import PokerRoom from "../Pages/Poker/PokerRoom";
import { AppContext } from "../Context/AppContext";

export default function AppRoutes() {
  const { app, setApp } = useContext(AppContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={MainRoutes.BangTheBus.path} element={<BangTheBus />} />
      <Route path={MainRoutes.TwentyFour.path} element={<TwentyFour />} />
      <Route path={MainRoutes.Poker.path} element={<Poker />} />
      <Route
        path={`${MainRoutes.PokerRoom.path}/${app.table?.pokerTable_id.toString()}`}
        element={<PokerRoom />}
      />
    </Routes>
  );
}
