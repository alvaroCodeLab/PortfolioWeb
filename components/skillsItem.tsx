"use client";

import { motion, Variants } from "framer-motion";

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

type SkillItemProps = {
  name: string;
};

const SkillItem = ({ name }: SkillItemProps) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.08, y: -4 }}
      className="px-6 py-3 rounded-full border border-purple-500 bg-slate-900/60 backdrop-blur text-sm text-slate-200 hover:border-slate-500 transition cursor-default"
    >
      {name}
    </motion.div>
  );
};

export default SkillItem;