import React from "react";
import { BOARD } from "@/data/board";
import Card from "./Card";

const Board = () => {
  return (
    <div className="flex justify-center w-[90%] mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BOARD.map((member, index) => (
          <Card key={index} name={member.name} position={member.position} />
        ))}
      </div>
    </div>
  );
};

export default Board;
