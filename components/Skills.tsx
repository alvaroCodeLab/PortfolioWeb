"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/data";
import SkillItem from "@/components/skillsItem";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        <motion.div
          className="absolute -bottom-37.5 -left-50 w-150 h-150 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            x: [-60, 60, -60],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-37.5 -right-50 w-150 h-150 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [60, -60, 60],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fade MUCHO más suave */}
        <div className="absolute bottom-0 w-full h-72 bg-linear-to-b from-transparent via-slate-950/60 to-slate-950" />

      </div>

      <div className="max-w-5xl mx-auto px-6 w-full text-center">
        <motion.h2
          className="text-2xl leading-tight text-center md:text-4xl md:mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mis <span className="font-bold text-emerald-500">Habilidades</span>
        </motion.h2>

        <motion.p
          className="text-slate-400 mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Algunas de las habilidades que aplico en mi trabajo y en el desarrollo
          de proyectos.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;