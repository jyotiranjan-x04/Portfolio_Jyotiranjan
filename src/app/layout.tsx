import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Preloader } from "@/components/preloader";
import { FloatingContact } from "@/components/floating-contact";
import "./globals.css";

export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jyotiranjan Sahoo | Expert Freelance Web Developer in Brahmapur",
    template: "%s | Jyotiranjan Sahoo - Full Stack MERN Developer",
  },
  description: "Elevate your digital presence with Jyotiranjan Sahoo, a premium remote web developer in India. Specializing in modern React.js, Next.js, and complete MERN stack solutions. Hire a freelance web developer who delivers scalable, high-converting digital products.",
  keywords: [
    "Freelance React Developer in Brahmapur",
    "MERN stack developer",
    "remote web developer India",
    "freelance web developer for hire",
    "React.js developer portfolio",
    "Next.js frontend expert",
    "custom web app development India",
    "top freelance software engineer Brahmapur",
    "B2B website developer"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jyotiranjan Sahoo | Expert Freelance Web Developer in Brahmapur",
    description: "Elevate your digital presence with Jyotiranjan Sahoo, a premium remote web developer in India. Specializing in modern React.js, Next.js, and complete MERN stack solutions.",
    url: baseUrl,
    siteName: "Jyotiranjan Sahoo Portfolio",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Jyotiranjan Sahoo Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jyotiranjan Sahoo",
              "jobTitle": "Freelance React Developer",
              "url": "https://portfolio.local",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brahmapur",
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Preloader>
          {children}
          <FloatingContact />
        </Preloader>
      </body>
    </html>
  );
}
