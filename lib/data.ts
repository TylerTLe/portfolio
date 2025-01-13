import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import gengarImg from "@/public/gengar.gif";
import biteTrackerImg from "@/public/BiteTracker.png";
import nexusImg from "@/public/Nexus.png";
import drillPilot from "@/public/drillpilot.png";
import ktman from "@/public/KTM.png";

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
    title: " Back-End Developer | Product Owner , Sun-Sab",
    location: "Calgary, AB",
    description:
      "Leading a team of 5 at Sun-Sab, developing drill pilot, a wellbore trajectory web app using C# and Nextjs, implementing agile methodologies to enhance team efficiency, and utilizing D3.js for graphing solutions.",
    icon: React.createElement(CgWorkAlt),
    date: " May 2024 - Sept 2024",
  },
  {
    title: " Teaching Assistant - C#, ComIT",
    location: "Calgary, AB",
    description:
      "Conducted weekly lab sessions for a class of 15+ students, providing hands-on guidance in C# programming concepts, including object-oriented programming, LINQ, and ASP.NET. Assisted students in debugging code and understanding C# principles, such as asynchronous programming and exception handling",
    icon: React.createElement(CgWorkAlt),
    date: " Jan 2025 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "KT Mangement",
    description:
      "A app for construction companies to manage employees, assign jobs, track hours and attendance, and process payroll",
    projectLink: "",
    tags: ["Next.js", "Java", "Spring Boot", "Hibernate", "MYSQL"],
    imageUrl: ktman,
  },
  {
    title: "Drill Pilot",
    description: "Web application designed for petroleum drilling analysis",
    projectLink: "https://drillpilot.vercel.app/",
    tags: ["Next.js", "C#", "Tailwind", "SwaggerUI", "mantine"],
    imageUrl: drillPilot,
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
    title: "Nexus",
    description:
      "E-commerce web app where users, can sell anything, anywhere. Deployed on Vercel.",
    projectLink: "https://nexus-e-commerce.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Oauth"],
    imageUrl: nexusImg,
  },
  {
    title: "BiteTracker",
    description:
      "Calorie Tracking App, an intuitive and user-friendly mobile application that helps you monitor your daily calorie intake and manage your dietary goals.",
    projectLink: "https://github.com/TylerTLe/Phase4MobileApp",
    tags: ["React Native", "Android Studio"],
    imageUrl: biteTrackerImg,
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
  "Restful API",
] as const;

export const learningData = [
  "Python",
  "AI",
  "Machine Learning",
] as const;
