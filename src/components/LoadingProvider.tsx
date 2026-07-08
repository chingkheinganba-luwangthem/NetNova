"use client";

import { createContext, useContext, useState, useEffect, useCallback, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

type LoadingContextType = {
  showLoading: () => void;
  navigateTo: (url: string) => void;
};

const LoadingContext = createContext<LoadingContextType>({
  showLoading: () => {},
  navigateTo: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [, startTransition] = useTransition();

  // Hide loader when pathname changes (page finished loading)
  useEffect(() => {
    if (isLoading) {
      // Ensure minimum 0.2s display
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const showLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const navigateTo = useCallback((url: string) => {
    setIsLoading(true);
    startTransition(() => {
      router.push(url);
    });
  }, [router, startTransition]);

  return (
    <LoadingContext.Provider value={{ showLoading, navigateTo }}>
      {children}
      {/* Full screen circle loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07162B]/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="flex flex-col items-center gap-5">
            <div className="w-14 h-14 rounded-full border-4 border-[#1E3A8A]/30 border-t-[#D9B24C] animate-spin" />
            <p className="text-[#D9B24C] font-bold tracking-widest uppercase text-xs animate-pulse">
              Loading...
            </p>
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
}
