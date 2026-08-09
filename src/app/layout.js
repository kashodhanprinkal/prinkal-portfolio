import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import { Caveat } from "next/font/google";

export const metadata = {
  title: "Prinkal Kashodhan | Software Developer & Full Stack Engineer",

  description:
    "Prinkal Kashodhan is a Software Developer who transforms ideas into refined digital experiences where creativity meets technology. I craft intuitive, high-performance products with seamless interactions that captivate users and leave a lasting impression. Open to freelance, remote, and hybrid opportunities across India.",

  keywords: [
  "Prinkal Kashodhan",
  "Prinkal Kashodhan Developer",
  "Software Developer",
  "Software Developer India",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "React Developer",
  "Next.js Developer",
  "JavaScript Developer",
  "Node.js Developer",
  "QA Engineer",
  "Software Tester",
  "Web Testing",
  "API Testing",
  "Freelance Developer",
  "Freelance Developer India",
  "Remote Developer India",
  "Hybrid Developer India",
  "Web Development Services",
  "Custom Web Development",
],

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