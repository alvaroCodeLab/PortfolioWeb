"use client";

import CounterServices from "@/components/counter-services";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section id="skills" className="min-h-screen pt-24 flex items-center"
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
        <p className="text-slate-400 mb-6">Resumen de habilidades técnicas y herramientas.</p>
        <CounterServices />
      </div>
    </motion.section>
  );
};

export default Skills;
