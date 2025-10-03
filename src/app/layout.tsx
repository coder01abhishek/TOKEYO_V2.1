import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoaderWrapper from "./components/ui/LoaderWrapper";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#111111',
};

export const metadata: Metadata = {
  title: "Project Tokyo - AI Companion Launchpad",
  description: "Create and interact with AI companions. Bring your character to life & go live on streaming platforms like Pump Fun, Twitch, Youtube etc.",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://4b7mwyeirrypbewg.public.blob.vercel-storage.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LoaderWrapper>
          <>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <SpeedInsights />
          </>
        </LoaderWrapper>
      </body>
    </html>
  );
}