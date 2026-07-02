import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

/* ============================================
   Services Page SEO Metadata
   ============================================ */
export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NetNova Technologies' comprehensive placement services — job placement, resume review, career counseling, corporate recruitment, talent acquisition, and more.",
  keywords: [
    "Job Placement Services",
    "Resume Review",
    "Career Counseling",
    "Corporate Recruitment",
    "Talent Acquisition",
    "Interview Preparation",
    "Campus Recruitment",
  ],
  openGraph: {
    title: "Services | NetNova Technologies",
    description: "Comprehensive placement and recruitment services for candidates and employers.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
