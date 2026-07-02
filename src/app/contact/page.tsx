import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

/* ============================================
   Contact Page SEO Metadata
   ============================================ */
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NetNova Technologies. Contact us for job placement, recruitment solutions, career guidance, or any inquiries.",
  keywords: [
    "Contact NetNova",
    "Placement Consultancy Contact",
    "Recruitment Agency Contact",
    "Career Guidance Inquiry",
  ],
  openGraph: {
    title: "Contact Us | NetNova Technologies",
    description: "Reach out to NetNova Technologies for placement and recruitment inquiries.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
