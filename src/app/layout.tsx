import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apadana Linux",
  description:
    "Apadana Linux is a modern GNU/Linux distribution based on Parch Linux, focused on simplicity, performance, and user control.",
  keywords: [
    "Apadana Linux",
    "Parch Linux",
    "Arch Linux based",
    "GNU/Linux",
    "Linux distribution",
    "Open Source",
    "FOSS",
    "Linux desktop",
    "Free Software",
  ],
  authors: [{ name: "Apadana Linux Team" }],
  openGraph: {
    title: "Apadana Linux",
    description:
      "A modern GNU/Linux distribution based on Parch Linux, built for simplicity, performance, and freedom.",
    url: "https://apadanalinux.org",
    siteName: "Apadana Linux",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apadana Linux",
    description:
      "A modern GNU/Linux distribution based on Parch Linux, focused on performance and user freedom.",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
