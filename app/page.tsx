"use client";

import Header from "@/components/header";
import Hero from "@/components/Hero";
import About from "@/components/about/about-section";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative bg-[linear-gradient(90deg,rgba(5,10,30,1)_0%,rgba(0,0,0,1)_100%)] min-h-screen">
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
