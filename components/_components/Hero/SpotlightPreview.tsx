import React from "react";

import { Spotlight } from "@/components/ui/Spotlight";
import { BaseInfo } from "@/Data/data";

export function SpotlightPreview() {
  return (
    <div
      className="h-[100vh] text-text-center items-center  z-[-5]   w-full rounded-md flex md:items-center 
    md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="  text-4xl md:text-7xl capitalize font-bold text-center
         bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 
         
         text-bg"
        >
          {BaseInfo.name} <br /> is the new trend.
        </h1>

        <h1
          className="text-bg text-3xl  sm:text-4xl items-center
            pitalize md:text-4xl lg:text-5xl  font-bold
            md:leading-[3.5rem]  max-w-lg text-center mx-auto  xl:leading-[4.5rem]"
        >
          {BaseInfo.position}
        </h1>
        <p className=" mt-8 font-normal text-base text-neutral-500 max-w-2xl text-center mx-auto">
          We are a dynamic web and marketing agency specializing in custom
          websites and eCommerce solutions using modern frameworks like
          React.js, Next.js, and Tailwind CSS. Our team optimizes websites for
          SEO, SEM, and digital marketing, leveraging platforms like Google Ads,
          Facebook Ads, and Google Analytics to drive organic growth and
          performance. We focus on delivering responsive, user-friendly designs
          alongside targeted advertising and comprehensive eCommerce consulting
          to help businesses succeed online.
        </p>
      </div>
    </div>
  );
}
