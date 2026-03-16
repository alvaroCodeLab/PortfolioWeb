"use client";

import { useRef } from "react";
import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  // Nodos de circuito: coordenadas laterales
  const leftNodes = [
    { top: "15%", left: "2%" },
    { top: "40%", left: "3%" },
    { top: "65%", left: "2%" },
    { top: "85%", left: "1%" },
  ];

  const rightNodes = [
    { top: "20%", left: "97%" },
    { top: "45%", left: "96%" },
    { top: "70%", left: "97%" },
    { top: "90%", left: "95%" },
  ];

  // Función para dibujar líneas entre nodos (estilo PCB)
  const renderLines = (nodes: { top: string; left: string }[]) => {
    const lines = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      const start = nodes[i];
      const end = nodes[i + 1];
      lines.push(
        <motion.div
          key={i}
          className="absolute bg-linear-to-b from-emerald-500/50 to-purple-500/40"
          style={{
            left: start.left,
            top: start.top,
            width: "2px",
            height: `calc(${parseInt(end.top) - parseInt(start.top)}%)`,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1 + Math.random() * 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      );
      // Línea horizontal para dar ángulo 90°
      lines.push(
        <motion.div
          key={`${i}-h`}
          className="absolute bg-linear-to-r from-emerald-500/50 to-purple-500/40"
          style={{
            top: end.top,
            left: start.left,
            width: `calc(${parseInt(end.left) - parseInt(start.left)}%)`,
            height: "2px",
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 1 + Math.random() * 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.3,
          }}
        />
      );
    }
    return lines;
  };

  return (
    <section id="about" ref={ref} className="relative w-full pt-24 z-30">
      {/* Fondo tipo tarjeta electrónica */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Líneas entre nodos estilo PCB */}
        {renderLines(leftNodes)}
        {renderLines(rightNodes)}

        {/* Nodos laterales izquierdo */}
        {leftNodes.map((node, i) => (
          <motion.div
            key={`l-${i}`}
            className="absolute w-3 h-3 rounded-full bg-emerald-400 shadow-lg"
            style={{ top: node.top, left: node.left }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Nodos laterales derecho */}
        {rightNodes.map((node, i) => (
          <motion.div
            key={`r-${i}`}
            className="absolute w-3 h-3 rounded-full bg-purple-400 shadow-lg"
            style={{ top: node.top, left: node.left }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="min-h-[140vh] flex items-center">
        <motion.div style={{ opacity, y, scale }} className="w-full">
          <ContainerPage>
            <Avatar />

            <h2 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
              Toda mi{" "}
              <span className="font-bold text-emerald-400">
                trayectoria profesional
              </span>
            </h2>

            <TimeLine />
          </ContainerPage>
        </motion.div>
      </div>
    </section>
  );
};

export default About;