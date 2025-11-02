import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Marquee({ items, className, direction = "left", speed = 20 }) {
  const rendered = useMemo(() => [...items, ...items], [items]);
  return (
    <div className={cn("relative flex overflow-hidden py-6", className)}>
      <motion.div
        className="flex min-w-full gap-16"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {rendered.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="text-2xl font-semibold uppercase tracking-[0.6em] text-cream/40"
          >
            {item}
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-charcoal" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-charcoal" />
    </div>
  );
}
