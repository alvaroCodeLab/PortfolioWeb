import { motion } from "framer-motion";

interface Node {
  top: string;
  left: string;
}

const CircuitLines = ({ nodes }: { nodes: Node[] }) => {
  const lines = [];

  for (let i = 0; i < nodes.length - 1; i++) {
    const start = nodes[i];
    const end = nodes[i + 1];

    lines.push(
      <motion.div
        key={i}
        className="absolute bg-linear-to-b from-emerald-500/50 to-purple-500/40"
        style={{
          left: start.left,
          top: start.top,
          width: "2px",
          height: `calc(${parseInt(end.top) - parseInt(start.top)}%)`,
        }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 1 + Math.random() * 1.5,
          repeat: Infinity,
        }}
      />
    );

    lines.push(
      <motion.div
        key={`${i}-h`}
        className="absolute bg-linear-to-r from-emerald-500/50 to-purple-500/40"
        style={{
          top: end.top,
          left: start.left,
          width: `calc(${parseInt(end.left) - parseInt(start.left)}%)`,
          height: "2px",
        }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 1 + Math.random() * 1.5,
          repeat: Infinity,
          delay: 0.3,
        }}
      />
    );
  }

  return <>{lines}</>;
};

export default CircuitLines;