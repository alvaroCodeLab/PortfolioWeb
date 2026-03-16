"use client";

import { motion } from "framer-motion";

const ProjectsReveal = () => {
  return (
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 2.8, ease: "easeInOut" }}
    >
      {/* capa que tapa la sección */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-emerald-700 via-emerald-500 to-transparent"
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2.8, ease: "easeInOut" }}
      />

      {/* glow extra */}
      <motion.div
        className="absolute inset-0 bg-emerald-500/20 blur-3xl"
        initial={{ opacity: 0.8 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default ProjectsReveal;