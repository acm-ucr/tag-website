import Image from "next/image";
import Mahjong from "@/public/Mahjong.webp";
import Tea from "@/public/Tea.webp";
import Go from "@/public/Go.webp";
const Circles = () => {
  return (
    <div className="relative h-300 w-40">
      <div className="absolute bottom-[16%] left-[90%] w-64 h-64 overflow-hidden rounded-full z-10">
        <Image src={Tea} alt="Tea" className="object-cover w-full h-full" />
      </div>

      <div className="absolute -left-8 top-[20%] w-64 h-64 overflow-hidden rounded-full">
        <Image
          src={Mahjong}
          alt="Mahjong"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute left-[170%] top-[10%] w-64 h-64 overflow-hidden rounded-full">
        <Image src={Go} alt="Go" className="object-cover w-full h-full" />
      </div>

      <div className="absolute left-[150%] top-[5%] w-80 h-80 overflow-hidden rounded-full border-2 border-tag-green-300"></div>
    </div>
  );
};

export default Circles;
