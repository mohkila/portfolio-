import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="items-center text-center flex flex-wrap justify-center space-x-10 space-y-4 text-whitefont-bold">
        <p> Home</p>
        <p> About</p>
        <p> Services</p>
        <p> Projects</p>
        <p> Reviews</p>
        <p> Contacts</p>
      </div>
      <p className="m-auto items-center   mt-16  text-opacity-30 text-white text-center">
        © 2022 dopyapp.com. All rights reserved. Created by dopyapp.com
      </p>
    </div>
  );
};

export default Footer;
