"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { dataPages } from "@/data";

const WordpressPages = () => {
  const Card = ({ page }: { page: (typeof dataPages)[0] }) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
    const [style, setStyle] = useState({ transform: "perspective(600px) translate3d(0,0,0)" });

    const handleMove = (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width - 0.5) * 2; // -1..1
      const py = (y / rect.height - 0.5) * 2; // -1..1

      const rotateY = px * 6; // degrees
      const rotateX = -py * 6;
      const translateX = px * 6; // px
      const translateY = py * 6;

      setStyle({ transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0)` });
    };

    const handleLeave = () => {
      setStyle({ transform: "perspective(600px) translate3d(0,0,0)" });
    };

    return (
      <motion.a
        ref={ref}
        href={page.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-6 rounded-2xl bg-linear-to-br from-slate-900/80 to-slate-800/70 backdrop-blur-md border border-slate-700/30 shadow-lg overflow-hidden"
        whileHover={{ translateY: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={style}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-extrabold text-emerald-400">{page.name}</h3>
            <p className="text-sm text-slate-300 mt-1">{page.rol} · {page.company}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {page.techs?.map((t, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-slate-700/30 text-slate-100 rounded-full border border-slate-600/30">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="ml-4 opacity-60 group-hover:opacity-100 transition-opacity">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5l7 7-7 7" stroke="#9AE6B4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </motion.a>
    );
  };

  return (
    <section id="wordpress-pages" className="relative scroll-mt-24 overflow-hidden mt-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold section-title">
          Páginas hechas con <span className="text-emerald-400">WordPress</span>
        </h2>

        <p className="text-center text-sm text-slate-300 mt-2">
          Realizadas como prácticas FCT en Nueva Generación de Programas. Diseño
          y desarrollo según presupuesto y petición del cliente.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dataPages.map((page) => (
            <Card key={page.id} page={page} />
          ))}
        </div>

        {/* Card centrado debajo de las dos páginas Wordpress */}
        <div className="mt-6 flex justify-center">
          <div className="w-full sm:w-2/3">
            <Card
              page={{
                id: 999,
                name: "Aplicación de fichajes (FCT NGPRO)",
                techs: ["React", "Vite", "Node.js", "Tailwind CSS", "SQL Server"],
                rol: "Desarrollador Fullstack",
                company: "App Fichajes",
                url: "#!",
                image: "/profile1.png",
              } as any}
            />
            <p className="text-center text-sm text-slate-400 mt-3">
              También realicé una aplicación de fichajes de empleados durante
              mis prácticas FCT en <strong>NGPRO</strong>, desarrollada con
              React + Vite, Node.js, Tailwind CSS y SQL Server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordpressPages;
