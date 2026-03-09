"use client";

import { useRef } from "react";
import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
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
      <div className="min-h-[140vh] flex items-center">
        <motion.div style={{ opacity, y, scale }} className="w-full">
          <ContainerPage>
            <Avatar />

            <h2 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
              Toda mi{" "}
              <span className="font-bold text-emerald-400">
                trayectoria profesional
              </span>
            </h2>

            <TimeLine />
          </ContainerPage>
        </motion.div>
      </div>
    </section>
  );
};

export default About;