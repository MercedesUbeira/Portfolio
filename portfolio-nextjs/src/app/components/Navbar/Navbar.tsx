import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/Ai";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2xl:px-16">
        <Image
          src="/../public/assets/logo.png"
          alt="logo"
          width={170}
          height={30}
        />
        <ul className="hidden md:flex">
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href={"/"}>About</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href={"/"}>Skills</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href={"/"}>Projects</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
            <div className="flex w-full items-center justify-between">
              <Image src="/../public/assets/logo.png" width={87} height={35} alt="logo"/>
              <div className="rounded-full shadow-lg shadog-gray-400 p-3 cursor-pointer">
                <AiOutlineClose/>
              </div>
            </div>
            <div className="boder-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Working hard to make this world stylish and user friendly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
