import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "./globals.css";


const oxanium = Oxanium({
  variable : "--font-oxanium",
  subsets: ["latin"]
});


export const metadata = {
  title: "Keep Notes",
  description: "Basic Keep Notes Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`${oxanium.variable} antialiased font-oxanium`}>
        {children}
      </body>
    </html>
  );
}
