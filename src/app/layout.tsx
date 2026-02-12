import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script';

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
        {/* Calendly: resource hints for faster widget load */}
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.css" as="style" crossOrigin="anonymous" />
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" crossOrigin="anonymous" />
        {/* Load Calendly CSS globally so the booking page renders instantly */}
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <JsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        {/* Load Calendly script early so route transitions don't pay the script download/execute cost */}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="beforeInteractive" />
        {/* Pre-warm Calendly so the booking page iframe/data is already hot when navigating */}
        <Script id="calendly-prewarm" strategy="afterInteractive">
          {`
            (function () {
              var CAL_URL = 'https://calendly.com/ssabed00/30min';

              function warm() {
                try {
                  if (!window || !document) return;

                  // Skip for low-data / save-data users
                  if (navigator && navigator.connection && navigator.connection.saveData) return;

                  // Only warm once
                  if (window.__rcfCalendlyWarmed) return;
                  window.__rcfCalendlyWarmed = true;

                  // If Calendly isn't ready yet, try again shortly
                  if (!window.Calendly || !window.Calendly.initInlineWidget) {
                    setTimeout(warm, 250);
                    return;
                  }

                  var host = document.createElement('div');
                  host.id = '__calendly_prewarm';
                  host.style.position = 'fixed';
                  host.style.left = '-9999px';
                  host.style.top = '0';
                  host.style.width = '1px';
                  host.style.height = '1px';
                  host.style.overflow = 'hidden';
                  host.style.opacity = '0';
                  host.style.pointerEvents = 'none';
                  document.body.appendChild(host);

                  window.Calendly.initInlineWidget({
                    url: CAL_URL,
                    parentElement: host,
                    prefill: {},
                  });

                  // Also warm the HTML via an opaque fetch (best-effort)
                  try { fetch(CAL_URL, { mode: 'no-cors', credentials: 'omit' }); } catch (e) {}
                } catch (e) {
                  // noop
                }
              }

              if ('requestIdleCallback' in window) {
                window.requestIdleCallback(warm, { timeout: 2000 });
              } else {
                setTimeout(warm, 1200);
              }
            })();
          `}
        </Script>
        <SpeedInsights />
      </body>
    </html>
  );
}
