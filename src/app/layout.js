/* eslint-disable new-cap */
import "./globals.css";
// import { IM_Fell_English_SC } from "next/font/google";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const IMfell = IM_Fell_English_SC({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400"],
//   variable: "--font-imfell",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tea & Go",
  description:
    "Explore traditional Chinese board games like Go and Mahjong while savoring authentic teas!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
