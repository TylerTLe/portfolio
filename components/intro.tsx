"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import profileImg from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.90,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Home")
    }
  }, [inView, setActiveSection])


  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0">
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

      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello! I'm Tyler.</span> I'm a{" "}
        <span className="font-bold">Full-Stack Developer </span> currently attending{" "}
        
        <span className="underline">
          the Southern Alberta Institute of Technology. (SAIT)
        </span> {" "}
        <span className="italic">
          I am constantly seeking opportunities to learn and expand my
          knowledge.
        </span>
      </motion.h1>
      
      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay:0.1,
        }}
      >
        <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"> 
          Contact me here 
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>

        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:text-gray-950 transition cursor-pointer border border-black/10" href="/CV.pdf " download>
          Download CV 
          {/* Add CV FILE WHEN COMPLETE */}
          <HiDownload className="opacity-60 group-hover:translate-y-3"/></a>

        <a href="https://www.linkedin.com/in/tyler-thai-le/" target="_blank" rel="noreferrer noopener" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"><BsLinkedin /></a>

        <a href="https://github.com/TylerTLe" target="_blank" rel="noreferrer noopener" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"><FaGithubSquare /></a>

      </motion.div>
    </section>
  );
}
