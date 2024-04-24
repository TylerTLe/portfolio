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
      <p className="mb-3">
        Welcome! I’m Tyler, an aspiring software engineer with a passion for
        <span className="font-bold"> innovation</span> and{" "}
        <span className="font-bold">problem-solving. </span>
        I'm a <span className="font-bold"> recent graduate</span> from the{" "}
        <span className="underline">
          Southern Alberta Institute of Technology (SAIT) for
          <span className="font-bold"> Software Development</span>
        </span>
        . I believe that the essence of software development lies in the joy of
        turning ideas into reality — a process that encompasses meticulous
        planning, creative design, and ultimately, the crafting of clean,
        efficient code. I'm on the lookout for a full-time role where I can
        merge my enthusiasm for tech with a commitment to contributing
        meaningfully to a dynamic team.
      </p>
      <p>
        Beyond code, I embrace a dynamic balance of wellness and wanderlust.
        Regular workouts sharpen my focus, travel expands my creativity, and
        playing chess hones my strategic thinking. In the spirit of constant
        growth, I'm dedicated to lifelong learning and self-improvement,
        enriching both my personal and professional life.
      </p>
    </motion.section>
  );
}
