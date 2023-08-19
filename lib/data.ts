import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pokemonImg from "@/public/pokemon.png";
import gengarImg from "@/public/gengar.png";
import airbnbImg from "@/public/airbnb.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Development Diploma",
    location: "Calgary, AB",
    description:
      "Software Development diploma at the Southern Alberta Institute of Technology (SAIT) ",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },

] as const;

export const projectsData = [
  {
    title: "AirBnb clone",
    description:
      "A full-stack Airbnb clone that has many features such as google authentication, booking/reservation system and etc.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "MongoDB", "NextAuth"],
    imageUrl: airbnbImg,
  },
  {
    title: "Pokemon derivative",
    description:
      "A pokemon like web game in javascript",
    tags: ["JavaScript", "HTML5", "CSS3"],
    imageUrl: pokemonImg,
  },
  {
    title: "Flow fields",
    description:
      "Flow fields are a technique used in computer graphics and simulations to simulate fluid motion or create interesting visual effects.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    imageUrl: gengarImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Bash",
  "Tailwind",
  "BootStrap",
  "Prisma",
  "MongoDB",
  "Oracle SQL",
  "mySQL",
  "Vercel",
  "Python",
  "Framer Motion",,
  "C#",
  ".NET",
  "Azure"
] as const;

export const learningData = [
  "Java",
  "Angular",
  "Swift",
  "Spring",
] as const;