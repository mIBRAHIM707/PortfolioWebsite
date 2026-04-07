import Image from "next/image";
import Link from "next/link";
import {
  personalInfo,
  skillCategories,
  achievements,
  education,
} from "@/lib/data";
import {
  Award,
  GraduationCap,
  Code2,
  BrainCircuit,
  Gamepad2,
  Database,
  Cpu,
  Wrench,
  ArrowRight,
  Trophy,
  Star,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";

// Map skill category names to icons & accent colors
const categoryMeta: Record<
  string,
  { icon: React.ElementType; color: string; glow: string }
> = {
  "Languages & Core": {
    icon: Code2,
    color: "text-blue-400",
    glow: "hsl(212 95% 68% / 0.08)",
  },
  "Web & Edge": {
    icon: BrainCircuit,
    color: "text-purple-400",
    glow: "hsl(265 89% 70% / 0.08)",
  },
  "Architecture & Config": {
    icon: Database,
    color: "text-cyan-400",
    glow: "hsl(189 100% 60% / 0.08)",
  },
  "Machine Learning": {
    icon: Cpu,
    color: "text-orange-400",
    glow: "hsl(25 95% 60% / 0.08)",
  },
  "Algorithms & Logic": {
    icon: Wrench,
    color: "text-rose-400",
    glow: "hsl(0 91% 71% / 0.08)",
  },
};

const stats = [
  { value: "3rd", label: "Microsoft Club\nHackathon" },
  { value: "2nd", label: "GDGoC\nHackathon" },
  { value: "Top 12", label: "ICPC National\nPrelim" },
  { value: "4th", label: "Dean's List\nSemester" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* ── Ambient background ── */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-dot-grid opacity-100" />
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, hsl(265 89% 70% / 0.05) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, hsl(212 95% 68% / 0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6">

        {/* ════════════════════════════════════════════ */}
        {/* HERO — Profile + Intro                      */}
        {/* ════════════════════════════════════════════ */}
        <section className="pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              About
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
            {/* Left: text */}
            <div>
              <h1 className="font-display font-black tracking-tighter mb-6 text-balance"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.05 }}
              >
                Architecting
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.4) 100%)",
                  }}
                >
                  resilient systems.
                </span>
              </h1>

              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed font-light max-w-xl">
                <p>
                  I construct topologies that stand at the intersection of raw
                  computational performance and frictionless user experience. As a{" "}
                  <span className="text-foreground font-medium">Software Engineer</span>,
                  I specialize in shipping high-availability web platforms and deterministic machine learning models.
                </p>
                <p>
                  My foundational methodology was forged in high-stakes algorithmic environments—most notably securing an ICPC National Top 12 standing. This background drilled into me a rigid discipline for optimizing bottlenecks iteratively, securely, and completely autonomously.
                </p>
                <p>
                  From engineering custom deterministic compilers locally, mapping precise banking anomalies via Isolation Forests, to managing fully distributed full-stack ecosystems, I bring an unwavering execution standard.
                </p>
              </div>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { icon: MapPin, text: "Topi, Pakistan · GIKI" },
                  { icon: GraduationCap, text: "BSc Software Engineering" },
                  { icon: Calendar, text: "Class of 2027" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-border/40 bg-card/50 text-sm text-muted-foreground"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Photo card */}
            <div className="flex flex-col items-center lg:items-end gap-5">
              {/* Photo with glow border */}
              <div className="relative group">
                {/* Glow halo */}
                <div
                  className="absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, hsl(212 95% 68% / 0.12) 0%, transparent 70%)",
                  }}
                />
                {/* Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-2xl shadow-black/30 w-[260px] h-[320px] md:w-[300px] md:h-[370px]">
                  <Image
                    src="/pik400x400.jpg"
                    alt={`${personalInfo.name} — Software Engineer`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="320px"
                    priority
                  />
                  {/* Subtle gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Name badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card rounded-xl px-4 py-2.5">
                      <p className="font-display font-semibold text-sm text-foreground tracking-tight">
                        {personalInfo.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {personalInfo.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div className="status-badge">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Open to opportunities
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* STATS ROW                                    */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-border/50 bg-card p-6 text-center group card-lift overflow-hidden cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, hsl(212 95% 68% / 0.06) 0%, transparent 70%)",
                  }}
                />
                <p className="font-display font-black text-3xl md:text-4xl text-foreground tracking-tighter mb-2 relative z-10">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider leading-relaxed whitespace-pre-line relative z-10">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* SKILLS                                       */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              Technical Arsenal
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-foreground mb-12">
            What I work with
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => {
              const meta = categoryMeta[category.name] ?? {
                icon: Code2,
                color: "text-muted-foreground",
                glow: "transparent",
              };
              const Icon = meta.icon;

              return (
                <div
                  key={category.name}
                  className="relative rounded-2xl border border-border/50 bg-card p-6 group card-lift overflow-hidden cursor-default"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top right, ${meta.glow} 0%, transparent 60%)`,
                    }}
                  />

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5 relative z-10">
                    <div
                      className={`p-2 rounded-xl bg-muted/60 ${meta.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-display font-semibold text-sm tracking-tight text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="tag">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* ACHIEVEMENTS + EDUCATION (2-col)             */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">

            {/* ── Achievements Timeline ── */}
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="h-px flex-1 max-w-[48px] bg-border/60" />
                <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
                  Recognition
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-foreground mb-10">
                Milestones
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-border/60 via-border/30 to-transparent" />

                <div className="space-y-5">
                  {achievements.map((achievement, i) => (
                    <div
                      key={achievement.id}
                      className="relative flex gap-5 group"
                    >
                      {/* Dot */}
                      <div className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full border border-border/60 bg-card flex items-center justify-center group-hover:border-border/90 group-hover:bg-muted/50 transition-all duration-300 mt-0.5">
                        <Trophy className="h-3.5 w-3.5 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
                      </div>

                      {/* Card */}
                      <div className="flex-1 rounded-2xl border border-border/40 bg-card/60 p-4 group-hover:border-border/70 group-hover:bg-card transition-all duration-300 relative overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(ellipse at top right, hsl(212 95% 68% / 0.05) 0%, transparent 60%)",
                          }}
                        />
                        <div className="flex items-start justify-between gap-3 mb-2 relative z-10">
                          <h3 className="font-display font-semibold text-sm text-foreground tracking-tight leading-snug">
                            {achievement.title}
                          </h3>
                          {achievement.year && (
                            <span className="shrink-0 text-xs font-mono text-muted-foreground/60 bg-muted/60 px-2 py-0.5 rounded-lg border border-border/40">
                              {achievement.year}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed font-light relative z-10">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Education ── */}
            <div>
              <div className="flex items-center gap-3 mb-12">
                <div className="h-px flex-1 max-w-[48px] bg-border/60" />
                <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
                  Background
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter text-foreground mb-10">
                Education
              </h2>

              <div className="space-y-5">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative rounded-2xl border border-border/50 bg-card overflow-hidden group card-lift cursor-default"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at top left, hsl(142 71% 45% / 0.05) 0%, transparent 60%)",
                      }}
                    />

                    {/* Top accent bar */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-border/80 to-transparent" />

                    <div className="p-6 relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="p-2.5 rounded-xl bg-muted/60 text-green-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground/60 bg-muted/60 px-2 py-1 rounded-lg border border-border/40 shrink-0">
                          {edu.years}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-base text-foreground tracking-tight mb-1 leading-snug">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground mb-3">
                        {edu.degree}
                      </p>
                      {edu.description && (
                        <p className="text-xs text-muted-foreground/70 leading-relaxed font-light border-t border-border/30 pt-3 mt-3">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* CTA — Next action                            */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-foreground mb-2">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground font-light">
              Let&apos;s connect — I&apos;m open to internships, projects, and
              collaborations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-card/50 transition-all duration-200 cursor-pointer"
            >
              See my projects
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
