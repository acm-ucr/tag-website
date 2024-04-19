import Image from "next/image";
import board from "../../public/MahjongPieces.webp";

const MahjongRules = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[35%] text-right">
        <p className="text-tag-green-200 text-2xl mx-5">Rules of Mahjong</p>
        <div className="flex pt-3">
          <p className="text-tag-gray-100 text-xs leading-loose">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
            EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM
            AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT
            ALIQUIP EX EA COMMODO CONSEQUAT.
          </p>
          <div className="w-2 h-auto border-l border-tag-green-400 mx-5"></div>
        </div>
      </div>
      <Image src={board} alt="Mahjong_Board" className="w-[30%] mx-5" />
    </div>
  );
};

export default MahjongRules;