import Image from "next/image";
import GoBoard from "@/public/GoBoard.webp";

const GoRules = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-10 lg:flex-row">
      <Image
        src={GoBoard}
        className="w-[45%] md:w-[25%] lg:w-[20%] mr-10"
        alt="Go Board"
      />
      <div className="w-[50%] my-10 text-lg md:w-[50%] items-center md:flex-col lg:w-[50%] flex-col">
        <p className="text-xl text-tag-green-200 mb-3 lg:text-3xl">
          {" "}
          Rules of Go{" "}
        </p>
        <div className="flex">
          <div className="w-2 bg-tag-gray-100 mr-5 " />
          <p className="text-tag-gray-100 text-xl lg:text-xl">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default GoRules;
