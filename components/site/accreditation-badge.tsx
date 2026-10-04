import { cn } from "@/lib/utils";

export interface AccreditationBadgeProps {
  label: string;
  className?: string;
}

export function AccreditationBadge({ label, className }: AccreditationBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-verify-wash px-3 py-1 text-[12px] font-medium text-verify-green",
        className,
      )}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M2.5 6.25L4.75 8.5L9.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </span>
  );
}
