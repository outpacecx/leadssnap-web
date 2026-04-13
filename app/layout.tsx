import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LeadsSnap — AI-Powered Lead Capture for Events",
  description:
    "Scan business cards and event badges with AI. Enrich contacts, score leads, draft follow-ups — all from your phone.",
  openGraph: {
    title: "LeadsSnap — AI-Powered Lead Capture for Events",
    description:
      "Scan business cards and event badges with AI. Enrich contacts, score leads, draft follow-ups.",
    type: "website",
    url: "https://leadssnap.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
