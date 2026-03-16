import CircuitLines from "./circuit-lines";
import CircuitNodes from "./circuit-nodes";

const leftNodes = [
  { top: "15%", left: "2%" },
  { top: "40%", left: "3%" },
  { top: "65%", left: "2%" },
  { top: "85%", left: "1%" },
];

const rightNodes = [
  { top: "20%", left: "97%" },
  { top: "45%", left: "96%" },
  { top: "70%", left: "97%" },
  { top: "90%", left: "95%" },
];

const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <CircuitLines nodes={leftNodes} />
      <CircuitLines nodes={rightNodes} />

      <CircuitNodes nodes={leftNodes} color="emerald" side="l" />
      <CircuitNodes nodes={rightNodes} color="purple" side="r" />
    </div>
  );
};

export default CircuitBackground;