import React from "react";
import { playingCards } from "../../Card/Cards";
import Card from "../../Card/Renderer/RenderLocalCard";
import PrimaryButton from "../../UI/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { MainRoutes } from "../../Routes/Routes";
export default function Home() {
  const navigation = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Donny Games!</h1>
      <h3 style={{ color: "white" }}>Offline</h3>
      <PrimaryButton
        text="24"
        onClick={() => {
          navigation(`${MainRoutes.TwentyFour.path}`);
        }}
        disabled={false}
      ></PrimaryButton>
      <PrimaryButton
        text="Bang The Bus"
        onClick={() => {
          navigation(`${MainRoutes.BangTheBus.path}`);
        }}
        disabled={false}
      ></PrimaryButton>
      <h3 style={{ color: "white" }}>Online</h3>
      <PrimaryButton
        text="Poker"
        onClick={() => {
          navigation(`${MainRoutes.Poker.path}`);
        }}
        disabled={false}
      ></PrimaryButton>
    </div>
  );
}
