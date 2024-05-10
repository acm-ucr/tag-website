import Logo from "../../public/Logo.webp";
import Button from "@/components/Button";
import Image from "next/image";

const Title = () => {
  return (
    <div>
      <div className="flex flex-col mb-4 md:mr-48 items-center">
        <Image src={Logo} alt="Logo" className="w-1/3 md:w-1/4 py-2 md:ml-14" />
        <p className="text-4xl md:text-6xl">Tea & Go</p>
      </div>
      <div className="flex flex-col items-center md:text-right md:w-4/5">
        <div className="text-xl md:text-3xl">
          Come join us on wednesdays for a
        </div>
        <div className="text-xl md:text-3xl">fun night of TEA!</div>
      </div>
      <div className="flex justify-center md:mr-40 mt-16 ">
        <Button text="JOIN NOW" />
      </div>
    </div>
  );
};

export default Title;
