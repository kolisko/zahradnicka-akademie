import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: 'Zahradnická akademie — odborná wiki',
  description:
    'Kompletní český teoretický základ pro budoucí profesionální zahradníky s detailním výkladem, pracovními protokoly a dohledatelnými zdroji.',
  openGraph: {
    title: 'Zahradnická akademie — odborná wiki',
    description: 'Detailní odborné kapitoly pro budoucí profesionální zahradníky, zpracované podle jednotného obsahového standardu.',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Zahradnická akademie — odborná wiki',
    description: 'Detailní odborné kapitoly pro budoucí profesionální zahradníky.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
