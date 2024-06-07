import Image from "next/image";
import Mahjong from "@/public/Mahjong.webp";
import Tea from "@/public/Tea.webp";
import Go from "@/public/Go.webp";

const Circles = () => {
  return (
    <div className="relative right-10 h-full w-full">
      <div className="absolute overflow-hidden rounded-full z-10 lg:w-64 lg:h-64 md:w-48 md:h-48 sm:w-40 sm:h-40 lg:top-56 md:top-48 sm:top-44 lg:left-40 md:left-36 sm:left-28">
        <Image src={Tea} alt="Tea" className="object-cover w-full h-full" />
      </div>

      <div className="absolute overflow-hidden rounded-full lg:w-64 lg:h-64 md:w-48 md:h-48 sm:w-40 sm:h-40 top-20 left-0">
        <Image
          src={Mahjong}
          alt="Mahjong"
          className="object-cover w-full h-full"
        />
      </div>

      <div className=" lg:left-72 md:left-52 sm:left-40 lg:top-0 md:top-0 sm:top-4 absolute overflow-hidden rounded-full border-2 border-tag-green-100 lg:w-80 lg:h-80 md:w-64 md:h-64 sm:w-48 sm:h-48 flex items-center justify-center">
        <div className="overflow-hidden rounded-full lg:w-64 lg:h-64 md:w-48 md:h-48 sm:w-40 sm:h-40">
          <Image src={Go} alt="Go" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Circles;
