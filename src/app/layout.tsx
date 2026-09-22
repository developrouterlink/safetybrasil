import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const optimistic = localFont({
  src: '../fonts/optimistic.ttf',
  variable: '--font-optimistic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Safety Brasil',
  description: 'Plataforma Safety Brasil',
};

export const viewport: Viewport = {
  themeColor: '#00875a',
  colorScheme: 'light',
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${optimistic.variable} font-sans`}>
      <body className="antialiased">
       {children}
      </body>
    </html>
  );
}
