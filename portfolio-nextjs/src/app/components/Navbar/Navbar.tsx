import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai"

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
      <li className='ml-10 text-sm uppercase hover:border-b'>
        <Link href={"/"}>Home</Link>
        </li>
        <li className='ml-10 text-sm uppercase hover:border-b'>
        <Link href={"/"}>About</Link>
        </li>
        <li className='ml-10 text-sm uppercase hover:border-b'>
        <Link href={"/"}>Skills</Link>
        </li>
        <li className='ml-10 text-sm uppercase hover:border-b'>
        <Link href={"/"}>Projects</Link>
        </li>
        <li className='ml-10 text-sm uppercase hover:border-b'>
        <Link href={"/"}>Contact</Link>
        </li>
      </ul>
      <div className="md:hidden">
        <AiOutlineClose/>
      </div>
      </div> 
    </div>
  );
};

export default Navbar;
