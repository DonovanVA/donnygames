import React from "react";
import Card from "./Card/Card";
import "./App.css";
import { playingCards } from "./Card/Cards";
import { Route } from "react-router-dom";
import { BrowserRouter,Routes } from "react-router-dom";
import { MainRoutes } from "./Routes/Routes";
import BangTheBus from "./Pages/BangTheBus/BangTheBus";
import TwentyFour from "./Pages/TwentyFour/TwentyFour";
import Home from "./Pages/Home/Home";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={MainRoutes.BangTheBus.path} element={<BangTheBus />} />
          <Route path={MainRoutes.TwentyFour.path} element={<TwentyFour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
