"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = personalInfo.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-5xl gap-4 px-4 py-2.5 rounded-2xl transition-all duration-300 ease-out",
          scrolled
            ? "glass shadow-xl shadow-black/20 border border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group outline-none"
          aria-label="Muhammad Ibrahim — Home"
        >
          {/* Monogram badge */}
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center shrink-0 group-hover:opacity-80 transition-opacity">
            <span className="text-background text-xs font-bold font-display tracking-tight">
              {initials}
            </span>
          </div>
          <span className="font-display font-semibold text-sm tracking-tight hidden sm:block text-foreground/90 group-hover:text-foreground transition-colors">
            {personalInfo.name.split(" ").slice(-1)[0]}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/" && pathname === "/home");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-sm font-medium rounded-xl transition-colors duration-200 outline-none",
                  isActive
                    ? "text-foreground bg-foreground/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-[2px] rounded-full bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side: CTA + Mobile burger */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className={cn(
              "hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer",
              "bg-foreground text-background hover:bg-foreground/85 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Hire me
          </Link>

          {/* Mobile Sheet */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-8 w-8 rounded-xl border border-border/40 bg-card/50 hover:bg-card text-foreground"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-l border-border/40 bg-background/95 backdrop-blur-2xl p-6 pt-12"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href === "/" && pathname === "/home");
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                        isActive
                          ? "bg-foreground/8 text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center w-full px-4 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-foreground/85 transition-colors"
                  >
                    Hire me
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
