import {
  Code2,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiFigma,
  SiVercel,
} from "react-icons/si";

export const tabs = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    color: "coffee",
    description:
      "Building responsive, accessible, and high-performance user interfaces with modern frontend technologies.",

    skills: [
      {
        name: "React",
        subtitle: "Component Architecture",
        icon: SiReact,
      },
      {
        name: "Next.js",
        subtitle: "Full-stack React Framework",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        subtitle: "Type-safe JavaScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        subtitle: "ES6+",
        icon: SiJavascript,
      },
      {
        name: "Tailwind CSS",
        subtitle: "Utility-first CSS",
        icon: SiTailwindcss,
      },
      {
        name: "HTML5",
        subtitle: "Semantic Markup",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
        subtitle: "Modern Styling",
        icon: SiCss,
      },
      {
        name: "Framer Motion",
        subtitle: "Animations",
        icon: SiFramer,
      },
    ],
  },

  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "coffee",
    description:
      "Developing secure APIs and scalable backend services with the MERN stack.",

    skills: [
      {
        name: "Node.js",
        subtitle: "JavaScript Runtime",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        subtitle: "Backend Framework",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        subtitle: "NoSQL Database",
        icon: SiMongodb,
      },
      {
        name: "REST APIs",
        subtitle: "API Development",
      },
      {
        name: "JWT Authentication",
        subtitle: "Authentication",
      },
    ],
  },

  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    color: "coffee",
    description:
      "Tools that support my workflow from development to deployment.",

    skills: [
      {
        name: "Git",
        subtitle: "Version Control",
        icon: SiGit,
      },
      {
        name: "GitHub",
        subtitle: "Code Collaboration",
        icon: SiGithub,
      },
      {
        name: "Docker",
        subtitle: "Containerization",
        icon: SiDocker,
      },
      {
        name: "Postman",
        subtitle: "API Testing",
        icon: SiPostman,
      },
      {
        name: "Figma",
        subtitle: "UI Design",
        icon: SiFigma,
      },
      {
        name: "Vercel",
        subtitle: "Deployment",
        icon: SiVercel,
      },
      {
        name: "VS Code",
        subtitle: "Development Environment",
      },
    ],
  },

  {
    id: "learning",
    title: "Currently Exploring",
    icon: Sparkles,
    color: "coffee",
    description:
      "Continuously learning new technologies to build more scalable, reliable, and production-ready applications.",

    skills: [
      {
        name: "Advanced Next.js",
        subtitle: "App Router & Optimization",
      },
      {
        name: "DevOps",
        subtitle: "Deployment Workflow",
      },
      {
        name: "CI/CD",
        subtitle: "Automation",
      },
      {
        name: "AWS Cloud",
        subtitle: "Cloud Computing",
      },
      {
        name: "System Design",
        subtitle: "Architecture Fundamentals",
      },
    ],
  },
];