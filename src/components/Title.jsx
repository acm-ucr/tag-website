import Image from "next/image";
import Caligraphy from "../../public/Caligraphy.webp";

const Title = ({ text }) => {
  return (
    <div className="relative w-full h-[230px] rounded-b-[100%] bg-tag-green-200">
      <div className="w-full">
        <Image
          src={Caligraphy}
          alt="Caligraphy"
          className="object-cover object-bottom h-[230px] w-full rounded-b-[100%] opacity-60"
        />
        <div className="bottom-1/4 absolute font-serif text-5xl text-white w-full text-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Title;
