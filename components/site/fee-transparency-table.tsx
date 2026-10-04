import type { FeeRow } from "@/content/site";

export interface FeeTransparencyTableProps {
  rows: FeeRow[];
}

export function FeeTransparencyTable({ rows }: FeeTransparencyTableProps) {
  if (rows.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-rule bg-white">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-rule">
            <th className="px-6 py-3 text-[12px] font-medium uppercase tracking-wide text-steel">
              Item
            </th>
            <th className="px-6 py-3 text-[12px] font-medium uppercase tracking-wide text-steel">
              Amount
            </th>
            <th className="px-6 py-3 text-[12px] font-medium uppercase tracking-wide text-steel">
              Note
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.item} className="border-b border-rule last:border-b-0">
              <td className="px-6 py-16 text-[16px] text-slate">{row.item}</td>
              <td className="px-6 py-16 text-[16px] text-slate">{row.amount}</td>
              <td className="px-6 py-16 text-[16px] text-slate">{row.note ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
