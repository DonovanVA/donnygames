import React from "react";
import { playingCards } from "../../Card/Cards";
import Card from "../../Card/Card";
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
      <PrimaryButton
        text="24"
        onClick={() => {
          navigation(`${MainRoutes.TwentyFour.path}`);
        }}
      ></PrimaryButton>
      <PrimaryButton
        text="Bang The Bus"
        onClick={() => {
          navigation(`${MainRoutes.BangTheBus.path}`);
        }}
      ></PrimaryButton>
    </div>
  );
}
