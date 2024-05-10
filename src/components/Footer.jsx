import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.webp";
import { BsDiscord } from "react-icons/bs"; //  for discord
import { BsInstagram } from "react-icons/bs"; //  for insta
import { BsEnvelope } from "react-icons/bs"; // for mailing

const Footer = () => {
  return (
    <div className="flex w-full h-30 items-end justify-between bg-gradient-to-r from-tag-green-300 to-tag-green-200 md: h-35">
      <div className="flex ml-3 mb-15 md: ml-3 mb-10 items-center">
        <Image className="h-16 w-16" src={Logo} alt="Tea & Go Logo" />
        <p className="text-xl text-gray-100 sm:text-2xl text-gray-100 md:text-3xl text-gray-100">Tea & Go</p>
      </div>

      <div className="flex ml-5 mr-5 m-10">
        <div className="text-gray-100 text-right">
          <p class="text-xl md:text-3xl font-semibold">Contact Us</p>
          <p class="text-md md:text-xl">900 University Ave</p>
          <p>Riverside CA, 92521</p>
        </div>

        <div className="flex">
          <div className="bg-white w-2.5 h-20 mx-3"></div>
          <div className="flex flex-col justify-between text-2xl text-gray-100">
            <Link
              target="_blank"
              href="https://discord.com/invite/peSZUJWhvS"
              className="hover:scale-[1.3] ease-in duration-150"
            >
              <BsDiscord />
            </Link>
            <Link
              target="_blank"
              href="/"
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
    </div>
  );
};

export default Footer;
