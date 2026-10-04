import type { StatItem } from "@/content/site";

export interface StatsRowProps {
  stats: StatItem[];
}

export function StatsRow({ stats }: StatsRowProps) {
  if (stats.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-48 bg-paper md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-[44px] font-semibold leading-[1.1] tracking-[-0.88px] text-ink-navy">
            {stat.figure}
          </div>
          <div className="mt-1 text-[14px] font-normal text-steel">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
