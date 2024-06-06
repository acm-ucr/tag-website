import Image from "next/image";
import TeaHeader from "../../public/TeaHeader.webp";

const Header = ({ text }) => {
  return (
    <div className="relative bottom-56 w-full z-[-1]">
      <Image src={TeaHeader} alt="Tea Header" className="w-full" />
      <div className="absolute -mt-40 font-serif text-5xl text-white w-full text-center">
        {text}
    <div className="relative w-full h-[230px] rounded-b-[40%] bg-tag-green-200">
      <div className="relative w-full h-[230px] rounded-b-[40%] bg-tag-green-200">
        <div className="w-full">
          <Image
            src={Caligraphy}
            alt="Caligraphy"
            className="object-cover h-[230px] w-full rounded-b-[40%] opacity-60"
          />
          <div className="bottom-1/4 absolute font-serif text-4xl sm:text-5xl md:text-7xl text-white w-full text-center">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
