import React from "react";
import { ButtonProps } from "../../Types/interfaces";

export default function BackButton({ text, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        cursor: "pointer",
        color: "white",
      }}
    >
      <h3>{"< Back"}</h3>
    </div>
  );
}
