import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FiLink } from "react-icons/fi";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="w-1/2 my-10 mx-auto flex flex-col items-center text-2xl text-tag-green-200">
      <p>Get Connected </p>
      <div className="w-4/5 flex justify-center text-5xl text-tag-green-200 justify-between">
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <Link target="_blank" href="https://www.instagram.com/ucr_tag/">
            <FaInstagram />
          </Link>
        </div>
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <Link target="_blank" href="https://discord.com/invite/peSZUJWhvS">
            <FaDiscord />
          </Link>
        </div>
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <Link target="_blank" href="/">
            <MdEmail />
          </Link>
        </div>
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <Link target="_blank" href="/">
            <IoLogoFacebook />
          </Link>
        </div>
        <div className="border-[1px] border-tag-green-200 rounded-full m-3 p-3">
          <Link target="_blank" href="/">
            <FiLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
