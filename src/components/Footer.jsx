import Image from "next/image";
import Logo from "@/public/Logo.webp";
import { BsDiscord } from "react-icons/bs"; //  for discord
import { BsInstagram } from "react-icons/bs"; //  for insta
import { BsEnvelope } from "react-icons/bs"; // for mailing

const Footer = () => {
  return (
    <div className="flex w-full items-end justify-between bg-gradient-to-r from-tag-green-300 to-tag-green-200">
      <div className="flex m-3 items-center">
        <Image className="h-16 w-16" src={Logo} alt="Tea & Go Logo" />
        <p className="text-3xl text-gray-100">Tea & Go</p>
      </div>

      <div className="flex m-10">
        <div className="text-lg text-gray-100">
          <p>Contact Us</p>
          <p>900 University Ave</p>
          <p>Riverside CA, 92521</p>
        </div>

        <div className="flex">
          <div className="bg-white w-2.5 h-20 mx-3"></div>
          <div className="flex flex-col justify-between text-2xl text-gray-100">
            <BsDiscord />
            <BsEnvelope />
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
