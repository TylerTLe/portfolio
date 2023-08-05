"use client";

import Image from "next/image";
import React from "react";
import profileImg from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-2 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt="tiller picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello! I'm Tyler.</span> I'm a{" "}
        <span className="font-bold">software development student</span> at{" "}
        <span className="underline">
          the Southern Alberta Institute of Technology. (SAIT)
        </span> {" "}
        <span className="italic">
          I am constantly seeking opportunities to learn and expand my
          knowledge.
        </span>
      </motion.p>
      
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay:0.1,
        }}
      >
        <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"> 
          Contact me here 
          <BsArrowRight />
        </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full" href="">Download CV <HiDownload /></a>
        <a href="" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full"><BsLinkedin /> </a>
        <a href="" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]"><FaGithubSquare /> </a>
      </motion.div>
    </section>
  );
}
// 1:50:33
