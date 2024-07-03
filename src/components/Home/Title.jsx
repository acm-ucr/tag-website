import Logo from "@/public/assets/Logo.webp";
import Button from "@/components/Button";
import Image from "next/image";

const Title = () => {
  return (
    <div className="flex flex-col items-center mr-10">
      <div className="flex flex-col items-center">
        <Image src={Logo} alt="logo" className="w-1/3 xl:w-1/4" />
        <p className="text-4xl md:text-5xl xl:text-6xl">Tea & Go</p>
        <p className="text-md md:text-2xl text-right my-3">
          Come join us on wednesdays for a fun night of TEA!
        </p>
        <Button
          text="JOIN NOW"
          link="https://discord.com/invite/peSZUJWhvS"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Title;
