import type { Counsellor } from "@/content/site";
import { TagWithDot } from "@/components/site/tag-with-dot";

export interface CounsellorProfileCardProps {
  counsellor: Counsellor;
}

export function CounsellorProfileCard({ counsellor }: CounsellorProfileCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-[var(--shadow-sm)]">
      <div
        className="h-[72px] w-[72px] rounded-lg bg-mist"
        role="img"
        aria-label={`Photograph of ${counsellor.name}`}
      />
      <h3 className="mt-16 text-[18px] font-medium text-ink-navy">
        {counsellor.name}
      </h3>
      <p className="text-[14px] text-steel">{counsellor.role}</p>
      <p className="mt-2 text-[14px] text-slate">
        {counsellor.credentials} · {counsellor.yearsInField}
      </p>
      {counsellor.specialisms.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-3">
          {counsellor.specialisms.map((tag) => (
            <TagWithDot key={tag.label} label={tag.label} dot={tag.dot} />
          ))}
        </div>
      ) : null}
      <a
        href={counsellor.linkedinUrl}
        className="mt-16 inline-block text-[14px] font-normal text-ink-navy underline decoration-rule underline-offset-2 hover:decoration-ink-navy"
      >
        LinkedIn
      </a>
    </div>
  );
}
