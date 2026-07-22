// Image-free visual placeholder. Used across the demo instead of real photos.
export function Placeholder({
  label,
  className = "",
  labelClassName = "",
}: {
  label?: string;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div
      aria-hidden
      className={`flex items-center justify-center bg-gradient-to-br from-layout/10 via-layout/5 to-layout/15 ${className}`}
    >
      {label && (
        <span
          className={`px-4 text-center text-xs font-bold uppercase tracking-wide text-main-300 ${labelClassName}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
