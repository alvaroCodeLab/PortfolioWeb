"use client";

import { motion } from "framer-motion";
import ContactBackground from "./ContactBackground";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen pt-24 flex items-center relative overflow-hidden bg-slate-950"
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Mantener el efecto del cursor */}
      <ContactBackground />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Ponte en <span className="text-emerald-500">contacto</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Si tienes una idea, proyecto o simplemente quieres hablar sobre
            desarrollo web, estaré encantado de escucharte.
          </p>
        </div>

        {/* Formulario de contacto */}
        <ContactForm />
      </div>
    </motion.section>
  );
};

export default Contact;