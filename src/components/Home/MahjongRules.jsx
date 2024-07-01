import Image from "next/image";
import board from "@/public/assets/MahjongPieces.webp";

const MahjongRules = () => {
  return (
    <div className="flex justify-center items-center flex-col-reverse mr-10 lg:flex-row">
      <div className="mb-10 w-[50%] md:w-[20%]text-right text-6xl">
        <p className="text-tag-green-200 text-xl lg:text-3xl mb-3">
          Rules of Mahjong
        </p>
        <div className="flex mr-5 w-[120%] md:w-[120%] lg:w-[100%]">
          <p className="text-tag-gray-100 text-xl lg:text-xl">
            {
              "Mahjong is a four-player game using 144 tiles. Players draw and discard tiles to form four sets and a pair. The goal is to complete a hand and declare 'Mahjong.' Scoring is based on the complexity of the hand."
            }
          </p>
          <div className="w-2 h-auto border-l bg-tag-gray-100 mx-5"></div>
        </div>
      </div>
      <Image
        src={board}
        alt="Mahjong_Board"
        className="w-[45%] md:[25%] lg:w-[30%] ml-4 mb-5"
      />
    </div>
  );
};

export default MahjongRules;
