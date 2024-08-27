import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import MobileHeader from "@/components/header/mobile/MobileHeader";

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Call Me ASH",
  description: "Web dev portfolio for Ashneil Sakhrani",
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  keywords: "portfolio, javascript, developer, typescript, frontend",
  openGraph: {
    title: "Call Me ASH",
    description: "Web dev portfolio for Ashneil Sakhrani",
    url: "https://www.callmeash.com",
    type: "website",
    images:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Me ASH",
    description: "Web dev portfolio for Ashneil Sakhrani",
    images:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>
        <Header />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
