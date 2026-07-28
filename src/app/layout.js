
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import  { Caveat } from "next/font/google"

export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

const caveat = Caveat({
  subsets:["latin"],
  weight:["500","600","700"],
  variable:"--font-caveat"
})

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