"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <span className="mb-3"> I'm a
        <span className="font-bold"> Recent graduate</span> from the{" "}
        <span className="underline">
          Southern Alberta Institute of Technology (SAIT)
        </span>{" "}
        for
        <span className="font-bold"> Software Development </span>
        with a<span className="font-bold"> 3.8 GPA</span>.
        <p>
          My strengths lie in both front-end and back-end development, and I
          thrive on learning new technologies and improving my skills.
        </p>
        <p>Explore my work and feel free to connect with me!</p>
      </span>
    </motion.section>
  );
}
