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
  title: 'Zahradnická akademie — od kořenů k řemeslu',
  description:
    'Kompletní česká teoretická wiki pro budoucí profesionální zahradníky: botanika, půda, péče, realizace, ochrana rostlin i vedení zakázky.',
  openGraph: {
    title: 'Zahradnická akademie — od kořenů k řemeslu',
    description: 'Dvacet odborných modulů a více než sto výkladových lekcí pro budoucí profesionální zahradníky.',
    images: [{ url: '/og.png', width: 1680, height: 945, alt: 'Zahradnická akademie — rostlina s odkrytým kořenovým systémem' }],
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zahradnická akademie — od kořenů k řemeslu',
    description: 'Kompletní česká teoretická wiki pro budoucí profesionální zahradníky.',
    images: ['/og.png'],
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
