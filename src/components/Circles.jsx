import Image from "next/image";
import Mahjong from "@/public/Mahjong.webp";
import Tea from "@/public/Tea.webp";
import Go from "@/public/Go.webp";
const Circles = () => {
  return (
    <div>
      <div className="relative -bottom-[50%] left-[60%] w-64 h-64 overflow-hidden rounded-full z-10">
        <Image src={Tea} alt="Tea" className="object-cover w-full h-full" />
      </div>

      <div className="relative -left-8 top-[0%] w-64 h-64 overflow-hidden rounded-full">
        <Image
          src={Mahjong}
          alt="Mahjong"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative bottom-[42%] left-[105%] w-64 h-64 overflow-hidden rounded-full">
        <Image src={Go} alt="Go" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Circles;
