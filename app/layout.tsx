import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-fallback",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DVORA Global | Study in Europe & the UK",
  description: "Personalised study-abroad guidance for Europe and the UK. Explore courses, university applications, scholarship and visa guidance with DVORA Global.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
