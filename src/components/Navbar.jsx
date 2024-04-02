"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-green-500 w-screen h-12 justify-between">
      <div className="my-auto">TAG LOGO</div>
      <div className="flex mx-5 my-auto">
        <p className="mx-2">
          <Link href="/board">TEAM</Link>
        </p>
        <p className="mx-2">
          <Link href="/events">EVENTS</Link>
        </p>
        <p className="mx-2">
          <Link href="/photos">GALLERY</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
