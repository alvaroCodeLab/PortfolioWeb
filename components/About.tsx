"use client";

import { useRef, useEffect, useState } from "react";
import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
// CounterServices eliminado: se quitó la sección de datos numéricos
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

      // progress: 0 when section top at bottom of viewport, 1 when section top at or above top
      let progress = 1 - rect.top / vh;
      progress = clamp(progress, 0, 1);


      // only show overlay while About intersects the viewport
      const intersects = rect.top < vh && rect.bottom > 0;
      if (!intersects) {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        overlay.style.transform = `translateY(100%)`;
        overlay.style.pointerEvents = "none";
        overlay.style.willChange = "transform, opacity";
        overlay.style.backdropFilter = "none";
        return;
      }

      // small threshold to avoid faint blur before visible
      const visibleThreshold = 0.02;
      if (progress <= visibleThreshold) {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
        overlay.style.transform = `translateY(100%)`;
        overlay.style.pointerEvents = "none";
        overlay.style.willChange = "transform, opacity";
        return;
      }

      // ensure visible when past threshold
      overlay.style.visibility = "visible";
      overlay.style.backdropFilter = "blur(6px)";

      // translate from 100% (offscreen) to 0% (fully covering)
      const translateY = (1 - progress) * 100; // percent
      // make opacity ramp up a bit smoother (quadratic) to reduce faint effect
      const opacity = Math.pow(progress, 1.6) * 0.95; // max 0.95

      // apply transforms/opacity (GPU accelerated)
      overlay.style.transform = `translateY(${translateY}%)`;
      overlay.style.opacity = String(opacity);

      // enable interactions only when fully covered
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

    // initial update
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // observe Projects section to trigger a short curtain animation when entering Projects
  useEffect(() => {
    const projectsEl = document.getElementById("projects");
    if (!projectsEl) return;

    let lastTrigger = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const now = Date.now();
          // trigger only when projects is coming into view and throttle
          if (entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight && now - lastTrigger > 1200) {
            lastTrigger = now;
            setShowCurtain(true);
            // auto-hide as safety
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
    <section id="about" ref={sectionRef} className="relative w-full bg-transparent pt-24">
      <TransitionPage />

      {/* Overlay that will slide up as user scrolls into this section (darker) */}
      <div
        ref={overlayRef}
        aria-hidden
        className="fixed inset-0 z-40 bg-gradient-to-br from-[#02040a] via-[#05121a] to-[#02060b]"
        style={{ transform: "translateY(100%)", opacity: 0, pointerEvents: "none", visibility: "hidden", willChange: "transform, opacity", backdropFilter: "none" }}
      />

      {/* Curtain animation between About -> Projects */}
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

      <motion.div
        className="relative z-50"
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContainerPage>
          <Avatar />
          <h2 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
            Toda mi <span className="font-bold text-emerald-400">trayectoria profesional</span>
          </h2>

          {/* Se eliminaron los contadores numéricos; la trayectoria aparece directamente */}

          <TimeLine />
        </ContainerPage>
      </motion.div>
    </section>
  );
};

export default About;
