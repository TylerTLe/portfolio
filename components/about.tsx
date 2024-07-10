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
        Welcome! I’m Tyler, I'm a{" "}
        <span className="font-bold"> recent graduate</span> from the{" "}
        <span className="underline">
          Southern Alberta Institute of Technology (SAIT)
        </span>{" "}
        for
        <span className="font-bold"> Software Development </span>
        with a<span className="font-bold"> 3.8 GPA</span>. Growing up, I was
        always the go-to person for tech-related issues in my family, which kept
        me constantly engaged with new technology. A friend introduced me to
        coding, and I quickly fell in love with the problem-solving aspect and
        the immense satisfaction that comes from finding solutions.
      </p>
      <p>
        One of my proudest achievements is{" "}
        <span className="font-bold">Drill Pilot</span>, a wellbore trajectory
        graphing web app that I'm currently working on. This project stands out
        because of its technical complexity and the speed at which we were able
        to develop it. It’s incredibly rewarding to create something that not
        only amazes people but also has practical applications.
      </p>
      <p>
        I’m on the lookout for a full-time role where I can merge my enthusiasm
        for tech with a commitment to contributing meaningfully to a dynamic
        team. If you're looking for someone who is passionate about creating
        impactful software solutions, let's connect!
      </p>
    </motion.section>
  );
}
