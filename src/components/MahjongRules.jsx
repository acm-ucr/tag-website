import Image from "next/image";
import board from "../../public/MahjongPieces.webp";

const MahjongRules = () => {
  return (
    <div className="flex justify-center items-center flex-col lg:flex-row">
      <div className="mb-10 w-[50%] md:w-[20%]text-right text-6xl">
        <p className="text-tag-green-200 text-2xl lg:text-4xl">
          Rules of Mahjong
        </p>
        <div className="flex w-[120%] md:w-[120%] lg:w-[100%]">
          <p className="text-tag-gray-100 text-xs leading-loose lg:text-xl">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
            EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM
            AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT
            ALIQUIP EX EA COMMODO CONSEQUAT.
          </p>
          <div className="w-2 h-auto border-l bg-tag-gray-100 mx-5"></div>
        </div>
      </div>
      <Image
        src={board}
        alt="Mahjong_Board"
        className="w-[45%] md:[25%] lg:w-[30%] ml-4"
      />
    </div>
  );
};

export default MahjongRules;
