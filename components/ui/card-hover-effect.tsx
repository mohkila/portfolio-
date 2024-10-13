import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useState } from "react";
import SectionHeading from "../_components/SectionHeading";
// import Link from 'next/link'; // Commented out as it's unused

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    skills: { name: string; image: string }[]; // Added skills property for type safety
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Use const instead of let

  return (
    <div>
      <div className="pt-16 pb-16">
        <SectionHeading>Our Stack</SectionHeading>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item.link + idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-100/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="text-sm grid grid-cols-2 items-center text-center justify-center space-x-2">
                {item.skills.map((skill) => (
                  <div
                    key={skill.name + 3} // Changed to skill.name to avoid potential issues
                    className="flex justify-center items-center space-x-2 bg-blue-950 m-2 rounded-xl p-2"
                  >
                    <div>
                      {/* Replaced img with Next.js Image component */}
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={40} // Set a width for the image
                        height={40} // Set a height for the image
                        className="m-auto"
                      />
                      <h1 className="capitalize">{skill.name}</h1>
                    </div>
                  </div>
                ))}
              </CardDescription>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-red-300 dark:border-white/[0.4] group-hover:border-slate-200 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
