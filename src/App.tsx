import React from "react";
import Card from "./Card/Card";
import "./App.css";
import { playingCards } from "./Card/Cards";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { MainRoutes } from "./Routes/Routes";
import BangTheBus from "./Pages/BangTheBus/BangTheBus";
import TwentyFour from "./Pages/TwentyFour/TwentyFour";
import Home from "./Pages/Home/Home";
import Poker from "./Pages/Poker/Poker";
import PokerRoom from "./Pages/Poker/PokerRoom";
import { AppClientContext } from "./Context/AppContext";
import AppRoutes from "./Routes/AppRoutes";
const App = () => {
  return (
    <div className="App">
      <AppClientContext>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </AppClientContext>
    </div>
  );
};

export default App;
