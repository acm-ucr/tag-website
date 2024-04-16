import React from "react";
import { BOARD } from "@/data/board";
import Card from "@/components/Card";

const Board = () => {
  return (
    <div className="flex flex-wrap">
      {BOARD.map((member, index) => (
        <Card key={index} name={member.name} position={member.position} />
      ))}
    </div>
  );
};

export default Board;
