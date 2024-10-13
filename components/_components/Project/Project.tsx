import React from "react";
import SectionHeading from "../SectionHeading";
import { projectData } from "@/Data/data";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Projects</SectionHeading>
      <div
        className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 gap-12 items-center"
      >
        {projectData.map((project, i) => {
          return (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 100}
              className="p-6  rounded-lg  hover:scale-110 transition-all duration-500 bg-blue-800"
            >
              {/* <Link href={project.url} target="_blank"> */}
              <Link href={project.url} />
              <Image
                src={project.image}
                alt="project"
                width={300}
                height={300}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
