export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07162B]/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-5">
        {/* Circle spinner */}
        <div className="w-14 h-14 rounded-full border-4 border-[#1E3A8A]/30 border-t-[#D9B24C] animate-spin" />
        <p className="text-[#D9B24C] font-bold tracking-widest uppercase text-xs animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
