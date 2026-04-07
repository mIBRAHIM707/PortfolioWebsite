import Link from "next/link";
import { personalInfo, socialLinks } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/20 mt-auto">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

      <div className="container mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-semibold text-sm text-foreground tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-xs text-muted-foreground">
              &copy; {currentYear} · All rights reserved
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-border/40 bg-card/50 text-muted-foreground hover:text-foreground hover:border-border/80 hover:bg-card transition-all duration-200 cursor-pointer"
              >
                <link.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 pt-6 border-t border-border/10 flex justify-center">
          <p className="text-xs text-muted-foreground/50 font-mono tracking-wider">
            BUILT WITH NEXT.JS · DESIGNED WITH INTENTION
          </p>
        </div>
      </div>
    </footer>
  );
}
