import { motion } from "framer-motion";

interface Node {
  top: string;
  left: string;
}

interface Props {
  nodes: Node[];
  color: "emerald" | "purple";
  side: string;
}

const CircuitNodes = ({ nodes, color, side }: Props) => {
  return (
    <>
      {nodes.map((node, i) => (
        <motion.div
          key={`${side}-${i}`}
          className={`absolute w-3 h-3 rounded-full bg-${color}-400 shadow-lg`}
          style={{ top: node.top, left: node.left }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1.5 + Math.random(),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </>
  );
};

export default CircuitNodes;