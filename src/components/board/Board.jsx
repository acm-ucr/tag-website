import React from "react";
import { BOARD } from "@/data/board";
import Card from "./Card";

const Board = () => {
  return (
    <div className="flex justify-center w-[90%] mx-auto">
      <div className="gap-10 items-center justify-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid">
        {BOARD.map((member, index) => (
          <Card key={index} name={member.name} position={member.position} />
        ))}
      </div>
    </div>
  );
};

export default Board;
