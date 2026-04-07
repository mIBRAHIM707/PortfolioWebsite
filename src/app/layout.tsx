import type { Metadata } from 'next';
import { Archivo, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Muhammad Ibrahim — Software Engineer',
  description:
    'Portfolio of Muhammad Ibrahim — an award-winning Software Engineering student building scalable systems, intelligent models, and fluid interfaces.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Muhammad Ibrahim — Software Engineer',
    description:
      'Award-winning developer specializing in scalable systems, intelligent models, and fluid interfaces.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
