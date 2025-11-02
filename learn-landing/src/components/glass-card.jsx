import { cn } from "@/lib/utils";

export function GlassCard({ title, subtitle, icon, children, className }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-xl transition",
        "hover:border-accent/60 hover:shadow-glow",
        className
      )}
    >
      <div className="absolute -right-28 -top-28 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition duration-500 group-hover:bg-accent/20" />
      <div className="absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-moss/10 blur-3xl transition duration-500 group-hover:bg-moss/20" />
      <div className="relative flex items-start gap-4">
        {icon && <div className="text-3xl text-accent">{icon}</div>}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cream/60">{subtitle}</p>
          <h3 className="mt-2 font-display text-3xl italic text-cream">{title}</h3>
        </div>
      </div>
      {children && <div className="relative mt-6 text-sm text-cream/70">{children}</div>}
    </div>
  );
}
