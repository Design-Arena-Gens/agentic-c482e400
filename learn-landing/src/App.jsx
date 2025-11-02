import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { GlassCard } from "@/components/glass-card";
import { Marquee } from "@/components/marquee";
import { OrbitVisual } from "@/components/orbit-visual";
import { Spotlight } from "@/components/spotlight";

const principles = [
  {
    title: "Shed outdated rituals",
    subtitle: "phase 01",
    body: "We work with your leadership to disentangle legacy practices, mutualize tacit knowledge, and author new learning charters that unlock sustainable change.",
  },
  {
    title: "Learn by rebuilding",
    subtitle: "phase 02",
    body: "Studios, labs, and immersive simulations foster curiosity. We co-design curricula that stretch comfort zones while honoring human pace and climate realities.",
  },
  {
    title: "Scale with stewardship",
    subtitle: "phase 03",
    body: "Adaptive intelligence keeps teams aligned, while impact dashboards evidence progress across ecological, social, and cultural dimensions.",
  },
];

const solutions = [
  {
    heading: "Circular curriculum",
    copy: "Frameworks that reduce content waste, elevate lived experience, and keep pedagogy relevant across cohorts.",
  },
  {
    heading: "Faculty transformation",
    copy: "Multi-track upskilling journeys that fold in reflective practice, mentorship systems, and climate-positive leadership.",
  },
  {
    heading: "Learning analytics",
    copy: "Signal-rich observatories translating classroom data into strategic foresight for rapid iteration.",
  },
  {
    heading: "Student ecosystems",
    copy: "Hybrid communities blending digital studios, micro-fellowships, and real-world challenges across regions.",
  },
];

const marqueeItems = [
  "unlearn to reimagine",
  "sustainable intelligence",
  "design for curiosity",
  "future literacies",
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal font-sans text-cream">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-12 sm:px-10">
        <header className="relative z-10 mb-24 flex items-center justify-between">
          <div className="font-display text-2xl italic text-cream">Unlearn<span className="text-accent">.</span></div>
          <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.4em] text-cream/60 md:flex">
            <a className="hover:text-cream" href="#approach">approach</a>
            <a className="hover:text-cream" href="#solutions">solutions</a>
            <a className="hover:text-cream" href="#contact">contact</a>
          </nav>
          <button className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.4em] text-cream/70 transition hover:border-accent/60 hover:text-cream">enquire</button>
        </header>

        <main className="relative flex flex-1 flex-col gap-28">
          <section className="relative grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <Spotlight className="-z-10" />
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="space-y-10"
            >
              <p className="max-w-xl text-sm uppercase tracking-[0.5em] text-cream/60">Sustainable learning architecture</p>
              <h1 className="font-display text-6xl italic leading-[1.02] text-cream sm:text-7xl lg:text-8xl">
                Unlearning the old <span className="text-accent">status quo</span> to craft future-ready education.
              </h1>
              <p className="max-w-2xl text-lg text-cream/70">
                Learn partners with visionary institutions to design regenerative education systems. We choreograph the courage to unlearn, so every learner can flourish inside rapidly shifting worlds.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-charcoal transition hover:shadow-glow"
                >
                  begin briefing
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="#approach"
                  className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-cream/70 transition hover:border-accent/60 hover:text-cream"
                >
                  <PlayCircle className="h-5 w-5" />
                  view approach
                </a>
              </div>
            </motion.div>
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <div className="relative rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 backdrop-blur-xl">
                <OrbitVisual />
                <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/10 bg-charcoal/80 p-4 text-xs uppercase tracking-[0.3em] text-cream/60">
                  <div className="flex items-center justify-between">
                    <span>impact nodes</span>
                    <span className="text-accent">since 2020</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="approach" className="space-y-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-display text-5xl italic text-cream">A precision approach to unlearning.</h2>
              <p className="max-w-lg text-sm text-cream/60">
                Every engagement is choreographed to create regenerative loops—grounded in research, alive with experimentation, and accountable to people and planet.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {principles.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <GlassCard title={item.title} subtitle={item.subtitle}>
                    {item.body}
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="solutions" className="space-y-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-5xl italic text-cream">Solutions to activate bold learning ecosystems.</h2>
              <span className="text-xs uppercase tracking-[0.4em] text-accent">for educators & students</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.heading}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-10 backdrop-blur"
                >
                  <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
                  <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-moss/10 blur-3xl transition group-hover:bg-moss/20" />
                  <div className="relative flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-cream/50">trajectory {index + 1}</p>
                      <h3 className="mt-4 font-display text-3xl italic text-cream">{solution.heading}</h3>
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-accent" />
                  </div>
                  <p className="relative mt-6 max-w-xl text-sm text-cream/65">{solution.copy}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="rounded-[3rem] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-12 backdrop-blur-xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl space-y-6">
                <h3 className="font-display text-4xl italic text-cream">We curate living laboratories for learning.</h3>
                <p className="text-sm text-cream/70">
                  Teams co-sense emerging signals, pilot low-risk experiments, and govern change with data stories that inspire forward motion. We obsess over detail so your community can concentrate on the transformation ahead.
                </p>
                <div className="flex items-center gap-6 text-xs uppercase tracking-[0.4em] text-cream/50">
                  <span>global faculty guild</span>
                  <span>net-zero delivery</span>
                  <span>human-first ai</span>
                </div>
              </div>
              <div className="relative flex justify-center">
                <motion.div
                  className="h-48 w-48 rounded-full border border-white/10 bg-accent/20 blur-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                >
                  <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/10">
                    <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-charcoal">
                      <span className="font-display text-xl italic text-cream">Sustainable cadence</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="contact" className="space-y-8">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-display text-4xl italic text-cream">Ready to unlearn with us?</h3>
                <p className="mt-3 text-sm text-cream/60">
                  Brief the Learn studio and we will design a first lab in under ten days.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hello@unlearn.studio"
                  className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-cream/70 transition hover:border-accent/60 hover:text-cream"
                >
                  hello@unlearn.studio
                </a>
                <a
                  href="#"
                  className="rounded-full bg-white/10 px-6 py-3 text-xs uppercase tracking-[0.4em] text-cream/80 transition hover:bg-white/20"
                >
                  request dossier
                </a>
              </div>
            </div>
            <Marquee items={marqueeItems} speed={24} />
          </section>
        </main>

        <footer className="mt-20 flex flex-col items-start gap-4 text-xs uppercase tracking-[0.3em] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Learn Studio</span>
          <span>crafted on regenerative land</span>
          <span>privacy • accessibility</span>
        </footer>
      </div>
    </div>
  );
}
