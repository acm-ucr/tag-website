import Image from "next/image";
import board from "../../public/MahjongPieces.webp";
const Rules = () => {
  return (
    <div className="flex">
      <div className="flex flex-col pt-5">
        <h1 className="text-tag-green-200 font-serif text-lg text-right pr-10">
          RULES OF MAHJANG
        </h1>
        <div className="flex pt-3">
          <p className="text-tag-gray-100 font-serif text-xs text-right pl-72 mr-3 flex-1 leading-loose">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
            EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM
            AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT
            ALIQUIP EX EA COMMODO CONSEQUAT.
          </p>
          <div className="border-l border-black h-full pr-10"></div>
        </div>
      </div>
      <div className="flex pr-64">
        <Image src={board} alt="Mahjang_Board" width={900} height={100} />
      </div>
    </div>
  );
};

export default Rules;