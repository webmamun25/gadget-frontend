import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers/Providers";
import Header from "@/Components/shared/Header/Header";
import Footer from "@/Components/shared/Footer/Footer";
import Navbar from "@/Components/shared/Navbar/Navbar";
import Banner from "@/Components/shared/Banner/Banner";


const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heldro",
  description:
    "Welcome to Heldro – where innovation meets imagination in the dynamic realm of technology, offering a thrilling journey through the latest trends and groundbreaking discoveries in the world of tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Navbar />
        
        
        <div className="min-h-screen">
          <Providers>
          {children}
          </Providers>
       
          </div>
       
        <Footer />
      </body>
    </html>
   
  );
}
