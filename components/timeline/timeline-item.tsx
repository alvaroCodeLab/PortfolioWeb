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
      className="relative py-6 pl-4 sm:pl-20 group"
      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-1 text-2xl font-bold sm:mb-0">
        {data.title}
      </h3>

      <div
        className="flex flex-col sm:flex-row items-start mb-1 relative"
      >
        {/* vertical line */}
        <span className="absolute left-3 top-0 hidden sm:block h-full w-px bg-slate-600" />
        {/* marker */}
        <span className="absolute left-2 sm:left-0 top-6 sm:top-6 w-2 h-2 bg-indigo-500 rounded-full border-4 box-content border-slate-900 transform -translate-x-1/2" />
        <time
          className="sm:static left-0 translate-y-0.5 inline-flex
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