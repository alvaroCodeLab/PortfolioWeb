"use client";

import { useRef, useEffect, useState } from "react";
import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/TransitionPage";
import { motion, AnimatePresence } from "framer-motion";

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    if (!section || !overlay) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      let progress = 1 - rect.top / vh;
      progress = clamp(progress, 0, 1);

      const intersects = rect.top < vh && rect.bottom > 0;
      if (!intersects) {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        overlay.style.transform = `translateY(100%)`;
        overlay.style.pointerEvents = "none";
        overlay.style.backdropFilter = "none";
        return;
      }

      const visibleThreshold = 0.02;
      if (progress <= visibleThreshold) {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        overlay.style.transform = `translateY(100%)`;
        overlay.style.pointerEvents = "none";
        return;
      }

      overlay.style.visibility = "visible";
      overlay.style.backdropFilter = "blur(6px)";
      const translateY = (1 - progress) * 100;
      const opacity = Math.pow(progress, 1.6) * 0.95;
      overlay.style.transform = `translateY(${translateY}%)`;
      overlay.style.opacity = String(opacity);
      overlay.style.pointerEvents = progress > 0.98 ? "auto" : "none";
      overlay.style.willChange = "transform, opacity";
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const projectsEl = document.getElementById("projects");
    if (!projectsEl) return;
    let lastTrigger = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const now = Date.now();
          if (entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight && now - lastTrigger > 1200) {
            lastTrigger = now;
            setShowCurtain(true);
            setTimeout(() => setShowCurtain(false), 1000);
          }
        });
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: 0 }
    );
    obs.observe(projectsEl);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-transparent pt-24 z-30"
    >
      <TransitionPage />

      {/* Overlay */}
      <div
        ref={overlayRef}
        aria-hidden
        className="fixed inset-0 z-40 bg-linear-to-br from-[#02040a] via-[#05121a] to-[#02060b]"
        style={{
          transform: "translateY(100%)",
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
          willChange: "transform, opacity",
          backdropFilter: "none",
        }}
      />

      {/* Curtain */}
      <AnimatePresence>
        {showCurtain && (
          <motion.div
            key="about-curtain"
            aria-hidden
            className="fixed inset-0 z-50 bg-[#00060a]"
            initial={{ translateY: "-100%", opacity: 0 }}
            animate={{ translateY: ["-100%", "0%", "100%"], opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, times: [0, 0.25, 1], ease: "easeInOut" }}
            onAnimationComplete={() => setShowCurtain(false)}
            style={{ pointerEvents: "none" }}
          />
        )}
      </AnimatePresence>

      {/* Wrapper para el sticky que permite scroll fluido */}
      <div style={{ height: "160vh" }}> {/* altura ajustable según contenido */}
        <motion.div
          className="sticky top-0 z-50 flex flex-col items-center w-full h-screen justify-center"
          initial={{ opacity: 0, y: 120, scale: 0.96, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ContainerPage>
            <Avatar />
            <h2 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
              Toda mi <span className="font-bold text-emerald-400">trayectoria profesional</span>
            </h2>
            <TimeLine />
          </ContainerPage>
        </motion.div>
      </div>
    </section>
  );
};

export default About;