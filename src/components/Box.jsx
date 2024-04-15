import Image from "next/image";
import Go from "@/public/GoBoard.webp";

const Box = () => {
  return (
    // <div ClassName = "flex">
    //     <div ClassName = "flex flex-col pt-5">
    //         <p>
    //             RULES OF GO
    //         </p>
    //     </div>
    //     <div className = "flex">
    //         <p className = "text-tag-gray-100 font-serif text-s text-left leading-loose">
    //         LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
    //         EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM
    //         AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT
    //         ALIQUIP EX EA COMMODO CONSEQUAT.
    //         </p>
    //     </div>
    //     <div>
    //         <Image src = {Go} className = "w-48"/>
    //     </div>
    // </div>
    <div className="w-full flex justify-center items-center">
      <Image src={Go} className="w-[15%] " />
      <div className="w-[30%] mx-5">
        <div className="">
          <p className="text-2xl text-tag-green-200 mb-3"> RULES OF GO </p>
          <div className="flex">
            <div className="w-2 bg-tag-gray-100 mr-5 " />
            <p className="text-tag-gray-100">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Box;
