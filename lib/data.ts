import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioAppImg from "@/public/porto.png";
import socialmediaAppImg from "@/public/social.png";
import blogAppImg from "@/public/blog.png";
import { PiTreeStructure } from "react-icons/pi";


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
    title: "Graduated from Institute of Computer Science",
    location: "Khost, Afghanistan",
    description:
      "I completed a 2-year program in Computer Science, specializing in databases, including MySQL, SQL Server, and PL/SQL.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "DSA Enthusiast & Problem Solver",
    location: "Online (Udemy, YouTube)",
    description:
      "I am currently focused on Data Structures and Algorithms (DSA), continuously improving my problem-solving skills and deepening my understanding of algorithms. My goal is to strengthen my knowledge for real-world applications and prepare for software engineering roles.",
    icon: React.createElement(PiTreeStructure),
    date: "2024 - Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Online (Udemy, YouTube)",
    description:
      "I am also skilled in full-stack development, working with React, Next.js, TypeScript, Tailwind, Prisma, and MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;


export const projectsData = [
  {
    // title: "CorpComment",
    // description:
    //   "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    // tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    // imageUrl: corpcommentImg,
    title: "Blog App",
    description:
      "I built a full-stack blog application where users can create, edit, and delete blog posts. The app includes user authentication and a simple commenting system.",
    tags: ["React", "Next.js", "Prisma", "MySQL", "Tailwind"],
    imageUrl:blogAppImg,

  },
  {
    title: "Social Media App",
    description:
      "I developed a social media application where users can post updates, like, and comment on posts. It includes features like user profiles, a news feed, and direct messaging.",
    tags: ["React", "Next.js", "Prisma", "SQL Server", "Tailwind"],
    imageUrl: socialmediaAppImg,
  },
  {
    title: "Portfolio App",
    description:
      "I created a personal portfolio app to showcase my skills, projects, and resume. The app features an interactive UI and integrates with a contact form.",
    tags: ["React", "Next.js", "Prisma", "Tailwind"],
    imageUrl:portfolioAppImg,
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
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
