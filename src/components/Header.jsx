import Image from "next/image";
import Caligraphy from "@/public/assets/Caligraphy.webp";

const Header = ({ text }) => {
  return (
    <div className="w-full h-[30vh] relative z-[-1]">
      <Image
        src={Caligraphy}
        alt="Header"
        className="w-full h-full"
        fill
        style={{ objectFit: "cover" }}
      />
      <p className="tracking-wide text-5xl text-white w-full text-center absolute bottom-5">
        {text}
      </p>
    </div>
  );
};

export default Header;
