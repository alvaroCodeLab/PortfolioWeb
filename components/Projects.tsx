"use client";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section id="projects" className="min-h-screen pt-24 flex items-center"
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
        <p className="text-slate-400">Aquí van los proyectos — importar y listar los proyectos reales según el `data`.</p>
      </div>
    </motion.section>
  );
};

export default Projects;
