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
    <section id="skills" className="min-h-screen flex items-center pt-24">
      <div className="max-w-5xl mx-auto px-6 w-full text-center">
        <motion.h2
          className="text-2xl leading-tight text-center md:text-4xl md:mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mis <span className="font-bold text-secondary text-emerald-500">Habilidades</span>
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