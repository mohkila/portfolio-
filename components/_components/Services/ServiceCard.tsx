"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-blue-800">
      <Image
        src={service.icon}
        alt="image"
        width={80}
        height={80}
        className="mx-auto"
      />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-3 text-sm  opacity-75">{service.description}</p>
    </Tilt>
  );
};

export default ServiceCard;
