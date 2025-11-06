import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthModalProvider } from "./_components/AuthModalProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "VCare",
  description: "AI-powered voice assistant for medical professionals.",
  icons: { icon: "/logo.png" },
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
          <AuthModalProvider>
            {children}
          </AuthModalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
