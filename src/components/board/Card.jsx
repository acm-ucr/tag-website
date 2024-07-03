// import Image from "next/image";
// import Rong from "@/public/board/Rong.webp";

const Card = ({ name, position }) => {
  return (
    // <div className="flex flex-col items-start p-6">
    //   <div className="bg-gray-300 h-64 w-52 rounded-lg overflow-hidden">
    //     <Image src={Rong} alt="Rong" />
    //   </div>
    //   <div className="ml-1 mt-1">
    //     <p className="text-lg">{position}</p>
    //     <div className="flex flex-row justify-center items-center">
    //       <div className="h-5 w-[3px] bg-tag-green-200 m-1" />
    //       <p>{name}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <p className="text-tag-green-200 text-3xl">{position}</p>
      <p className="border-l-4 border-tag-green-100 text-xl pl-3">{name}</p>
    </div>
  );
};

export default Card;