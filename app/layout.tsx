import type { Metadata } from 'next';
import { Inter, Noto_Sans } from 'next/font/google';
import './globals.css';

const noto_sans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Maria's Cleaning Service",
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* iOS Safari */}
      <meta name='theme-color' content='#ffd587' />
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}
