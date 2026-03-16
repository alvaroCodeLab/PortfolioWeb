"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CircuitBackground from "./circuit-background";
import AboutContent from "./about-content";

const AboutSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <section id="about" ref={ref} className="relative w-full pt-24 z-30">
      <CircuitBackground />

      <div className="min-h-[140vh] flex items-center">
        <motion.div style={{ opacity, y, scale }} className="w-full">
          <AboutContent />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;