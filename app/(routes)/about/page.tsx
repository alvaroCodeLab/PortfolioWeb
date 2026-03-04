"use client";

import About from "@/components/About";
import { motion } from "framer-motion";
import Link from "next/link";

const overlayVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <motion.div
        className="fixed inset-0 z-40 bg-gradient-to-br from-[#071023]/[0.95] via-[#09202a]/[0.95] to-[#041017]/[0.95] backdrop-blur-sm"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Link href="/" className="text-sm text-emerald-300 mb-4 inline-block">
            Volver al inicio
          </Link>
          <About />
        </div>
      </motion.div>
    </div>
  );
}
