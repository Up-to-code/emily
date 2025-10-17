import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Email Builder - Create Professional Email Templates Instantly",
  description: "Design stunning email campaigns with AI. Create professional email templates in seconds. No coding required.",
  keywords: [
    "email builder",
    "AI email",
    "email template",
    "email marketing",
    "campaign builder",
    "email designer",
    "marketing automation",
  ],
  authors: [{ name: "Emailly" }],
  creator: "Emailly",
  publisher: "Emailly",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emailly.com",
    title: "AI Email Builder - Create Professional Email Templates Instantly",
    description: "Design stunning email campaigns with AI. Create professional email templates in seconds. No coding required.",
    siteName: "Emailly",
    images: [
      {
        url: "https://emailly.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emailly - AI Email Builder",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Email Builder - Create Professional Email Templates Instantly",
    description: "Design stunning email campaigns with AI. Create professional email templates in seconds.",
    images: ["https://emailly.com/og-image.jpg"],
    creator: "@emailly",
  },
  alternates: {
    canonical: "https://emailly.com",
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" data-theme="emailly">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1E90FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Emailly - AI Email Builder",
              "description": "Create professional email templates with AI instantly",
              "url": "https://emailly.com",
              "applicationCategory": "Business",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "100",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}