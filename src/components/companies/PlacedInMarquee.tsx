"use client";

import Image from "next/image";

const companies = [
  // 5 Large
  { name: "Google", domain: "google.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Meta", domain: "meta.com" },
  { name: "Apple", domain: "apple.com" },
  // 5 Mid
  { name: "Airbnb", domain: "airbnb.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Dropbox", domain: "dropbox.com" },
  { name: "Slack", domain: "slack.com" },
  { name: "Coinbase", domain: "coinbase.com" },
  // 7 Small
  { name: "Notion", domain: "notion.so" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Figma", domain: "figma.com" },
  { name: "Zapier", domain: "zapier.com" },
  { name: "Linear", domain: "linear.app" },
  { name: "Webflow", domain: "webflow.com" },
  { name: "Raycast", domain: "raycast.com" },
  // 1 Startup
  { name: "OpenAI", domain: "openai.com" },
];

export default function PlacedInMarquee() {
  return (
    <section className="py-16 bg-[#07162B] border-y border-[#1E3A8A]/30 overflow-hidden relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FBF6E8] tracking-tight font-[family-name:var(--font-geist-sans)]">
          Our Candidates Are <span className="text-[#D9B24C]">Placed In</span>
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right Gradients for smooth fade out */}
        <div className="absolute top-0 left-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#07162B] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#07162B] to-transparent pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {/* Render twice for seamless loop */}
          {[...companies, ...companies].map((company, i) => (
            <div key={i} className="flex flex-col items-center justify-center mx-6 w-24 gap-4 cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-2 hover:scale-110 drop-shadow-md">
                <Image
                  src={`https://logo.uplead.com/${company.domain}`}
                  alt={`${company.name} logo`}
                  width={64}
                  height={64}
                  unoptimized
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to text initials if logo fails
                    e.currentTarget.srcset = `https://ui-avatars.com/api/?name=${company.name}&background=1E3A8A&color=FBF6E8&rounded=true`;
                  }}
                />
              </div>
              <span className="text-[#94A3B8] text-xs font-semibold hover:text-[#D9B24C] transition-colors whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Signature */}
      <div className="mt-16 text-center flex items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-bold tracking-wide flex items-center gap-4 font-[family-name:var(--font-geist-sans)]">
          <span className="text-[#FBF6E8]">NetNova</span>
          <span className="text-[#1E3A8A] font-light">|</span>
          <span className="text-[#94A3B8] font-light text-xl md:text-2xl">Your Trusted Partner.</span>
        </h3>
      </div>
    </section>
  );
}
