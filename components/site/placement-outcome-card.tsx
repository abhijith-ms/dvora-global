import type { PlacementOutcome } from "@/content/site";
import { VerifiedChip } from "@/components/site/verified-chip";

export interface PlacementOutcomeCardProps {
  outcome: PlacementOutcome;
}

export function PlacementOutcomeCard({ outcome }: PlacementOutcomeCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-[var(--shadow-sm)]">
      <p className="text-[14px] text-steel">
        {outcome.studentFirstName} · {outcome.year}
      </p>
      <h3 className="mt-1 text-[18px] font-medium text-ink-navy">
        {outcome.university}
      </h3>
      <p className="mt-1 text-[14px] text-slate">
        {outcome.course} · {outcome.intake}
      </p>
      {outcome.verified ? (
        <div className="mt-3">
          <VerifiedChip label="Contactable alumnus" />
        </div>
      ) : null}
    </div>
  );
}
