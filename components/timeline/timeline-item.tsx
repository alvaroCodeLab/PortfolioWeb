"use client";

import { motion } from "framer-motion";

interface TimelineItemData {
  id: number;
  title: string;
  date: string;
  subtitle: string;
  description: string;
}

interface TimelineItemProps {
  data: TimelineItemData;
}

const TimelineItem = ({ data }: TimelineItemProps) => {
  return (
    <motion.div
      className="relative py-6 pl-8 sm:pl-32 group"
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-1 text-2xl font-bold sm:mb-0">
        {data.title}
      </h3>

      <div
        className="flex flex-col sm:flex-row items-start mb-1
        group-last:before:hidden before:absolute
        before:left-2 sm:before:left-0 before:h-full
        before:px-px before:bg-slate-600 sm:before:ml-26
        before:self-start before:-translate-x-1/2
        before:translate-y-3 after:absolute after:left-2
        sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-500
        after:border-4 after:box-content after:border-slate-900
        after:rounded-full sm:after:ml-26 after:-translate-x-1/2
        after:translate-y-1.5"
      >
        <time
          className="sm:absolute left-0 translate-y-0.5 inline-flex
          items-center justify-center text-xs font-semibold uppercase
          w-20 h-6 mb-3 sm:mb-0 text-yellow-200
          bg-yellow-900/40 rounded-full"
        >
          {data.date}
        </time>

        <div className="text-xl font-bold text-gray-200">
          {data.subtitle}
        </div>
      </div>

      <div className="text-slate-300">
        {data.description}
      </div>
    </motion.div>
  );
};

export default TimelineItem;