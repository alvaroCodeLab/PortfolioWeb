"use client";

import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import ContactInput from "./ContactInput";

const ContactForm = () => {
  return (
    <motion.div
      className="max-w-xl mx-auto p-8 rounded-2xl 
      bg-linear-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80
      backdrop-blur-xl border border-slate-700/40
      shadow-[0_10px_40px_rgba(16,185,129,0.15)]"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <form className="flex flex-col gap-6">

        <ContactInput
          icon={<User size={18} />}
          placeholder="Tu nombre"
          type="text"
        />

        <ContactInput
          icon={<Mail size={18} />}
          placeholder="Tu correo electrónico"
          type="email"
        />

        <ContactInput
          icon={<MessageSquare size={18} />}
          placeholder="Escribe tu mensaje..."
          textarea
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
          mt-2 py-3 rounded-lg font-semibold
          bg-linear-to-r from-emerald-600 to-emerald-400
          text-white shadow-lg
          hover:shadow-emerald-500/30
          transition-all duration-300"
        >
          Enviar mensaje
        </motion.button>

      </form>
    </motion.div>
  );
};

export default ContactForm;