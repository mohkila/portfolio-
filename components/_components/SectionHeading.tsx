import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

function SectionHeading({ children }: Props) {
  return (
    <div>
      <h1
        className="
    relative bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase
    -rotate-6 animate-pulse
    border-4  border-orange-500
    bg-clip-border
    "
      >
        {children}
      </h1>
    </div>
  );
}

export default SectionHeading;
