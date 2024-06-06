import Image from "next/image";
import TeaHeader from "../../public/TeaHeader.png";

const Header = ({ text }) => {
  return (
    <div className="relative bottom-72 w-full z-[-1]">
      <Image src={TeaHeader} alt="Header" className="w-full" />
      <div className="tracking-wide absolute -mt-40 font-serif text-5xl text-white w-full text-center">
        {text}
      </div>
    </div>
  );
};

export default Header;
