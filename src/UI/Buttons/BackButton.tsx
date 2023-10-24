import React from "react";
import { ButtonProps } from "../../Types/interfaces";

export default function BackButton({
  text,
  onClick,
  disabled,
  errormsg,
}: ButtonProps) {
  return (
    <div
      onClick={
        !disabled
          ? onClick
          : () => {
              console.log(errormsg);
            }
      }
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

