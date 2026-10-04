import { cn } from "@/lib/utils";

export interface TagWithDotProps {
  label: string;
  dot?: "steel" | "verify";
  className?: string;
}

export function TagWithDot({ label, dot = "steel", className }: TagWithDotProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-none text-[12px] font-medium text-ink-navy",
        className,
      )}
    >
      <span
        className={cn(
          "h-[6px] w-[6px] rounded-full",
          dot === "verify" ? "bg-verify-green" : "bg-steel",
        )}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
