import React from "react";
import { BOARD } from "@/data/board";
import Card from "@/components/Card";

const Board = () => {
  return (
    <div className="flex justify-center w-[100%]">
      <div className="gap-40 items-center justify-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid">
        {BOARD.map((member, index) => (
          <Card key={index} name={member.name} position={member.position} />
        ))}
      </div>
    </div>
  );
};

export default Board;
