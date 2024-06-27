import Image from "next/image";
import TeaHeader from "../../public/TeaHeader.webp";

const Header = ({ text }) => {
  return (
    <div className="w-full relative z-[-1]">
      <Image
        src={TeaHeader}
        alt="Header"
        className="w-full h-1/2"
        style={{ maxHeight: "30vh" }}
      />
      <p className="tracking-wide text-5xl text-white w-full text-center absolute bottom-5">
        {text}
      </p>
    </div>
  );
};

export default Header;
