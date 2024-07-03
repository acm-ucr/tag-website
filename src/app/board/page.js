import Header from "@/components/Header";
import Board from "@/components/board/Board.jsx";

const Page = () => {
  return (
    <div className="flex flex-col items-center h-full">
      <Header text={"Meet the Board"} />
      <Board />
    </div>
  );
};

export default Page;
