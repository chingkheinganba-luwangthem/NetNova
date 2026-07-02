import Link from "next/link";
import { SearchX, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-section-bg px-4">
      <div className="text-center max-w-md">
        {/* Animated Icon Container */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-2 bg-primary/20 rounded-full animate-pulse" />
          <div className="absolute inset-4 gradient-bg rounded-full shadow-xl flex items-center justify-center z-10">
            <SearchX className="w-12 h-12 text-[#FBF6E8]" />
          </div>
          {/* Decorative floating badges */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-[#FBF6E8] rounded-lg shadow border border-border/50 flex items-center justify-center animate-bounce delay-100">
            <span className="text-xs font-bold text-dark">4</span>
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#FBF6E8] rounded-lg shadow border border-border/50 flex items-center justify-center animate-bounce delay-300">
            <span className="text-xs font-bold text-dark">0</span>
          </div>
          <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#FBF6E8] rounded-lg shadow border border-border/50 flex items-center justify-center animate-bounce delay-500">
            <span className="text-xs font-bold text-dark">4</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-dark mb-4 font-[family-name:var(--font-geist-sans)]">
          Page Not Found
        </h2>
        
        <p className="text-muted mb-8 leading-relaxed">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="gradient-bg text-[#FBF6E8] px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="bg-[#FBF6E8] border-2 border-border text-dark px-6 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5"
          >
            View Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
