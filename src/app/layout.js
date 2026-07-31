import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import { Caveat } from "next/font/google";

export const metadata = {
  title: "Prinkal Kashodhan | Full Stack Software Developer",
  description:
    "Prinkal Kashodhan — Full Stack Software Developer building fast, scalable web applications with React, Next.js, Node.js, and modern JavaScript. Explore projects, skills, and experience in full stack development.",
  verification: {
    google: "Z4T7kg-qTEAYobLC4B14y0NLSbKHaemDgn99vWfMLiQ",
  },
};

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={caveat.variable}>
      <body>
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}