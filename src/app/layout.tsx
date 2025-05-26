import type { Metadata } from 'next';
// import { GeistSans } from 'geist/font/sans'; // Removed
// import { GeistMono } from 'geist/font/mono'; // Removed
import { Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Toaster } from '@/components/ui/toaster';

// const geistSans = GeistSans; // Removed
// const geistMono = GeistMono; // Removed

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code', // CSS variable for Fira Code
});

export const metadata: Metadata = {
  title: 'Muhammad Ibrahim - Software Engineering Student',
  description: 'Personal portfolio of Muhammad Ibrahim, a Software Engineering student showcasing projects, skills, and achievements.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
