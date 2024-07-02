import Header from "@/components/Header";
import Board from "@/components/board/Board.jsx";

const Page = () => {
  return (
    <div className="justify-center flex flex-col gap-20">
      <Header text={"Meet the Board"} />
      <Board />
    </div>
  );
};

export default Page;
