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
    name: "Priya Sharma",
    role: "Software Engineer at TCS",
    content:
      "NetNova transformed my job search. Within two weeks of registering, I had three interview calls and landed my dream role. Their team genuinely cares about candidate success.",
    rating: 5,
    type: "Candidate",
  },
  {
    name: "Rahul Verma",
    role: "HR Director, Wipro",
    content:
      "We've partnered with NetNova for our campus recruitment drives and bulk hiring needs. Their candidate quality and turnaround time is exceptional. A truly reliable recruitment partner.",
    rating: 5,
    type: "Employer",
  },
  {
    name: "Ananya Devi",
    role: "Data Analyst at Infosys",
    content:
      "The career guidance and resume review services helped me pivot into data analytics. NetNova's counselors understood my strengths and matched me perfectly.",
    rating: 5,
    type: "Candidate",
  },
  {
    name: "Vikram Singh",
    role: "CEO, TechStart Solutions",
    content:
      "Finding qualified tech talent was always a challenge until we discovered NetNova. Their AI-matching technology and dedicated support have been game-changers for our team.",
    rating: 5,
    type: "Employer",
  },
  {
    name: "Meena Kumari",
    role: "Marketing Manager at HCL",
    content:
      "I was stuck in a career rut for two years. NetNova's interview preparation and guidance helped me land a role with a 60% salary hike. Forever grateful!",
    rating: 5,
    type: "Candidate",
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
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
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
            <div className="flex gap-6 -ml-0">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] pl-0 first:ml-0"
                >
                  <div className="group relative bg-[#FBF6E8] rounded-3xl p-8 border border-[#94A3B8]/20 h-full flex flex-col hover:border-[#1E3A8A]/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(30, 58, 138,0.1)]">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-[#FBF6E8]/80 mb-6 relative z-10" />

                    {/* Content */}
                    <p className="text-base text-[#475569] leading-relaxed flex-1 mb-8 relative z-10 group-hover:text-[#07162B] transition-colors duration-300">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6 relative z-10">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#D9B24C] fill-[#D9B24C]" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-[#94A3B8]/20">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1E3A8A] to-[#07162B] flex items-center justify-center text-[#FBF6E8] font-bold shadow-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base font-bold text-[#07162B] mb-0.5">{testimonial.name}</p>
                        <p className="text-sm text-[#1E3A8A]">{testimonial.role}</p>
                      </div>
                      <span className="ml-auto text-xs px-3 py-1.5 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 text-[#1E3A8A] font-medium">
                        {testimonial.type}
                      </span>
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
