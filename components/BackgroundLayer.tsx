"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundLayer = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    // no-op: keep hook to ensure client behavior
  }, []);

  return (
    <motion.div
      aria-hidden
      className="site-bg-gradient"
      style={{ translateY: y }}
    />
  );
};

export default BackgroundLayer;
