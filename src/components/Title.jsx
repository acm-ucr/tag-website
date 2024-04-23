import Logo from "../../public/Logo.webp";
import Button from "@/components/Button";
import Image from "next/image";

const Title = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="flex flex-col mb-4 mr-48 items-center">
          <Image src={Logo} alt="Logo" className="w-1/4 py-2 ml-14" />
          <p className="text-6xl">Tea & Go</p>
        </div>
        <div className="flex flex-col text-right w-3/5">
          <div className="text-3xl">Come join us on wednesdays for a</div>
          <div className="text-3xl">fun night of TEA!</div>
        </div>
        <div className="flex justify-center mr-40 mt-16 ">
          <Button text="JOIN NOW" />
        </div>
      </div>
    </div>
  );
};

export default Title;
