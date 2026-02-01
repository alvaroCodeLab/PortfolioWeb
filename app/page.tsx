"use client";

import { motion } from "framer-motion";
import CoverParticles from "@/components/cover-particles";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen h-full bg-[linear-gradient(90.21deg,rgba(10,10,40,0.8)_-5.91%,rgba(0,30,80,0.7)_50%,rgba(0,60,120,0.6)_111.58%)] relative overflow-hidden">
        <CoverParticles />

        {/* Animación con framer motion */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Introducción
        </motion.div>
      </div>
    </main>
  );
}
