"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const ContactBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none absolute w-125 h-125 rounded-full bg-emerald-500/20 blur-[120px]"
      style={{
        left: smoothX,
        top: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
};

export default ContactBackground;