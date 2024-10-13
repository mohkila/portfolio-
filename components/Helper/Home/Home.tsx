"use client";
import About from "@/components/_components/About/About";
import Contact from "@/components/_components/Contact/Contact";

import Project from "@/components/_components/Project/Project";
import Reviews from "@/components/_components/Reviews/Reviews";
import Services from "@/components/_components/Services/Services";
import Skills from "@/components/_components/Skills/Skills";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { SpotlightPreview } from "@/components/_components/Hero/SpotlightPreview";
import Stack from "@/components/_components/Stack/Stack";

function Home() {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);
  return (
    <div className="overflow-hidden">
      <SpotlightPreview />

      <About />
      <Stack />
      <Services />
      <Project />
      <Skills />
      <Reviews />
      <Contact />
    </div>
  );
}

export default Home;
