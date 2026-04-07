import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import {
  Github,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  Folder,
} from "lucide-react";

// Project accent colors for visual variety
const projectAccents = [
  {
    glow: "hsl(212 95% 68% / 0.07)",
    tag: "hsl(212 95% 68% / 0.12)",
    tagText: "hsl(212 95% 72%)",
    border: "hsl(212 95% 68% / 0.25)",
    label: "Featured",
  },
  {
    glow: "hsl(265 89% 70% / 0.07)",
    tag: "hsl(265 89% 70% / 0.12)",
    tagText: "hsl(265 89% 75%)",
    border: "hsl(265 89% 70% / 0.25)",
    label: "Web App",
  },
  {
    glow: "hsl(142 71% 45% / 0.07)",
    tag: "hsl(142 71% 45% / 0.12)",
    tagText: "hsl(142 71% 55%)",
    border: "hsl(142 71% 45% / 0.25)",
    label: "Full-Stack",
  },
  {
    glow: "hsl(25 95% 60% / 0.07)",
    tag: "hsl(25 95% 60% / 0.12)",
    tagText: "hsl(25 95% 65%)",
    border: "hsl(25 95% 60% / 0.25)",
    label: "Internship",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* ── Ambient background ── */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-dot-grid opacity-100" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, hsl(212 95% 68% / 0.05) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6">

        {/* ════════════════════════════════════════════ */}
        {/* HEADER                                       */}
        {/* ════════════════════════════════════════════ */}
        <section className="pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              Work
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1
                className="font-display font-black tracking-tighter text-foreground mb-4 text-balance"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.05 }}
              >
                Selected
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.4) 100%)",
                  }}
                >
                  Projects.
                </span>
              </h1>
              <p className="text-muted-foreground font-light text-base md:text-lg max-w-xl leading-relaxed">
                A curated set of academic, personal, and professional builds —
                spanning systems engineering, web development, and ML.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="px-3 py-1.5 rounded-xl border border-border/40 bg-card/50 text-xs font-mono text-muted-foreground">
                {projects.length} projects
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* FEATURED CARD — first project (large)        */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          {(() => {
            const project = projects[0];
            const accent = projectAccents[0];
            return (
              <div
                id={project.id}
                className="group relative rounded-2xl border overflow-hidden card-lift"
                style={{ borderColor: "hsl(var(--border) / 0.5)" }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${accent.glow} 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[360px] overflow-hidden bg-muted/20">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                    {/* Featured badge */}
                    <div
                      className="absolute top-4 left-4 px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                      style={{
                        background: accent.tag,
                        color: accent.tagText,
                        border: `1px solid ${accent.border}`,
                      }}
                    >
                      {accent.label}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-card p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
                          01
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                      </div>

                      <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-foreground mb-4 leading-tight">
                        {project.title}
                      </h2>

                      <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6">
                        {project.description}
                      </p>

                      {/* Role */}
                      <div className="mb-6 pb-6 border-b border-border/30">
                        <p className="text-xs text-muted-foreground/50 font-mono uppercase tracking-widest mb-1">
                          Role
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          {project.role}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <p className="text-xs text-muted-foreground/50 font-mono uppercase tracking-widest mb-3">
                          Key Highlights
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((f) => (
                            <span key={f} className="tag">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                            style={{
                              background: accent.tag,
                              color: accent.tagText,
                              border: `1px solid ${accent.border}`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-muted/40 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-muted/70 transition-all duration-200 cursor-pointer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      )}
                      {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
                        <Link
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-all duration-200 cursor-pointer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* REMAINING PROJECTS GRID                      */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px flex-1 max-w-[48px] bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              More Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(1).map((project, i) => {
              const accent = projectAccents[(i + 1) % projectAccents.length];
              const index = i + 2; // display number

              return (
                <div
                  key={project.id}
                  id={project.id}
                  className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden flex flex-col card-lift cursor-default"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                    style={{
                      background: `radial-gradient(ellipse at top right, ${accent.glow} 0%, transparent 60%)`,
                    }}
                  />

                  {/* Project image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/20 shrink-0">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                    {/* Type badge */}
                    <div
                      className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-mono font-medium"
                      style={{
                        background: accent.tag,
                        color: accent.tagText,
                        border: `1px solid ${accent.border}`,
                      }}
                    >
                      {accent.label}
                    </div>

                    {/* GitHub icon hover overlay */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <ArrowUpRight className="h-3.5 w-3.5 text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 relative z-10">
                    {/* Number + title row */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-display font-semibold text-base tracking-tight text-foreground leading-snug group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground/40 shrink-0 pt-0.5">
                        0{index}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tag">+{project.technologies.length - 4}</span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-5 pb-5 border-b border-border/30">
                      <p className="text-xs text-muted-foreground/40 font-mono uppercase tracking-widest mb-2">
                        Role
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        {project.role}
                      </p>
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border/50 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-all duration-200 cursor-pointer"
                        >
                          <Github className="h-3.5 w-3.5" />
                          GitHub
                        </Link>
                      )}
                      {!project.githubUrl && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border/30 text-xs font-mono text-muted-foreground/40 cursor-default">
                          Private
                        </span>
                      )}
                      {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
                        <Link
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-foreground text-background text-xs font-medium hover:bg-foreground/85 transition-all duration-200 cursor-pointer"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* CTA — GitHub profile                         */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at bottom right, hsl(212 95% 68% / 0.05) 0%, transparent 60%)",
              }}
            />
            {/* Folder icon decoration */}
            <div className="absolute top-6 right-8 opacity-5">
              <Folder className="h-32 w-32 text-foreground" />
            </div>

            <div className="relative z-10">
              <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-foreground mb-2">
                Want to see more?
              </h2>
              <p className="text-muted-foreground font-light text-base max-w-md">
                Explore the rest of my open-source work, experiments, and
                contributions on GitHub.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="https://github.com/mIBRAHIM707"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-semibold hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer"
              >
                <Github className="h-4 w-4" />
                View GitHub
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-muted/30 transition-all duration-200 cursor-pointer"
              >
                Hire me
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
