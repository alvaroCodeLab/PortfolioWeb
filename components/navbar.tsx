"use client";

import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();

  // Controla si la animación inicial ya ocurrió
  const [hasAnimated, setHasAnimated] = useState(false);

  // Path pulsado (animación optimista)
  const [clickedPath, setClickedPath] = useState<string | null>(null);

  // Animación solo en Home y solo una vez
  const shouldAnimate = pathname === "/" && !hasAnimated;

  // Si el pathname ya coincide, ignoramos el click
  const activePath =
    clickedPath && clickedPath !== pathname
      ? clickedPath
      : pathname;

  return (
    <motion.div
      className="fixed top-4 z-40 flex items-center justify-center w-full"
      initial={shouldAnimate ? { y: -30, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (pathname === "/" && !hasAnimated) {
          setHasAnimated(true);
        }
      }}
    >
      <nav>
        <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm">
          {itemsNavbar.map((item) => {
            const isActive = activePath === item.link;

            return (
              <Link
                key={item.id}
                href={item.link}
                className="relative"
                onClick={() => setClickedPath(item.link)}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-emerald-400"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 px-3 py-2 rounded-full"
                >
                  {item.icon}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
