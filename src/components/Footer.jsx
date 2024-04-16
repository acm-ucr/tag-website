// import Image from "next/image";
// import Logo from "@/public/Logo.webp";
import { BsDiscord } from "react-icons/bs"; //  for discord
import { BsInstagram } from "react-icons/bs"; //  for insta
import { BsEnvelope } from "react-icons/bs"; // for mailing

const Footer = () => {
  return (
    <div className="box-content h-32 w-128 bg-gradient-to-r from-lime-950 via-lime-900 to-lime-800">
      <p className="text-gray-100 absolute bottom-[-16%] left-[5%]">Tea & Go</p>

      <div className="absolute bottom-[-19%] left-[1%]">
        <img
          className="h-16 max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
          src="Logo.webp"
        ></img>
      </div>

      <div className="absolute bottom-[-15%] left-[75%] text-gray-100">
        <p>Contact Us</p>
        <p>900 University Ave</p>
        <p>Riverside CA, 92521</p>
      </div>

      {/* <div className="box-content absolute bottom-[10] bg">

        </div> */}

      <div className="bg-opacity-25 flex justify-center items-center">
        <div className="absolute bottom-[-16%] left-[86%]">
          <div className="bg-white w-2.5 h-20 shadow"></div>

          <BsDiscord className=" absolute bottom-[45%] left-[200%] fill-gray-100" />
          <BsInstagram className="absolute bottom-[79%] left-[200%] fill-gray-100" />
          <BsEnvelope className="absolute bottom-[10%] left-[200%] fill-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
