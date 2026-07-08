import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LoadingProvider from "@/components/LoadingProvider";

/* ============================================
   Font Configuration
   Geist for headings, Inter for body text
   ============================================ */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* ============================================
   Global SEO Metadata
   ============================================ */
export const metadata: Metadata = {
  metadataBase: new URL("https://netnova.in"),
  title: {
    default: "NetNova Technologies — Connecting Talent With Opportunity",
    template: "%s | NetNova Technologies",
  },
  description:
    "NetNova Technologies is a premier placement consultancy connecting job seekers with verified employers worldwide. Expert career guidance, resume assistance, and fast hiring solutions.",
  keywords: [
    "Placement Consultancy",
    "Recruitment Agency",
    "Job Placement Services",
    "Career Opportunities",
    "Hiring Solutions",
    "Talent Acquisition",
    "Recruitment Experts",
    "NetNova Technologies",
  ],
  authors: [{ name: "NetNova Technologies" }],
  creator: "NetNova Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://netnova.in",
    siteName: "NetNova Technologies",
    title: "NetNova Technologies — Connecting Talent With Opportunity",
    description:
      "Premier placement consultancy connecting job seekers with verified employers. Expert career guidance and fast hiring solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NetNova Technologies - Placement Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetNova Technologies — Connecting Talent With Opportunity",
    description:
      "Premier placement consultancy connecting job seekers with verified employers.",
    images: ["/og-image.png"],
    creator: "@netnovatech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ============================================
   JSON-LD Structured Data
   Organization + Local Business schema
   ============================================ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NetNova Technologies",
  url: "https://netnova.in",
  logo: "https://netnova.in/logo.png",
  description:
    "Premier placement consultancy connecting talent with opportunity.",
  sameAs: [
    "https://linkedin.com/company/netnova",
    "https://twitter.com/netnovatech",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-646-532-0205",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
};

/* ============================================
   Root Layout
   Wraps all pages with shared UI and metadata
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBF6E8] text-[#07162B]" suppressHydrationWarning>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1E3A8A] focus:text-[#FBF6E8] focus:rounded-lg"
        >
          Skip to main content
        </a>
        <LoadingProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" />
        </LoadingProvider>
      </body>
    </html>
  );
}
