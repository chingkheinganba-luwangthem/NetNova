import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

/* ============================================
   Pricing Page SEO Metadata
   Protected route — not shown in navigation
   ============================================ */
export const metadata: Metadata = {
  title: "Pricing",
  description: "View NetNova Technologies pricing plans for recruitment and placement services.",
  robots: { index: false, follow: false },
};

export default function PricingPage() {
  return <PricingPageClient />;
}
