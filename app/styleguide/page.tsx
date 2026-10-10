import type { Metadata } from "next";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavBar } from "@/components/site/nav-bar";

export const metadata: Metadata = { robots: { index: false, follow: false } };
import { CounsellorProfileCard } from "@/components/site/counsellor-profile-card";
import { PlacementOutcomeCard } from "@/components/site/placement-outcome-card";
import { UniversityPartnerLogoBar } from "@/components/site/university-partner-logo-bar";
import { AccreditationBadge } from "@/components/site/accreditation-badge";
import { VerifiedChip } from "@/components/site/verified-chip";
import { FeeTransparencyTable } from "@/components/site/fee-transparency-table";
import { BorderedContentCard } from "@/components/site/bordered-content-card";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { StatsRow } from "@/components/site/stats-row";
import { TagWithDot } from "@/components/site/tag-with-dot";
import { ConsultationForm } from "@/components/site/consultation-form";

function Block({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-rule pb-48">
      <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.28px] text-ink-navy">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[70ch] text-[14px] text-steel">{description}</p>
      ) : null}
      <div className="mt-16">{children}</div>
    </div>
  );
}

function EmptyStateNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-16 text-[14px] text-fog">
      Empty state — when the content array is empty, this component renders{" "}
      <code className="text-slate">null</code>. {children}
    </p>
  );
}

