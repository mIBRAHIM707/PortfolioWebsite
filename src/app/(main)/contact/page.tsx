import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { personalInfo, socialLinks } from "@/lib/data";
import {
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    description: "Best for detailed inquiries",
    color: "text-blue-400",
    glow: "hsl(212 95% 68% / 0.07)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Topi, KPK · Pakistan",
    href: null,
    description: "GIKI University campus",
    color: "text-green-400",
    glow: "hsl(142 71% 45% / 0.07)",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    description: "Usually much faster",
    color: "text-purple-400",
    glow: "hsl(265 89% 70% / 0.07)",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      {/* ── Ambient background ── */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-dot-grid opacity-100" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, hsl(212 95% 68% / 0.06) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, hsl(265 89% 70% / 0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6">

        {/* ════════════════════════════════════════════ */}
        {/* HEADER                                       */}
        {/* ════════════════════════════════════════════ */}
        <section className="pt-36 pb-16 md:pt-44 md:pb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-border/60" />
            <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em]">
              Contact
            </span>
            <div className="h-px w-12 bg-border/60" />
          </div>

          <h1
            className="font-display font-black tracking-tighter text-foreground mb-5 text-balance"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", lineHeight: 1.05 }}
          >
            Let&apos;s work
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.35) 100%)",
              }}
            >
              together.
            </span>
          </h1>
          <p className="text-muted-foreground font-light text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Open to internships, freelance projects, collaborations, and just
            interesting conversations. Drop me a line.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* CONTACT METHODS ROW                          */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const inner = (
                <div
                  className="relative rounded-2xl border border-border/50 bg-card p-6 group card-lift overflow-hidden cursor-default h-full"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${method.glow} 0%, transparent 60%)`,
                    }}
                  />
                  <div className={`mb-4 ${method.color} group-hover:scale-110 transition-transform duration-300 w-fit`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest mb-1 relative z-10">
                    {method.label}
                  </p>
                  <p className="font-display font-semibold text-sm text-foreground tracking-tight mb-1 relative z-10 break-all">
                    {method.value}
                  </p>
                  <p className="text-xs text-muted-foreground/60 font-light relative z-10">
                    {method.description}
                  </p>
                  {method.href && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/60" />
                    </div>
                  )}
                </div>
              );

              return method.href ? (
                <Link key={method.label} href={method.href} className="block cursor-pointer">
                  {inner}
                </Link>
              ) : (
                <div key={method.label}>{inner}</div>
              );
            })}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="section-divider" />

        {/* ════════════════════════════════════════════ */}
        {/* FORM + SOCIAL (2-col)                        */}
        {/* ════════════════════════════════════════════ */}
        <section className="py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">

            {/* ── Contact Form ── */}
            <div className="relative rounded-2xl border border-border/50 bg-card overflow-hidden">
              {/* Subtle top glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, hsl(212 95% 68% / 0.04) 0%, transparent 50%)",
                }}
              />
              <div className="relative z-10 p-7 md:p-9">
                <div className="flex items-center gap-3 mb-7">
                  <MessageSquare className="h-4 w-4 text-muted-foreground/60" />
                  <h2 className="font-display font-semibold text-lg tracking-tight text-foreground">
                    Send a message
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* ── Social + Info sidebar ── */}
            <div className="flex flex-col gap-5">
              {/* Social links */}
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <h3 className="font-display font-semibold text-sm tracking-tight text-foreground mb-5">
                  Find me on
                </h3>
                <div className="flex flex-col gap-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl border border-border/30 bg-muted/30 hover:border-border/70 hover:bg-muted/60 transition-all duration-200 cursor-pointer"
                    >
                      <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.name}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-muted-foreground group-hover:translate-x-0.5 transition-all ml-auto" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <div className="relative rounded-2xl border border-border/50 bg-card p-6 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at bottom right, hsl(142 71% 45% / 0.06) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="status-badge mb-4 w-fit">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    Currently available
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground tracking-tight mb-2">
                    Open to opportunities
                  </h3>
                  <p className="text-xs text-muted-foreground/70 font-light leading-relaxed">
                    Actively seeking internships, part-time roles, and exciting
                    freelance projects. Let&apos;s build something great.
                  </p>
                </div>
              </div>

              {/* Quick email CTA */}
              <Link
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-between gap-3 px-5 py-4 rounded-2xl border border-border/50 bg-card hover:border-border/80 hover:bg-muted/30 transition-all duration-200 cursor-pointer"
              >
                <div>
                  <p className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest mb-0.5">
                    Quick email
                  </p>
                  <p className="text-sm font-medium text-foreground break-all">
                    {personalInfo.email}
                  </p>
                </div>
                <Mail className="h-5 w-5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
