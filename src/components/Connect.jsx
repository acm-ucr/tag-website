import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FiLink } from "react-icons/fi";

const Connect = () => {
  return (
    <div className="w-1/2 my-10 mx-auto flex flex-col items-center text-2xl text-tag-green-200">
      <p>Get Connected </p>
      <div className="flex justify-center text-5xl text-tag-green-200 ">
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <FaInstagram />
        </div>
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <FaDiscord />
        </div>
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <MdEmail />
        </div>
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <IoLogoFacebook />
        </div>
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <FiLink />
        </div>
      </div>
    </div>
  );
};

export default Connect;
