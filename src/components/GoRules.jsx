import Image from "next/image";
import GoBoard from "@/public/GoBoard.webp";

const GoRules = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Image src={GoBoard} className="w-[15%] " />
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
export default GoRules;
