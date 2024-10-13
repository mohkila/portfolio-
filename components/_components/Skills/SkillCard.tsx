"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    // Remove percent from type definition if not needed
  };
};

const SkillCard = ({ skill }: Props) => {
  const { title, image } = skill; // Remove percent from destructuring
  return (
    <Tilt>
      <div
        className="bg-blue-900 rounded-lg p-6 duration-300 
      text-center
      transition-all cursor-pointer hover:bg-blue-700"
      >
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-cover mx-auto"
        />
        <h1>{title}</h1>
      </div>
    </Tilt>
  );
};

export default SkillCard;
