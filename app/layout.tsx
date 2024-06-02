import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import MobileHeader from "@/components/header/mobile/MobileHeader";

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Call Me ASH",
  description: "Web dev portfolio for Ashneil Sakhrani",
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
