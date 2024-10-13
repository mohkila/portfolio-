import React from "react";
import SectionHeading from "../SectionHeading";
import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>About US</SectionHeading>
      <div
        className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center 
      mt-20"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold  ">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>

          <div className="mt-8">
            <div className=" flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
                Frontend Devlopment
              </p>
            </div>
            <div className=" flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
                Backend Devlopment
              </p>
            </div>
            <div className=" flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800  flex flex-col items-center justify-center">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
                Full Stack Devlopment
              </p>
            </div>
            <div className=" flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-yellow-600  flex flex-col items-center justify-center">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
                Ecommerce Devlopment
              </p>
            </div>
            <div className=" flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-red-800 flex flex-col items-center justify-center">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300 ">
                Marketing
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className="grid grid-cols-2 gap-16 
          items-center  lg:mx-auto
          "
          >
            <div>
              <Image
                src={"/images/experience.png"}
                alt="image"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-center">
                {aboutInfo.experience}
              </p>
              <p className="text-base sm:text-lg text-center">
                Years of Experience
              </p>
            </div>
            <div>
              <Image
                src={"/images/customer.png"}
                alt="image"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-center">{aboutInfo.client}</p>
              <p className="text-base sm:text-lg text-center">
                Satisfied Customer
              </p>
            </div>
            <div>
              <Image
                src={"/images/completed.png"}
                alt="image"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-center">{aboutInfo.project}</p>
              <p className="text-base sm:text-lg text-center">
                Completed Projects
              </p>
            </div>
            <div>
              <Image
                src={"/images/rocket.png"}
                alt="image"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-center">{aboutInfo.website}</p>
              <p className="text-base sm:text-lg text-center">
                Website Launched
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
