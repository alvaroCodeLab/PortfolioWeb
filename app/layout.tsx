import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Álvaro Serrano | Web Developer Portfolio",
  description: "Web developer portfolio of Álvaro Serrano - React, Next.js, Tailwind CSS, Framer Motion project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
