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
  metadataBase: new URL("https://dvoraglobal.com"),
  title: "Study Abroad Consultant for Europe & UK | DVORA Global",
  description: "Personalised study-abroad guidance for Europe and the UK. Get help with course selection, university applications, scholarships and student visas.",
  alternates: { canonical: "/" },
  keywords: ["study abroad consultant", "study in Europe", "study in UK", "university application guidance", "student visa guidance"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "DVORA Global",
    title: "Study Abroad Consultant for Europe & UK | DVORA Global",
    description: "Personalised guidance for students pursuing higher education in Europe and the UK.",
    images: [{ url: "/brand/social/social-card.png", width: 1200, height: 630, alt: "DVORA Global — Your Future. Beyond Borders." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Consultant for Europe & UK | DVORA Global",
    description: "Personalised guidance for students pursuing higher education in Europe and the UK.",
    images: ["/brand/social/social-card.png"],
  },
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
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "DVORA Global",
              url: "https://dvoraglobal.com",
              logo: "https://dvoraglobal.com/brand/logo-icon.png",
              email: "info@dvoraglobal.com",
              telephone: "+351912628050",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Avenida da Liberdade, 615, 1st Floor",
                postalCode: "4710-251",
                addressLocality: "Braga",
                addressCountry: "PT",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
