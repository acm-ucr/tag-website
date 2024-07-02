import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/Logo.webp";
import { BsDiscord, BsInstagram, BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-fit flex items-end justify-between bg-gradient-to-r from-tag-green-300 to-tag-green-200">
      <div className="flex items-center mb-3">
        <Image className="h-16 w-16" src={Logo} alt="Tea & Go Logo" />
        <p className="text-gray-100 text-xl sm:text-2xl md:text-3xl">
          Tea & Go
        </p>
      </div>
      <div className="flex my-5 mx-3">
        <div className="text-gray-100 text-right text-md sm:text-2xl pr-3 border-r-2">
          <p>Contact Us</p>
          <p>900 University Ave</p>
          <p>Riverside CA, 92521</p>
        </div>
        <div className="flex flex-col text-gray-100 pl-3 justify-around text-xl sm:text-2xl">
          <Link
            target="_blank"
            href="https://discord.com/invite/peSZUJWhvS"
            className="hover:scale-[1.3] ease-in duration-150"
          >
            <BsDiscord />
          </Link>
          <Link
            target="_blank"
            href="mailto: ucrTeaAndGo@gmail.com"
            className="hover:scale-[1.3] ease-in duration-150"
          >
            <BsEnvelope />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/ucr_tag/"
            className="hover:scale-[1.3] ease-in duration-150"
          >
            <BsInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
