import { motion } from "framer-motion";

const nodes = [
  { label: "Educators", radius: 160, angle: 20 },
  { label: "Institutions", radius: 120, angle: 140 },
  { label: "Students", radius: 80, angle: 280 },
];

export function OrbitVisual() {
  return (
    <div className="relative h-[28rem] w-[28rem]">
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-20 rounded-full border border-white/10" />
      <div className="absolute inset-36 rounded-full border border-white/5" />
      <div className="absolute inset-56 rounded-full border border-white/5" />

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute left-1/2 top-1/2"
          style={{ width: 0, height: 0 }}
          initial={{ rotate: node.angle }}
          animate={{ rotate: node.angle + 360 }}
          transition={{ repeat: Infinity, duration: 26 + index * 3, ease: "linear" }}
        >
          <div
            className="flex flex-col items-center gap-2"
            style={{ transform: `translate(-50%, -${node.radius}px)` }}
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cream/60">
              {node.label}
            </span>
            <motion.div
              className="h-2 w-2 rounded-full bg-cream"
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 + index, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