export default function StyleguidePage() {
  const sampleCounsellor = {
    name: "TODO: counsellor name",
    role: "TODO: counsellor role/title",
    credentials: "TODO: credentials",
    yearsInField: "TODO: years in field",
    specialisms: [
      { label: "TODO: destination", dot: "steel" as const },
      { label: "TODO: destination", dot: "verify" as const },
    ],
    linkedinUrl: "#",
  };

  const samplePlacementVerified = {
    studentFirstName: "TODO: student first name",
    year: "TODO: year",
    university: "TODO: university name",
    course: "TODO: course",
    intake: "TODO: intake",
    verified: true,
  };

  const samplePlacementUnverified = {
    ...samplePlacementVerified,
    verified: false,
  };

  const samplePartners = [
    { name: "TODO: university partner", url: "#" },
    { name: "TODO: university partner", url: "#" },
    { name: "TODO: university partner", url: "#" },
  ];

  const sampleFeeRows = [
    { item: "TODO: service fee line item", amount: "TODO: amount" },
    { item: "TODO: service fee line item", amount: "TODO: amount" },
    {
      item: "Commission disclosure",
      amount: "—",
      note: "TODO: plain-language statement of which universities pay DVORA a commission",
    },
  ];

  const sampleTestimonial = {
    quote: "TODO: verbatim student or parent quote",
    name: "TODO: name",
    university: "TODO: university",
    year: "TODO: year",
  };

  const sampleStats = [
    { figure: "TODO: figure", label: "TODO: label" },
    { figure: "TODO: figure", label: "TODO: label" },
    { figure: "TODO: figure", label: "TODO: label" },
    { figure: "TODO: figure", label: "TODO: label" },
  ];

  const sampleConsultationForm = site.consultationForm;

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-96 md:px-80">
      <h1 className="text-[44px] font-semibold leading-[1.1] tracking-[-0.88px] text-ink-navy">
        Styleguide
      </h1>
      <p className="mt-6 max-w-[70ch] text-[18px] leading-[1.6] text-slate">
        Every component from DESIGN.md, in every state. All visible text is either a{" "}
        <code className="text-clay">TODO:</code> placeholder or generic UI chrome — no
        fabricated names, universities, stats or quotes.
      </p>

      <div className="mt-48 flex flex-col gap-48">
        <Block title="Buttons" description="Primary / Secondary / Accent, each default, focus-visible and disabled.">
          <div className="flex flex-wrap items-center gap-16">
            <Button variant="primary">Book a consultation</Button>
            <Button variant="primary" autoFocus>
              Focus-visible
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-16">
            <Button variant="secondary">See our university partners</Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-16">
            <Button variant="accent">Book a consultation</Button>
            <Button variant="accent" disabled>
              Disabled
            </Button>
          </div>
        </Block>

        <Block
          title="Navigation Bar"
          description="Transparent-over-hero state, and white + hairline scrolled state."
        >
          <div className="flex flex-col gap-16">
            <div className="overflow-hidden rounded-lg border border-rule bg-[repeating-linear-gradient(45deg,#faf8f4,#faf8f4_10px,#f2ede4_10px,#f2ede4_20px)]">
              <NavBar
                links={[
                  { label: "Destinations", href: "#" },
                  { label: "How it works", href: "#" },
                  {
                    label: "Counsellors",
                    href: "#",
                    children: [
                      { label: "TODO: sub-link", href: "#" },
                      { label: "TODO: sub-link", href: "#" },
                    ],
                  },
                  { label: "Fees", href: "#" },
                ]}
                ctaLabel="Book a consultation"
                forceScrolled={false}
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-rule">
              <NavBar
                links={[
                  { label: "Destinations", href: "#" },
                  { label: "How it works", href: "#" },
                  { label: "Fees", href: "#" },
                ]}
                ctaLabel="Book a consultation"
                forceScrolled={true}
              />
            </div>
          </div>
        </Block>

        <Block title="Counsellor Profile Card">
          <div className="grid gap-24 md:grid-cols-3">
            <CounsellorProfileCard counsellor={sampleCounsellor} />
          </div>
        </Block>

        <Block title="Placement Outcome Card" description="With and without a Verified Chip.">
          <div className="grid gap-24 md:grid-cols-3">
            <PlacementOutcomeCard outcome={samplePlacementVerified} />
            <PlacementOutcomeCard outcome={samplePlacementUnverified} />
          </div>
        </Block>

        <Block title="University Partner Logo Bar">
          <UniversityPartnerLogoBar partners={samplePartners} />
          <EmptyStateNote>Passing an empty partners array renders nothing.</EmptyStateNote>
        </Block>

        <Block title="Accreditation Badge">
          <div className="flex flex-wrap gap-16">
            <AccreditationBadge label="TODO: registration number" />
            <AccreditationBadge label="TODO: membership body" />
          </div>
        </Block>

        <Block title="Verified Chip">
          <div className="flex flex-wrap gap-16">
            <VerifiedChip label="Offer received" />
            <VerifiedChip label="Visa approved" />
            <VerifiedChip label="Contactable alumnus" />
          </div>
        </Block>

        <Block title="Fee Transparency Table" description="Includes the required commission-disclosure row.">
          <FeeTransparencyTable rows={sampleFeeRows} />
          <EmptyStateNote>Passing an empty rows array renders nothing.</EmptyStateNote>
        </Block>

        <Block title="Bordered Content Card">
          <div className="grid gap-24 md:grid-cols-2">
            <BorderedContentCard
              eyebrow="Step 1"
              heading="TODO: step title"
              body="TODO: step description"
            />
            <BorderedContentCard heading="TODO: heading" body="TODO: body copy" />
          </div>
        </Block>

        <Block title="Testimonial Card">
          <div className="grid gap-24 md:grid-cols-2">
            <TestimonialCard testimonial={sampleTestimonial} />
          </div>
          <EmptyStateNote>
            A testimonial missing quote, name, university or year also renders nothing.
          </EmptyStateNote>
        </Block>

        <Block title="Stats Row">
          <StatsRow stats={sampleStats} />
          <EmptyStateNote>Passing an empty stats array renders nothing.</EmptyStateNote>
        </Block>

        <Block title="Tag with Dot">
          <div className="flex flex-wrap gap-24">
            <TagWithDot label="TODO: destination" dot="steel" />
            <TagWithDot label="TODO: intake" dot="verify" />
          </div>
        </Block>

        <Block title="Consultation Form" description="Prepares an enquiry in the visitor’s email app.">
          <div className="max-w-[640px]">
            <ConsultationForm content={sampleConsultationForm} />
          </div>
        </Block>

        <Block title="Form inputs (raw)" description="Default, focused and disabled states.">
          <div className="grid max-w-[420px] gap-16">
            <div className="flex flex-col gap-2">
              <Label htmlFor="sg-default">Default</Label>
              <Input id="sg-default" placeholder="TODO: placeholder" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="sg-focus">Focus-visible</Label>
              <Input id="sg-focus" autoFocus placeholder="TODO: placeholder" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="sg-disabled">Disabled</Label>
              <Input id="sg-disabled" disabled placeholder="TODO: placeholder" />
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
}
