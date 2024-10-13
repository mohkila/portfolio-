import { navLinks } from "@/constant/constant";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
//  define the type for the props
type NavbarProps = {
  openNav: () => void;
};

function Navbar({ openNav }: NavbarProps) {
  // change bg color on scroll
  const [navbg, setNavbg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` fixed ${
        navbg ? "   bg-blue-700" : "fixed"
      } h-[12vh z-10]  w-full z-[1000000]  transition-all duration-500 `}
    >
      <div
        className="flex items-center h-full justify-between  w-[95%] sm:w-[90%]
      xl:w-[80%] 2xl:w-[70%] mx-auto
      "
      >
        {/* logo */}
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="ml-[-1.5rem] sm:ml-0 p-5 animate-pulse transition  duration-500  "
        />
        {/* nav  Links*/}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8 ">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id} className="nav_link">
                {link.label}
              </Link>
            ))}
          </div>
          {/* button */}
          <div className="flex items-center space-x-4 ">
            <Link href={"https://wa.me/31633302221 "} target="_blank">
              <button
                className="md:px-10 md:py-3 px-8 py-3 text-blue-800
              font-semibold bg-white rounded-full shadow-lg
              hover:bg-blue-300 hover:text-white 
              transition-all duration-300 ease-in-out
              "
              >
                Contact us
              </button>
            </Link>
            {/* hamburger  menu */}
            <div className="">
              <HiBars3BottomRight
                onClick={openNav}
                className="w-8 h-8 cursor-pointer 
              lg:hidden
              text-white text-2xl "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
