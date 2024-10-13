import React from "react";
import SectionHeading from "../SectionHeading";
import { skills } from "./stackinfo";

const Stack = () => {
  return (
    <div className="pt-16 pb-16 bg-[#090605] text-white">
      <SectionHeading>Our Stack</SectionHeading>
      <div className="w-[90%] lg:w-[80%] mx-auto  grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
        {skills.map((category, index) => (
          <div key={index} className="relative group">
            {/* Hidden background that will show on hover */}

            {/* Main content card */}
            <div
              className="relative z-10 space-y-6 bg-[#16070354] p-10 text-center
            hover:bg-[#6d332395] hover:border-white hover:border-2 hover:rounded-3xl transition-all duration-300 ease-in-out
            rounded-3xl border border-gray-800"
            >
              <h2 className="text-2xl font-semibold">{category.title}</h2>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-2"
                  >
                    <img
                      className="w-12 h-12 object-contain"
                      src={skill.image}
                      alt={skill.name}
                    />
                    <p className="text-center text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
