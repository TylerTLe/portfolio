"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
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
        I'm a <span className="font-bold">software development student</span> at
        the{" "}
        <span className="underline">
          Southern Alberta Institute of Technology (SAIT)
        </span>
        . I am constantly seeking opportunities to learn and expand my
        knowledge. All projects are built from the ground up, from planning and
        designing all the way to solving real-life problems with code. I am
        looking for a full time position as a{" "}
        <span className="font-bold">software developer</span> or{" "}
        <span className="font-bold">DevOps developer</span> at a company where I
        can grow and contribute to the success of the team. Whether working
        individually or as part of a team, I am always looking for new
        challenges and opportunities to apply my skills and make a positive
        impact.
      </p>

      <p>
        when I'm not coding, I enjoy playing video games, going to the gym, and
        learning the guitar. I also enjoy{" "}
        <span className="font-medium">continuously learning new things</span>{" "}
        and <span className="font-medium">improving my self development</span>
      </p>
    </motion.section>
  );
}
