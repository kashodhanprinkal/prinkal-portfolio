import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import { Caveat } from "next/font/google";

export const metadata = {
title: "Prinkal Kashodhan | Full Stack Software Developer",

description:
  "I'm Prinkal Kashodhan, a Full Stack Software Developer passionate about transforming ideas into modern, scalable, and high-performance digital experiences. Explore my projects, skills, and software development journey.",
  verification: {
    google: "Z4T7kg-qTEAYobLC4B14y0NLSbKHaemDgn99vWfMLiQ",
  },
};

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prinkal Kashodhan",
  jobTitle: "Full Stack Software Developer",
  url: "https://prinkal-code.netlify.app/",
  email: "mailto:kashodhanprinkal@gmail.com",
  sameAs: [
    "https://github.com/kashodhanprinkal",
    "https://www.linkedin.com/in/prinkal-kashodhan/",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "REST APIs",
    "Git",
    "GitHub",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Web Development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={caveat.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}