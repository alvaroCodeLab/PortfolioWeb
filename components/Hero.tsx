"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import CoverParticles from "@/components/cover-particles";

const Hero = () => {
  const goToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section id="home" className="relative z-20 w-full min-h-screen flex items-center pt-24"
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <CoverParticles />
      <div className="grid w-full max-w-7xl mx-auto px-6 md:grid-cols-2 items-center">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/home5.png"
            alt="Programming 3D illustration"
            width={700}
            height={700}
            priority
            className="w-full max-w-md md:max-w-lg"
          />
        </div>

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mw-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes pensarlo, <br />
            <TypeAnimation
              sequence={["puedes programarlo", 1000, "puedes optimizarlo", 1000, "puedes implementarlo", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-emerald-400"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Desarrollador web junior con formación en programación y sistemas, motivado por aprender,
            crecer profesionalmente y aportar valor en entornos colaborativos.
          </p>

          <div className="flex items-center gap-3 md:justify-start md:gap-10">
            <button onClick={goToProjects} className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
              Ver Proyectos
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
