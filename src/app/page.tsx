import HeroSection from "@/components/hero/HeroSection";
import WhyChooseSection from "@/components/services/WhyChooseSection";
import ServicesPreviewSection from "@/components/services/ServicesPreviewSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ReferBanner from "@/components/refer/ReferBanner";
import PlacedInMarquee from "@/components/companies/PlacedInMarquee";

/* ============================================
   Home Page
   Landing page for NetNova Technologies
   ============================================ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <ServicesPreviewSection />
      <PlacedInMarquee />
      <TestimonialsSection />
      <ReferBanner />
    </>
  );
}
