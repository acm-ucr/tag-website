import { FaDiscord, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FiLink } from "react-icons/fi";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="w-1/2 mx-auto my-10 text-tag-green-200 flex flex-col">
      <p className="text-2xl mx-auto mb-5 lg:text-4xl">Get Connected</p>
      <div className="flex justify-around sm:text-3xl md:text-5xl">
        <Link
          href="https://www.instagram.com/ucr_tag/"
          target="_blank"
          className="p-2 rounded-full border-[1px] border-tag-green-200"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://discord.com/invite/peSZUJWhvS"
          target="_blank"
          className="p-2 rounded-full border-[1px] border-tag-green-200"
        >
          <FaDiscord />
        </Link>
        <Link
          href="mailto: ucrTeaAndGo@gmail.com"
          target="_blank"
          className="p-2 rounded-full border-[1px] border-tag-green-200"
        >
          <MdEmail />
        </Link>
        <Link
          href="/"
          target="_blank"
          className="p-2 rounded-full border-[1px] border-tag-green-200"
        >
          <IoLogoFacebook />
        </Link>
        <Link
          href="https://highlanderlink.ucr.edu/organization/tag"
          target="_blank"
          className="p-2 rounded-full border-[1px] border-tag-green-200"
        >
          <FiLink />
        </Link>
      </div>
    </div>
  );
};
export default Connect;
