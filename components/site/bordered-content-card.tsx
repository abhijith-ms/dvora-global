import { cn } from "@/lib/utils";

export interface BorderedContentCardProps {
  heading: string;
  body: string;
  eyebrow?: string;
  className?: string;
}

export function BorderedContentCard({
  heading,
  body,
  eyebrow,
  className,
}: BorderedContentCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-white p-6 shadow-[var(--shadow-sm)]",
        className,
      )}
    >
      {eyebrow ? (
        <div className="mb-2 text-[14px] font-medium text-steel">{eyebrow}</div>
      ) : null}
      <h3 className="text-[20px] font-medium leading-[1.3] text-ink-navy">
        {heading}
      </h3>
      <p className="mt-2 text-[16px] leading-[1.6] text-slate">{body}</p>
    </div>
  );
}
