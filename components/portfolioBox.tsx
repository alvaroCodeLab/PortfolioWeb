"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    techs?: string[];
  };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { title, image, urlDemo, urlGithub, techs } = data;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative p-4 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90 backdrop-blur-lg rounded-2xl shadow-[0_10px_25px_rgba(16,185,129,0.3)] border border-slate-700/40 group overflow-hidden flex flex-col justify-between"
    >
      {/* Contenido superior (imagen + título + techs) */}
      <div className="flex-1 flex flex-col">
        <div className="relative w-full h-52 mb-4 rounded-xl overflow-hidden border border-slate-700/20 shadow-lg group-hover:brightness-105 transition-[transform,brightness] duration-400">
          <Image
            src={image}
            alt={`Proyecto ${title}`}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-400 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-white/5 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl" />
        </div>

        <h3 className="mb-3 text-xl font-extrabold text-emerald-400 drop-shadow-lg">
          {title}
        </h3>

        {techs && techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold text-slate-100 bg-slate-700/40 border border-slate-600/40 rounded-full backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Botones siempre alineados al fondo */}
      <div className="flex gap-4 mt-2">
        <Link
          href={urlGithub}
          target="_blank"
          className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow hover:scale-105 hover:from-blue-600 hover:to-blue-400 transition-transform duration-300 relative overflow-hidden"
        >
          Github
          <span className="absolute inset-0 bg-white/10 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg" />
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-700 to-pink-600 rounded-lg shadow hover:scale-105 hover:from-purple-600 hover:to-pink-500 transition-transform duration-300 relative overflow-hidden"
        >
          Live Demo
          <span className="absolute inset-0 bg-white/10 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg" />
        </Link>
      </div>

      {/* Overlay decorativo al hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 0.15,
          background:
            "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default PortfolioBox;