"use client";

import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
// CounterServices eliminado: se quitó la sección de datos numéricos
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/TransitionPage";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section id="about" className="w-full bg-transparent pt-24"
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h2 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
          Toda mi <span className="font-bold text-emerald-400">trayectoria profesional</span>
        </h2>

        {/* Se eliminaron los contadores numéricos; la trayectoria aparece directamente */}

        <TimeLine />
      </ContainerPage>
    </motion.section>
  );
};

export default About;
