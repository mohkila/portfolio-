import React from "react";
import SectionHeading from "../SectionHeading";
import { skillsData } from "@/Data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f071c]">
      <SectionHeading> Skills</SectionHeading>
      <div
        className="w-[80%] mx-auto mt-20 grid grid-cols-2 md:grid-cols-3
      lg:grid-cols-5 gap-12 items-center"
      >
        {skillsData.map((skill, i) => {
          return (
            <div
              key={skill.id}
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 50}
            >
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
