
import Link from 'next/link';
import { personalInfo, socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-10 mt-auto">
      <div className="container mx-auto max-w-screen-2xl flex flex-col md:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-muted-foreground hover:text-primary">
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
