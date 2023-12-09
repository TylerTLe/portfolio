import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pokemonImg from "@/public/pokemon.png";
import gengarImg from "@/public/gengar.png";
import airbnbImg from "@/public/airbnb.png";
import biteTrackerImg from "@/public/biteTracker.png";
import flickerImg from "@/public/flicker.png";
import nexusImg from "@/public/nexus.png";

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
      "2 year Software Development Diploma at the Southern Alberta Institute of Technology (SAIT) Learning many languages such as: Java, C#, JavaScript, Python",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Freelance website",
    location: "Calgary, AB",
    description:
      "Website built for local cannabis company All The Smoke YYC. using: JavaScript, CSS, HTML and third-party services",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },


] as const;

export const projectsData = [
  {
    title: "AirBnb clone",
    description:
      "A full-stack Airbnb clone that has many features.",
    projectLink: "https://wanderers-retreat.vercel.app",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "MongoDB", "NextAuth", "Vercel"],
    imageUrl: airbnbImg,

  },
  {
    title: "Pokemon derivative",
    description:
      "A pokemon like web game in javascript. When playing use WASD to move.",
    projectLink: "https://tylerle.me/Pokemans/",
    tags: ["JavaScript", "HTML5", "CSS3"],
    imageUrl: pokemonImg,
  },
  {
    title: "Flow fields",
    description:
      "Flow fields are a technique used in computer graphics and simulations to simulate fluid motion or create interesting visual effects.",
    projectLink: "https://tylerle.me/Flowfield/",
    tags: ["JavaScript", "HTML5", "CSS3"],
    imageUrl: gengarImg,
  },
  {
    title: "BiteTracker",
    description:
      "Calorie Tracking App, an intuitive and user-friendly mobile application that helps you monitor your daily calorie intake and manage your dietary goals.",
    projectLink: "https://github.com/TylerTLe/Phase4MobileApp",
    tags: ["React Native", "Android Studio"],
    imageUrl: biteTrackerImg,
  },
  {
    title: "Flicker",
    description:
      "An all in one streaming service, combining all of your favorite streaming services into one place.",
    projectLink: "https://www.figma.com/proto/0twL84SRHxXP1KfgDUODSS/Group-6?node-id=449-34734&starting-point-node-id=449%3A34734",
    tags: ["Figma", "UX/UI Design"],
    imageUrl: flickerImg,
  },
  {
    title: "Nexus",
    description:
      "E-commerce web app where users, can sell anything, anywhere. Deployed on Vercel.",
    projectLink: "https://nexus-e-commerce.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Oauth"],
    imageUrl: nexusImg,
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
  "MongoDB",
  "Oracle SQL",
  "mySQL",
  "Vercel",
  "Python",
  "C#",
  ".NET",
  "Azure",
  "Java",
  "React-native",
  "PL/SQL",
  "Data Structures",
  "Algorithms",
  "AWS",
  "Figma",
  "UX/UI Design",

] as const;

export const learningData = [
  "Java",
  "React-native",
  "PL/SQL"
] as const;
