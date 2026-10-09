import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryButton from '@/components/EnquiryButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Brahma Chaitanya Global | Import & Export of Agricultural Products',
  description:
    'Brahma Chaitanya Global - Agricultural products supplier and exporter. Premium quality green chilli, onion, potato, tomato, and organic powders for international markets.',
  keywords: [
    'Brahma Chaitanya Global',
    'Agricultural Exporter',
    'Import Export India',
    'Green Chilli Export',
    'G4 Green Chilli',
    'Onion Exporter',
    'Potato Exporter',
    'Tomato Exporter',
    'Moringa Powder',
    'Mushroom Powder',
  ],
  icons: {
    icon: '/images/logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-teal-100 selection:text-brand-navy-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <EnquiryButton />
      </body>
    </html>
  );
}
