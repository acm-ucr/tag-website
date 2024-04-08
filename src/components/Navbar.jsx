import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.webp";

const Navbar = () => {
  return (
    <div className="container max-w-full h-[89px] bg-gradient-to-r from-tag-green-300 to-tag-green-200 flex justify-between">
      <div>
        <Link href={"/"}>
          <Image src={Logo} alt="logo" width={80} height={80} />
        </Link>
      </div>
      <div>
        <ul className="flex px-4 py-7 space-x-5 mr-4 font-serif text-2xl">
          <li className="text-white hover:text-black">
            <Link href={"/"}>Teams</Link>
          </li>
          <li className="text-white hover:text-black">
            <Link href={"/"}>Events</Link>
          </li>
          <li className="text-white hover:text-black">
            <Link href={"/"}>Photos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
