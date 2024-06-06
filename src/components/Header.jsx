import Image from "next/image";
import TeaHeader from "../../public/TeaHeader.png";

const Header = ({ text }) => {
  return (
    <div className="z-[-1] relative bottom-56 w-full">
      <Image src={TeaHeader} alt="Tea Header" className="w-full" />
      <div className="-mt-40 absolute font-serif text-5xl text-white w-full text-center">
        {text}
      </div>
    </div>
  );
};

export default Header;
