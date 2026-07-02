import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

/* ============================================
   About Page SEO Metadata
   ============================================ */
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NetNova Technologies — our mission to connect talent with opportunity, our values, and the team behind our success in placement consultancy.",
  keywords: [
    "About NetNova",
    "Placement Consultancy",
    "Recruitment Agency Story",
    "Our Mission",
    "Career Experts",
  ],
  openGraph: {
    title: "About Us | NetNova Technologies",
    description: "Discover the story behind NetNova Technologies and our commitment to connecting talent with opportunity.",
    images: ["/about-team.png"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
