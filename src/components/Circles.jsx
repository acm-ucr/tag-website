import Image from "next/image";
import Mahjong from "@/public/Mahjong.webp";
import Tea from "@/public/Tea.webp";
import Go from "@/public/Go.webp";
const Circles = () => {
  return (
    <div className="relative h-300 w-40">
      <div className="absolute top-[44%] md:bottom-[16%] left-[76%] md:left-[90%] w-36 h-36 md:w-64 md:h-64 overflow-hidden rounded-full z-10">
        <Image src={Tea} alt="Tea" className="object-cover w-full h-full" />
      </div>

      <div className="absolute left-[14%] md:-left-8 top-[23%] md:top-[20%] w-36 h-36 md:w-64 md:h-64 overflow-hidden rounded-full">
        <Image
          src={Mahjong}
          alt="Mahjong"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute left-[126%] md:left-[170%] top-[14.5%] md:top-[10%] w-36 h-36 md:w-64 md:h-64 overflow-hidden rounded-full">
        <Image src={Go} alt="Go" className="object-cover w-full h-full" />
      </div>

      <div className="absolute left-[116%] md:left-[150%] top-[10%] md:top-[5%] w-44 h-44 md:w-80 md:h-80 overflow-hidden rounded-full border-2 border-tag-green-100"></div>
    </div>
  );
};

export default Circles;
