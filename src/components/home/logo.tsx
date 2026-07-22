// Supreme Dealer wordmark — a simple, original brand mark for the clone.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="text-2xl font-black uppercase tracking-tight text-white lg:text-4xl">
        Supreme<span className="text-primary">.</span>
      </span>
      <span className="text-[0.6rem] font-bold uppercase tracking-[0.45em] text-primary lg:text-xs">
        Dealer
      </span>
    </span>
  );
}
