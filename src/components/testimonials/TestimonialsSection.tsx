"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

/* ============================================
   Testimonials Data
   ============================================ */
const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Senior Developer",
    content:
      "I had been struggling to find a position that matched my skill set in the states. The placement team at NetNova really took the time to understand my background and connected me with an amazing role in just three weeks.",
    rating: 5,
    type: "US Citizen",
  },
  {
    name: "Vihaan Patel",
    role: "UX/UI Designer",
    content:
      "Relocating and finding a suitable job seemed impossible until I found this consultancy. Their global reach and dedicated support staff made the entire transition smooth and stress-free. I highly recommend them to anyone seeking international opportunities.",
    rating: 5,
    type: "Japan Citizen",
  },
  {
    name: "Diya Reddy",
    role: "Data Scientist",
    content:
      "The personalized career counseling I received was outstanding. They helped me highlight my predictive modeling experience, which ultimately caught the eye of a top-tier tech firm. A truly phenomenal experience from start to finish.",
    rating: 5,
    type: "African Citizen",
  },
  {
    name: "Advik Singh",
    role: "Cloud Architect",
    content:
      "What impressed me most was their deep understanding of the tech industry. They didn't just send me random job postings; every interview they arranged was a perfect fit for my career goals.",
    rating: 5,
    type: "Canadian Citizen",
  },
  {
    name: "Ananya Gupta",
    role: "Product Manager",
    content:
      "From the initial resume review to the final salary negotiation, the team was incredibly supportive. They gave me the confidence to aim higher, and it paid off with a fantastic new position.",
    rating: 5,
    type: "Spanish Citizen",
  },
];

/* ============================================
   Testimonials Section Component
   Embla Carousel with autoplay
   ============================================ */
export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Avoid calling setState synchronously during the effect cycle
    const rafId = requestAnimationFrame(() => {
      onSelect();
    });

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => { 
      cancelAnimationFrame(rafId);
      emblaApi.off("select", onSelect); 
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section-padding bg-[#FBF6E8] relative overflow-hidden" aria-label="Success stories">
      {/* Background */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#1E3A8A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] rounded-full bg-[#07162B]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_4px_15px_rgba(30, 58, 138,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] animate-pulse" />
            Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#07162B] mb-6 font-[family-name:var(--font-geist-sans)] tracking-tight">
            What <span className="gradient-text">People Say</span> About Us
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            Hear from candidates and employers who found success with NetNova Technologies.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6 py-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 pl-6"
                >
                  <div className="group relative bg-gradient-to-br from-[#F0F4F8] to-[#E2EAF4] rounded-3xl p-8 border border-[#1E3A8A]/10 h-full flex flex-col shadow-xl shadow-[#1E3A8A]/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)]">
                    {/* Hover slide background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#07162B] to-[#1E3A8A] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                    <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#D9B24C] to-[#FBF6E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    {/* Quote Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FBF6E8] border border-[#1E3A8A]/10 flex items-center justify-center mb-6 group-hover:bg-[#D9B24C] group-hover:border-[#D9B24C] transition-all duration-500 relative z-10">
                      <Quote className="w-6 h-6 text-[#1E3A8A] group-hover:text-[#07162B] transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <p className="text-base text-[#475569] leading-relaxed flex-1 mb-8 relative z-10 group-hover:text-[#CBD5E1] transition-colors duration-500">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6 relative z-10">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#D9B24C] fill-[#D9B24C]" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-[#94A3B8]/20 group-hover:border-[#94A3B8]/10 transition-colors duration-500">
                      <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[#FBF6E8] font-bold shadow-sm group-hover:bg-[#D9B24C] group-hover:text-[#07162B] transition-colors duration-500">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base font-bold text-[#07162B] mb-0.5 group-hover:text-[#FBF6E8] transition-colors duration-500">{testimonial.name}</p>
                        <p className="text-sm text-[#1E3A8A] group-hover:text-[#94A3B8] transition-colors duration-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-[#94A3B8]/30 flex items-center justify-center bg-[#FBF6E8] hover:bg-[#1E3A8A] hover:border-[#1E3A8A] hover:text-[#FBF6E8] text-[#475569] transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex ? "w-8 bg-[#1E3A8A] shadow-sm" : "w-2.5 bg-[#94A3B8]/20 hover:bg-[#94A3B8]/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-[#94A3B8]/30 flex items-center justify-center bg-[#FBF6E8] hover:bg-[#1E3A8A] hover:border-[#1E3A8A] hover:text-[#FBF6E8] text-[#475569] transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
