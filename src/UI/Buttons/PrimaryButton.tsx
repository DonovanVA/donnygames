import React from "react";
import { ButtonProps } from "../../Types/interfaces";

export default function PrimaryButton({
  text,
  onClick,
  disabled,
  errormsg,
}: ButtonProps) {
  return (
    <div
      style={{
        backgroundColor: disabled ? "grey" : "blue",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "40px",
        width: "120px",
        padding: "10px",
        height: "20px",
        color: "#FFFFFF",
        cursor: "pointer",
        fontSize: "16px",
        margin: 5,
      }}
      onClick={
        !disabled
          ? onClick
          : () => {
              console.log(errormsg);
            }
      }
    >
      {text}
    </div>
  );
}
