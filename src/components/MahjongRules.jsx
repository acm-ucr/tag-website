import Image from "next/image";
import board from "../../public/MahjongPieces.webp";

const MahjongRules = () => {
  return (
    <div className="flex justify-center items-center flex-col-reverse mr-10 lg:flex-row">
      <div className="mb-10 w-[50%] md:w-[20%]text-right text-6xl">
        <p className="text-tag-green-200 text-xl lg:text-3xl mb-3">
          Rules of Mahjong
        </p>
        <div className="flex mr-5 w-[120%] md:w-[120%] lg:w-[100%]">
          <p className="text-tag-gray-100 text-xl lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
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
