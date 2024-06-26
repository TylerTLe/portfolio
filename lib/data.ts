import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import pokemonImg from "@/public/pokemon.png";
import gengarImg from "@/public/gengar.png";
import airbnbImg from "@/public/airbnb.png";
import flickerImg from "@/public/flicker.png";
import biteTrackerImg from "@/public/BiteTracker.png";
import nexusImg from "@/public/Nexus.png";
import capstone from "@/public/capstone.png";

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
    title: "Software Development Diploma 3.8 GPA",
    location: "Calgary, AB",
    description:
      "Software Development Diploma at the Southern Alberta Institute of Technology (SAIT) Learning many languages such as: Java, C#, JavaScript, Python",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Freelance website",
    location: "Calgary, AB",
    description:
      "Website built for local cannabis company All The Smoke YYC. using: JavaScript, CSS, HTML and third-party services such as SquareSpace",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Product Owner | Back-End Developer, Sun-Sab",
    location: "Calgary, AB",
    description:
      "Leading a team of 5 at Sun-Sab, developing a wellbore trajectory web app using C# and Nextjs, implementing agile methodologies to enhance team efficiency, and utilizing D3.js and Three.js for graphing solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Nexus",
    description:
      "E-commerce web app where users, can sell anything, anywhere. Deployed on Vercel.",
    projectLink: "https://nexus-e-commerce.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Oauth"],
    imageUrl: nexusImg,
  },
  {
    title: "Gen-Track Capstone",
    description:
      "Gen-Track Connect is a web app that tracks student volunteer hours for affordable housing in senior communities.",
    projectLink: "",
    tags: ["React", "Next.js", "CSS3", "Prisma", "MongoDB", "NextAuth"],
    imageUrl: capstone,
  },
  {
    title: "AirBnb clone",
    description: "A full-stack Airbnb clone that has many features.",
    projectLink: "https://wanderers-retreat.vercel.app",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Vercel",
    ],
    imageUrl: airbnbImg,
  },
  {
    title: "Pokemon derivative",
    description:
      "A pokemon like web game in javascript. When playing use WASD to move.",
    projectLink: "https://tylertle.github.io/Pokemans/",
    tags: ["JavaScript", "HTML5", "CSS3"],
    imageUrl: pokemonImg,
  },
  {
    title: "Flow fields",
    description:
      "Flow fields are a technique used in computer graphics and simulations to simulate fluid motion or create interesting visual effects.",
    projectLink: "https://tylertle.github.io/Flowfield/",
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
    projectLink:
      "https://www.figma.com/proto/0twL84SRHxXP1KfgDUODSS/Group-6?node-id=449-34734&starting-point-node-id=449%3A34734",
    tags: ["Figma", "UX/UI Design"],
    imageUrl: flickerImg,
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
  "Next.js",
  "Python",
  "C#",
  ".NET",
  "Azure",
  "Java",
  "React-Native",
  "PL/SQL",
  "Data Structures",
  "Algorithms",
  "AWS",
  "Figma",
  "UX/UI Design",
  "Docker",
  "Android Studio",
  "Software Testing",
] as const;

export const learningData = [
  "C",
  "ORMs",
  "Restful API",
  "TypeScript",
  "GraphQL",
  "Docker",
  "Kubernetes",
] as const;
