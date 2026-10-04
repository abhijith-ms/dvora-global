import { cn } from "@/lib/utils";

export interface VerifiedChipProps {
  label: string;
  className?: string;
}

export function VerifiedChip({ label, className }: VerifiedChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-verify-wash px-[10px] py-[4px] text-[12px] font-medium text-verify-green",
        className,
      )}
    >
      {label}
    </span>
  );
}
