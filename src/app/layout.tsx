import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rivercityfoundry.net'),
  title: {
    default: 'River City Foundry | Web Design & Software Development Sacramento',
    template: '%s | River City Foundry'
  },
  description: 'Premium Web Design & Software Agency in Sacramento. We build high-performance websites, custom apps, and digital tools for businesses.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'River City Foundry | Web Design & Software Development',
    description: 'Premium Web Design & Software Agency in Sacramento. We build high-performance websites, custom apps, and digital tools for businesses.',
    url: 'https://rivercityfoundry.net',
    siteName: 'River City Foundry',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'River City Foundry',
    description: 'High-Performance Web Design in Sacramento',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Calendly for faster widget load */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        {/* Prefetch Calendly script */}
        <link rel="prefetch" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <JsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
