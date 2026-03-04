"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section id="contact" className="min-h-screen pt-24 flex items-center"
      initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="text-slate-400 mb-6">Puedes colocar aquí un formulario de contacto o información para conectar.</p>

        <form className="grid gap-4 max-w-md">
          <input className="p-3 rounded bg-slate-800" placeholder="Nombre" />
          <input className="p-3 rounded bg-slate-800" placeholder="Correo" />
          <textarea className="p-3 rounded bg-slate-800" placeholder="Mensaje" rows={6} />
          <button className="px-4 py-2 bg-emerald-500 rounded w-fit">Enviar</button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
