"use client";

import Image from "next/image";
import React from "react";
import profileImg from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
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

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>Hi, my name is</span> <span className="font-bold">Tyler.</span>{" "}
        <br />{" "}
        <div className="mt-2">
          <div id="outer" className=" flex flex-col">
            <h1 className="text-5xl">
              <div className="inner h-12 uppercase overflow-hidden">
                  <span className="relative text-[#e6af2e]">
                    Back-End Developer <br/>
                    Product Owner <br/>
                    Software Developer <br/>
                    Front-End Developer <br/>
                  </span>
              </div>
            </h1>
          </div>
          <span className="italic"> from Calgary, Alberta</span>
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-white/10 text-black shadow-xl  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:bg-gray-400/40 active:scale-105 transition dark:text-gray-200 dark:border-gray-500 dark:shadow-slate-600 dark:shadow-md"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>

        <a
          className="bg-white/10 text-black  shadow-xl px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:text-gray-200 dark:border-gray-500 dark:shadow-slate-600 dark:shadow-md hover:bg-gray-400/40"
          href="/CV.pdf "
          download
        >
          Download CV
          {/* Add CV FILE WHEN COMPLETE */}
          <HiDownload className="opacity-60 group-hover:translate-y-3" />
        </a>

        <a
          href="https://www.linkedin.com/in/tyler-thai-le/"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-white/10 text-black  shadow-xl p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-950 active:scale-105 transition dark:text-gray-200 dark:border-gray-500 dark:shadow-slate-600 dark:shadow-md hover:bg-gray-400/40"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/TylerTLe"
          target="_blank"
          rel="noreferrer noopener"
          className="bg-white/10 text-black  shadow-xl p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-950 active:scale-105 transition dark:text-gray-200 dark:border-gray-500 dark:shadow-slate-600 dark:shadow-md hover:bg-gray-400/40"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
