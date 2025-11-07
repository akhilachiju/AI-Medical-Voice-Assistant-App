import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://vcare.app'),
  title: "VCare - AI-Powered Medical Voice Assistant",
  description: "Revolutionary AI voice assistant designed for medical professionals. Streamline patient care, improve documentation, and enhance healthcare efficiency with advanced voice recognition technology.",
  keywords: ["AI medical assistant", "voice recognition", "healthcare technology", "medical documentation", "patient care", "healthcare AI"],
  authors: [{ name: "VCare Team" }],
  creator: "VCare",
  publisher: "VCare",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vcare.app",
    title: "VCare - AI-Powered Medical Voice Assistant",
    description: "Revolutionary AI voice assistant for medical professionals. Streamline patient care and improve healthcare efficiency.",
    siteName: "VCare",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "VCare - AI Medical Voice Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VCare - AI-Powered Medical Voice Assistant",
    description: "Revolutionary AI voice assistant for medical professionals.",
    images: ["/logo.png"],
  },
  icons: { 
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="bg-linear-to-b from-slate-900 to-slate-800 text-white antialiased min-h-screen">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
