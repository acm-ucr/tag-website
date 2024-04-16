import Image from "next/image";
import Caligraphy from "../../public/Caligraphy.webp";

const Title = ({ text }) => {
  return (
    <div className="bg-tag-green-200 items-center relative">
      <div className="w-full">
        <Image
          src={Caligraphy}
          alt="Caligraphy"
          className="opacity-60 w-full"
        />
        <div className="font-serif text-5xl text-white w-full bottom-1/4 pb-2 absolute text-center">
          <p>Meet the Team</p>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Title;
