import React from "react";
import { playingCards } from "../../Card/Cards";
import Card from "../../Card/Card";
export default function Home() {
  return (
    <div>
      {playingCards.map((item, index) => {
        return (
          <div>
            <Card card={item} isBack={false}></Card>
          </div>
        );
      })}
    </div>
  );
}
