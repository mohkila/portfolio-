import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

// define the type for the props
type NavbarProps = {
  showNav: boolean;
  closeNavHandler: () => void;
};

function MobileNavbar({ closeNavHandler, showNav }: NavbarProps) {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-[550] bg-black transition-opacity duration-300 ${
          showNav ? "opacity-90" : "opacity-0 pointer-events-none"
        } w-full h-screen`}
      >
        {/* navLinks */}
        <div
          className={` text-white  z-[999] bg-[#060209] opacity-100 transition-transform duration-500 ease-in-out transform ${navOpen} fixed    
        flex flex-col justify-center h-full w-[80%] sm:w-[60%] space-y-6
        
        `}
        >
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="nav_link  z-[999]  bg-[#060209]
               opacity-100 text-[20px] 
               hover:scale-125 hover:p-1 transition-all duration-300 ease-in-out
               ml-12 pb-2 border-white border-b-[2.5px] sm:text-[30px]"
            >
              {link.label}
            </Link>
          ))}
          {/* close button */}
          <CgClose
            className="absolute top-10 right-10 text-[30px] text-white cursor-pointer"
            onClick={closeNavHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
