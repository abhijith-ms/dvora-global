import { PageMotion } from "@/components/motion/page-motion";
import { TravelVisual } from "@/components/motion/travel-visual";
import { ServiceArt } from "@/components/site/service-art";
import { Journey } from "@/components/motion/journey";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { NavBar } from "@/components/site/nav-bar";
import { BorderedContentCard } from "@/components/site/bordered-content-card";
import { ConsultationForm } from "@/components/site/consultation-form";
import { site } from "@/content/site";

const headingClass = "text-[32px] font-semibold leading-[1.15] tracking-[-0.72px] text-ink-navy md:text-[36px]";

function Section({ id, white = false, children }: {
  id: string; white?: boolean; children: React.ReactNode;
}) {
  return <section id={id} className={`site-section section-${id} ${white ? "bg-white" : "bg-paper"}`}>
    <div className="mx-auto max-w-[1140px] px-6 py-64 md:px-64 md:py-96">{children}</div>
  </section>;
}

export default function Home() {
  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-4">Skip to content</a>
    <NavBar links={site.nav.links} ctaLabel={site.nav.ctaLabel} />
    <PageMotion><main id="main-content">
      <section className="hero-section">
        <div className="mx-auto grid max-w-[1140px] items-center gap-48 px-6 py-64 lg:grid-cols-[1fr_1.15fr] md:px-64 md:py-96">
          <div>
            <p className="section-kicker">Study abroad with DVORA Global</p>
            <h1 data-hero className="max-w-[13ch] text-[44px] font-semibold leading-[1.1] tracking-[-1.3px] text-ink-navy md:text-[60px] md:tracking-[-1.8px]">{site.hero.headline}</h1>
            <p data-hero className="mt-6 text-[18px] leading-[1.6]">{site.hero.subhead}</p>
            <div data-hero className="mt-32 flex flex-wrap items-center gap-16">
              <a href="#consultation" className={`${buttonVariants({ variant: "accent" })} hero-cta`}>{site.hero.primaryCta}</a>
              <a href="#services" className={buttonVariants({ variant: "secondary" })}>{site.hero.secondaryCta}</a>
            </div>
          </div>
          <aside className="hero-world">
            <TravelVisual mode="hero" />
            <div className="hero-world-caption">
              <p className="text-[20px] font-medium text-ink-navy">Europe / United Kingdom</p>
              <p className="mt-16 text-[14px]">{site.hero.focus}</p>
              <p className="mt-16 text-[14px] text-steel">{site.hero.approach}</p>
            </div>
          </aside>
        </div>
      </section>

      <Section id="about" white>
        <div className="grid gap-32 md:grid-cols-[1fr_2fr] md:gap-64">
          <h2 data-reveal className={headingClass}>{site.about.heading}</h2>
          <div data-reveal className="about-panel space-y-6">{site.about.paragraphs.map(text => <p key={text}>{text}</p>)}</div>
        </div>
        <h2 data-reveal className={`${headingClass} mt-64`}>{site.why.heading}</h2>
        <div data-stagger="rows" className="mt-32 grid gap-x-48 gap-y-32 sm:grid-cols-2">
          {site.why.items.map((item,index) => <div key={item.title} className="why-item"><ServiceArt index={index} />
            <h3 className="text-[20px] font-medium text-ink-navy">{item.title}</h3>
            <p className="mt-2">{item.body}</p>
          </div>)}
        </div>
      </Section>

      <Section id="destinations">
        <p className="mb-4 text-[14px] font-medium text-steel">{site.destinations.heading}</p>
        <h2 data-reveal className={headingClass}>{site.destinations.tagline}</h2>
        <p className="mt-6 max-w-[70ch] text-[18px]">{site.destinations.intro}</p>
        <p className="mt-4 max-w-[80ch] text-steel">{site.destinations.note}</p>
        <div className="destination-panels" data-stagger="cards">
          <div className="destination-panel"><span className="section-kicker">Study destinations</span><h3>Europe</h3><p>A world of academic possibilities.</p><svg viewBox="0 0 200 130" aria-hidden="true"><path d="m88 12 16 6-9 17 8 12 24-10 9 14 30 4 12 21-24 9-17-7-12 10 6 17-12 12-15-23-15 1-4 15-28-4-9-20 12-17-6-11 21-6 8-20Z"/></svg></div>
          <div className="destination-panel destination-uk"><span className="section-kicker">Study destinations</span><h3>United Kingdom</h3><p>Find the pathway that fits your future.</p><svg viewBox="0 0 140 150" aria-hidden="true"><path d="m78 8 20 2-9 23-12 12 14 13-10 16 10 14 17 12 5 20-19 5-10-7-15 10-30 2-8-8 22-12-2-16 12-9-5-18 13-12-6-18 10-11Z M43 66l10 10-7 26-18 3-7-16 10-17Z"/></svg></div>
        </div>
        <div className="mt-48 grid gap-48 md:grid-cols-2">
          <div>
            <h3 className="text-[24px] font-medium text-ink-navy">{site.destinations.levelsHeading}</h3>
            <p className="mt-4">{site.destinations.levelsIntro}</p>
            <ul data-stagger="rows" className="mt-24 divide-y divide-rule border-y border-rule">
              {site.destinations.levels.map(level => <li key={level} className="py-12">{level}</li>)}
            </ul>
          </div>
          <div data-reveal className="self-start rounded-lg bg-white p-32 shadow-[var(--shadow-sm)]">
            <h3 className="text-[24px] font-medium text-ink-navy">{site.destinations.courseHeading}</h3>
            <p className="mt-4">{site.destinations.courseIntro}</p>
            <ul className="mt-24 grid grid-cols-2 gap-16">
              {site.destinations.criteria.map(item => <li key={item} className="border-l-2 border-rule pl-3 text-[14px] font-medium text-ink-navy">{item}</li>)}
            </ul>
            <a href="#consultation" className={`${buttonVariants({ variant: "secondary" })} mt-32`}>Discuss your options</a>
          </div>
        </div>
      </Section>

      <Section id="services" white>
        <p className="mb-4 text-[14px] font-medium text-steel">{site.services.heading}</p>
        <h2 data-reveal className={`${headingClass} max-w-[24ch]`}>{site.services.tagline}</h2>
        <p className="mt-6 text-[18px]">{site.services.intro}</p>
        <div data-stagger="cards" className="mt-48 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.items.map((item,index) => <div key={item.number}><div data-service-card className="service-card h-full"><ServiceArt index={index} /><BorderedContentCard className="service-copy" eyebrow={item.number} heading={item.title} body={item.body} /></div></div>)}
        </div>
      </Section>

      <Section id="how-it-works">
        <Journey heading={site.journeyHeading} steps={site.process} />
      </Section>

      <Section id="consultation" white>
        <div className="grid gap-48 md:grid-cols-2">
          <div data-reveal>
            <p className="mb-4 text-[14px] font-medium text-steel">{site.contact.heading}</p>
            <h2 className={headingClass}>{site.contact.tagline}</h2>
            <p className="mt-6 text-[18px]">{site.contact.intro}</p>
            <address className="mt-32 space-y-4 not-italic">
              <a className="block font-medium underline underline-offset-4" href={site.contact.phoneHref}>{site.contact.phone}</a>
              <a className="block break-words font-medium underline underline-offset-4" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <p>{site.contact.address.map(line => <span key={line} className="block">{line}</span>)}</p>
            </address>
            <p className="mt-24 text-[14px] text-steel">Working hours<br />{site.contact.hours}</p>
          </div>
          <div data-reveal><ConsultationForm content={site.consultationForm} /></div>
        </div>
      </Section>
    </main></PageMotion>
    <footer className="bg-ink-deep text-paper">
      <div className="mx-auto grid max-w-[1140px] gap-40 px-6 py-64 md:grid-cols-3 md:px-64">
        <div>
          <div className="flex flex-col items-start gap-3">
            <Image src="/brand/logo-horizontal-white.png" alt="DVORA Global" width={1130} height={240} unoptimized className="h-auto w-[180px] max-w-full" />
            <p className="text-[15px] leading-relaxed text-paper">{site.tagline}</p>
          </div>
          <p className="mt-6 text-[14px] text-mist">Under {site.contact.registeredName}<br />VAT: {site.contact.vat}</p>
        </div>
        <div>
          <h2 data-reveal className="text-[16px] font-medium">Office</h2>
          <address className="mt-6 text-[14px] not-italic text-mist">{site.contact.address.map(line => <span key={line} className="block">{line}</span>)}</address>
          <p className="mt-6 text-[14px] text-mist">{site.contact.hours}</p>
        </div>
        <div>
          <h2 data-reveal className="text-[16px] font-medium">Contact DVORA Global</h2>
          <div className="mt-6 space-y-3 text-[14px] text-mist">
            <a className="block hover:underline" href={site.contact.phoneHref}>{site.contact.phone}</a>
            <a className="block break-words hover:underline" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        </div>
      </div>
    </footer>
  </>;
}
