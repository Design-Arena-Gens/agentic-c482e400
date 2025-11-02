import { cn } from "@/lib/utils";

export function Spotlight({ className }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute left-20 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute right-24 top-10 h-[360px] w-[360px] rounded-full bg-moss/25 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[520px] bg-gradient-to-t from-charcoal via-transparent" />
    </div>
  );
}
