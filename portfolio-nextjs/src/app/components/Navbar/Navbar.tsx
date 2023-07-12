"use client"
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/Ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/Bs";
import React, { useState } from "react";


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(true)
  }
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
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
        <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/logo.png"
                width={87}
                height={35}
                alt="logo"
              />
              <div onClick={handleNav} className="rounded-full shadow-lg shadog-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="boder-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Working hard to make this world stylish and user friendly
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <li className="py-4 text-sm">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="py-4 text-sm">
                  <Link href={"/"}>About</Link>
                </li>
                <li className="py-4 text-sm">
                  <Link href={"/"}>Skills</Link>
                </li>
                <li className="py-4 text-sm">
                  <Link href={"/"}>Projects</Link>
                </li>
                <li className="py-4 text-sm">
                  <Link href={"/"}>Contact</Link>
                </li>
              </ul>
              <div className="pt-40 ">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  {" "}
                  Let's connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
