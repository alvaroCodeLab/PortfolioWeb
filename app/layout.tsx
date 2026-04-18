import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import BackgroundLayer from "@/components/BackgroundLayer";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Álvaro Serrano | Web Developer Portfolio",
  description: "Web developer portfolio of Álvaro Serrano - React, Next.js, Tailwind CSS, Framer Motion project",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased relative
        min-h-screen 
        bg-[linear-gradient(90deg,rgba(5,10,30,1)_0%,rgba(0,0,0,1)_100%)]`}
      >
        <BackgroundLayer />
        <Header />
        {children}
      </body>
    </html>
  );
}
