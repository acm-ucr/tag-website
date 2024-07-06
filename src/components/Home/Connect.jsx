import { FaDiscord, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="w-4/5 mx-auto mb-10 sm:mt-10 text-tag-green-200 flex flex-col md:w-1/2 lg:w-1/2">
      <p className="text-4xl mx-auto mb-5 lg:text-5xl">Get Connected</p>
      <div className="flex justify-around text-3xl md:text-4xl">
        <Link
          href="https://www.instagram.com/ucr_tag/"
          target="_blank"
          className="p-2 rounded-full border-[1px] hover:scale-[1.3] ease-in duration-150 border-tag-green-200"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://discord.com/invite/peSZUJWhvS"
          target="_blank"
          className="p-2 rounded-full border-[1px] hover:scale-[1.3] ease-in duration-150 border-tag-green-200"
        >
          <FaDiscord />
        </Link>
        <Link
          href="mailto: ucrTeaAndGo@gmail.com"
          target="_blank"
          className="p-2 rounded-full border-[1px] hover:scale-[1.3] ease-in duration-150 border-tag-green-200"
        >
          <MdEmail />
        </Link>
        <Link
          href="https://highlanderlink.ucr.edu/organization/tag"
          target="_blank"
          className="p-2 rounded-full border-[1px] hover:scale-[1.3] ease-in duration-150 border-tag-green-200"
        >
          <FiLink />
        </Link>
      </div>
    </div>
  );
};
export default Connect;
