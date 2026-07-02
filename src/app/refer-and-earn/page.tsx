import type { Metadata } from "next";
import ReferPageClient from "./ReferPageClient";

/* ============================================
   Refer & Earn Page SEO Metadata
   ============================================ */
export const metadata: Metadata = {
  title: "Refer & Earn",
  description:
    "Refer talented candidates to NetNova Technologies and earn exciting rewards when they get placed. Join our referral program today.",
  keywords: [
    "Refer and Earn",
    "Referral Program",
    "Job Referral Rewards",
    "NetNova Referral",
  ],
  openGraph: {
    title: "Refer & Earn | NetNova Technologies",
    description: "Refer talented candidates and earn rewards with NetNova's referral program.",
  },
};

/* JSON-LD FAQ Schema */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the referral program work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply refer a candidate using our form. When they get hired through NetNova, you receive a reward.",
      },
    },
    {
      "@type": "Question",
      name: "Who can I refer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can refer any job-seeking professional — freshers, experienced candidates, or anyone looking for new opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How much can I earn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rewards vary based on the role and placement. Contact us for current reward structures.",
      },
    },
  ],
};

export default function ReferAndEarnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ReferPageClient />
    </>
  );
}
