import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Send,
  Code2,
  BrainCircuit,
  Gamepad2,
  ChevronRight,
  Terminal,
  Layers3,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { personalInfo, achievements, projects } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* ── Background: dot grid + spotlight glow ── */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-dot-grid opacity-100" />
        {/* Ambient top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, hsl(212 95% 68% / 0.06) 0%, transparent 70%)",
          }}
        />
        {/* Bottom accent */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, hsl(265 89% 70% / 0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/*  HERO SECTION                              */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative w-full max-w-5xl mx-auto px-6 pt-40 pb-28 md:pt-52 md:pb-36">
        {/* Availability badge */}
        <div
          className="status-badge mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
          </span>
          Currently open to opportunities
        </div>

        {/* Avatar */}
        <div
          className="mb-9 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "80ms", animationFillMode: "forwards" }}
        >
          <Avatar className="w-16 h-16 border-2 border-border/60 shadow-lg">
            <AvatarImage
              src="/pik400x400.jpg"
              alt={personalInfo.name}
              className="object-cover"
            />
            <AvatarFallback className="text-sm font-display font-bold bg-muted">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Main headline */}
        <h1
          className="font-display font-black tracking-tighter mb-7 opacity-0 animate-fade-in-up text-balance"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            lineHeight: 1.02,
            animationDelay: "160ms",
            animationFillMode: "forwards",
          }}
        >
          <span className="text-foreground">Engineering</span>
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.35) 100%)",
            }}
          >
            the future.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg md:text-xl text-muted-foreground mb-11 max-w-xl font-light leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "240ms", animationFillMode: "forwards" }}
        >
          Hey, I&apos;m{" "}
          <span className="text-foreground font-medium">
            {personalInfo.name.split(" ").slice(-1)[0]}
          </span>
          . An award-winning engineer specializing in scalable architectures,
          intelligent anomaly models, and fluid data interfaces.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "320ms", animationFillMode: "forwards" }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-black/20 cursor-pointer"
          >
            Explore Work
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href={personalInfo.resumeUrl}
            target="_blank"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border/60 bg-card/50 text-foreground text-sm font-medium hover:bg-card hover:border-border/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Download className="h-4 w-4" />
            Download Résumé
          </Link>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-6 flex items-center gap-2 text-xs text-muted-foreground/40 font-mono tracking-widest uppercase opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
        >
          <div className="w-4 h-[1px] bg-muted-foreground/30" />
          Scroll
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider w-full max-w-5xl mx-auto" />

      {/* ═══════════════════════════════════════════ */}
      {/*  EXPERTISE BENTO GRID                      */}
      {/* ═══════════════════════════════════════════ */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 md:py-28">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 max-w-[48px] bg-border/60" />
          <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
            Expertise
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {/* ── Card 1: Main philosophy (2×2) ── */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl border border-border/50 bg-card overflow-hidden group card-lift cursor-default">
            {/* Grain overlay */}
            <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top left, hsl(212 95% 68% / 0.07) 0%, transparent 60%)",
              }}
            />

            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end">
              <Terminal className="h-7 w-7 mb-8 text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors duration-300" />
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-balance mb-5 tracking-tighter leading-[1.1]">
                Beyond syntax —{" "}
                <span className="text-muted-foreground">
                  architecting scale.
                </span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-lg font-light">
                My foundation in competitive engineering — ICPC National Top 12,
                GDGoC 2nd — forged a discipline for optimizing computational
                bottlenecks securely. I don't just write code; I architect resilient models.
              </p>
            </div>
          </div>

          {/* ── Card 2: Systems & Web ── */}
          <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden group card-lift p-7 flex flex-col justify-between cursor-default">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, hsl(212 95% 68% / 0.08) 0%, transparent 60%)",
              }}
            />
            <Code2 className="h-6 w-6 text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
            <div className="relative z-10">
              <h3 className="font-display font-semibold text-lg text-foreground tracking-tight mb-2">
                Systems &amp; Web
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Full-stack edge computing with Next.js, distributed databases,
                and resilient microservices architectures.
              </p>
            </div>
          </div>

          {/* ── Card 3: Machine Learning ── */}
          <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden group card-lift p-7 flex flex-col justify-between cursor-default">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, hsl(265 89% 70% / 0.07) 0%, transparent 60%)",
              }}
            />
            <BrainCircuit className="h-6 w-6 text-purple-400/60 group-hover:text-purple-400 transition-colors duration-300 relative z-10" />
            <div className="relative z-10">
              <h3 className="font-display font-semibold text-lg text-foreground tracking-tight mb-2">
                Machine Learning
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                High-precision anomaly detection frameworks and predictive data pipelines engineered into secure ecosystems.
              </p>
            </div>
          </div>

          {/* ── Card 4: Game Dev (full width) ── */}
          <div className="md:col-span-3 relative rounded-2xl border border-border/50 bg-card overflow-hidden group card-lift p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between cursor-default">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, hsl(142 71% 45% / 0.05) 0%, transparent 60%)",
              }}
            />

            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="h-5 w-5 text-green-400/70 group-hover:text-green-400 transition-colors" />
                <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-[0.2em]">
                  Computational Logic
                </span>
              </div>
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground tracking-tighter mb-3">
                Algorithmic Integrity
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl font-light text-base">
                From constructing deterministic compilers to writing zero-dependency neural frameworks natively. My foundation ensures optimal time/space complexity and resource pooling for high-performance constraints.
              </p>
            </div>

            <div className="hidden md:flex shrink-0 w-24 h-24 items-center justify-center border border-border/30 bg-muted/30 rounded-2xl group-hover:rotate-3 transition-all duration-500 relative z-10">
              <Layers3 className="h-10 w-10 text-foreground/20 group-hover:text-green-400/60 transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider w-full max-w-5xl mx-auto" />

      {/* ═══════════════════════════════════════════ */}
      {/*  SELECTED WORK                             */}
      {/* ═══════════════════════════════════════════ */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20 md:py-28">
        {/* Header row */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-[48px] bg-border/60" />
              <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
                Selected Work
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-foreground">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
          >
            All Projects
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Project list — Linear-style rows alternating with cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, i) => (
            <Link
              href={`/projects#${project.id}`}
              key={project.id}
              className={`group relative rounded-2xl border border-border/50 bg-card overflow-hidden card-lift cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  i === 0
                    ? "aspect-[21/9]"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  priority={i === 0}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  data-ai-hint={project.imageHint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ExternalLink className="h-3.5 w-3.5 text-foreground" />
                </div>
              </div>

              {/* Info */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-semibold text-xl tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground/50 pt-1 shrink-0">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile all projects */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 cursor-pointer"
          >
            All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="section-divider w-full max-w-5xl mx-auto" />

      {/* ═══════════════════════════════════════════ */}
      {/*  CTA / CONTACT SECTION                     */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative w-full max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(212 95% 68% / 0.05) 0%, transparent 65%)",
          }}
        />

        {/* Sparkle icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-border/50 bg-card mb-8 mx-auto">
          <Sparkles className="h-5 w-5 text-muted-foreground/60" />
        </div>

        <h2 className="font-display font-black tracking-tighter mb-6 text-balance relative z-10"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
            lineHeight: 1.05,
          }}
        >
          Let&apos;s build something
          <br />
          <span className="text-muted-foreground">extraordinary.</span>
        </h2>

        <p className="text-muted-foreground text-lg font-light mb-11 max-w-md mx-auto leading-relaxed relative z-10">
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s
          create something remarkable together.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/20 cursor-pointer"
          >
            Get in touch
            <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-card/50 transition-all duration-200 cursor-pointer"
          >
            View my work
          </Link>
        </div>
      </section>
    </div>
  );
}
