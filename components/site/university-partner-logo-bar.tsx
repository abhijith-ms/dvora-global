import type { UniversityPartner } from "@/content/site";

export interface UniversityPartnerLogoBarProps {
  partners: UniversityPartner[];
}

export function UniversityPartnerLogoBar({ partners }: UniversityPartnerLogoBarProps) {
  if (partners.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-48">
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noreferrer"
          className="text-[20px] font-medium leading-none text-steel hover:text-slate"
          aria-label={`Visit ${partner.name}'s website`}
        >
          {partner.name}
        </a>
      ))}
    </div>
  );
}
