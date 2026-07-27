
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <CustomCursor />
        {children}
        
      </body>
    </html>
  );
}