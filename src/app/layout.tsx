import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cjchasebusinesssolutions.com'),
  title: {
    default: "CJ Chase Business Solutions – Strategic Data & AI Leadership",
    template: "%s | CJ Chase Business Solutions",
  },
  description: "Helping organisations turn data into their most powerful asset. 20+ years guiding businesses through data strategy, programme delivery, and AI readiness.",
  openGraph: {
    type: 'website',
    siteName: 'CJ Chase Business Solutions',
    title: 'CJ Chase Business Solutions – Strategic Data & AI Leadership',
    description: 'Helping organisations turn data into their most powerful asset. 20+ years guiding businesses through data strategy, programme delivery, and AI readiness.',
    images: [
      {
        url: '/images/shutterstock_425727901_v2.jpg',
        width: 1200,
        height: 630,
        alt: 'CJ Chase Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CJ Chase Business Solutions – Strategic Data & AI Leadership',
    description: 'Helping organisations turn data into their most powerful asset.',
    images: ['/images/shutterstock_425727901_v2.jpg'],
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
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
