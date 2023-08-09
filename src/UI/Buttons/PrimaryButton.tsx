import React from "react";
import { PrimaryButtonProps } from "../../Types/interfaces";

export default function PrimaryButton({ text, onClick }: PrimaryButtonProps) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "40px",
        width: "100px",
        padding: "10px",
        height: "20px",
        color: "#FFFFFF",
        cursor: "pointer",
        fontSize: "16px",
        margin: 5,
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
