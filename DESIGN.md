# DVORA Global — Style Reference
> atmospheric travel visuals on warm paper and deep navy

**Theme:** light

**Adapted from:** Column ("deep navy ledger under cool dawn"). Structure, density, elevation discipline and institutional register are Column's. Palette, typeface, components and imagery rules are DVORA's.

## Approved visual direction — October 2026

DVORA Global provides study-abroad guidance for Europe and the UK, with an office in Braga, Portugal. Preserve the supplied content and legal/contact information in `content/site.ts`.

The homepage now pairs a photographic globe and custom passenger aircraft with a navy five-stage journey. Travel objects should be recognisable and realistically proportioned, with restrained material detail. The hero uses a daylight blue atmosphere; the journey uses a softly lit navy environment. About, destination and service sections use pale blue panels and small supporting illustrations. Contact uses a warm wash and a prominent white form.

Globe and aircraft imagery is approved. The globe is illustrative of international education, not a representation of an expanded destination portfolio. No unsupported university markers, airline branding, approval stamps, success metrics, or guaranteed outcomes.

Warm clay and sand accents may recur in calls to action, route/progress indicators, and illustration details. Verify Green remains reserved for genuinely verified facts. Retain the geometric sans typography and accessible contrast. These approved homepage layouts replace the earlier ledger-only layout recommendations below.

GSAP controls all animation. Hero motion stops offscreen or in background tabs. Journey motion is scroll-driven and settles when scrolling stops. Desktop uses one pinned sequence; tall mobile screens use a compact sticky visual with normally scrolling text. Reduced motion, data saving, failed assets and WebGL loss use visible static artwork. See `public/visuals/ATTRIBUTION.md` for imagery credit.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Navy | `#12243f` | `--color-ink-navy` | Primary brand color — filled CTAs, nav active states, headings, logo wordmark, stat figures. Deep enough to carry institutional weight without going black; pairs with Paper text for the most confident button |
| Ink Deep | `#0b1728` | `--color-ink-deep` | Dark surface — inverted sections, footer, dark-mode substrate. Used when a band needs to flip for contrast |
| Slate | `#2e3742` | `--color-slate` | Body copy and secondary headings. Softer than the navy, used where Ink Navy would be too assertive for running text |
| Steel | `#69737f` | `--color-steel` | Muted text — the dominant secondary color. Captions, labels, metadata, inactive nav. Quiet without washing out |
| Fog | `#9aa3ad` | `--color-fog` | Icon strokes, placeholder text, tertiary borders |
| Mist | `#c3c9cf` | `--color-mist` | Fine print — disclaimers, legal, footnotes. Legible but recedes |
| Rule | `#e3ded5` | `--color-rule` | Hairline color — card borders, dividers, table rules, input borders. Warm-tinted so it sits correctly on Paper rather than looking grey and inserted |
| Paper | `#faf8f4` | `--color-paper` | Page background. Warm near-white; matches the logo files exactly so logo tiles blend with no visible seam |
| White | `#ffffff` | `--color-white` | Card surfaces, nav on scroll, table bodies. Top of the surface stack |
| Clay | `#c05a3e` | `--color-clay` | Accent CTA fill and single featured surface. The only saturated warm color in the system — use sparingly across the page |
| Clay Wash | `#fbf0ec` | `--color-clay-wash` | Soft accent surface — pull quotes, testimonial cards, callout blocks. Warmth at low intensity where Clay would shout |
| Verify Green | `#2c6e52` | `--color-verify-green` | Functional confirmation only — accreditation badges, "admitted", "visa approved", verified-partner marks. Never decorative, never body copy |
| Verify Wash | `#eaf2ed` | `--color-verify-wash` | Background for verified-status chips and confirmation states |

Column's seafoam scale, sky cyan, cobalt edge, ocean depth, peach glow and signal orange are all removed. They existed to make code and data visualisations legible; neither appears on this site. Pure black is removed — Slate or Ink Deep carry all dark text work.

## Tokens — Typography

### Switzer — Primary and only typeface — headings, body, buttons, nav, links, card text, tables, forms. A geometric grotesque with the proportions of the Swiss lineage but slightly warmer letterforms. Weight 600 at 48–60px for display, 500 for subheadings and buttons, 400 for body, 300 for low-emphasis links. · `--font-switzer`
- **Source:** Fontshare (free for commercial use)
- **Substitute:** Inter
- **Weights:** 300, 400, 500, 600
- **Sizes:** 12, 14, 16, 18, 20, 24, 28, 36, 44, 52, 60
- **Line height:** 1.0, 1.1, 1.3, 1.4, 1.5, 1.6
- **Letter spacing:** -0.03em at 52–60px, -0.02em at 36–48px, -0.01em at 20–28px, normal at 14–16px
- **Role:** Carries the whole system. The single-family approach is deliberate — a display/body split would add a second personality this brand doesn't need, and the wordmark is already a geometric sans, so a serif heading would fight the logo.

There is no monospace face in this system. Column uses mono for API identifiers and technical labels; DVORA has none, and monospace on small data labels is a recognisable generic tell. Use Switzer at 12px weight 500 for anything that would otherwise reach for mono.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.6 | — | `--text-body` |
| body-lg | 18px | 1.6 | — | `--text-body-lg` |
| subheading-sm | 20px | 1.3 | -0.2px | `--text-subheading-sm` |
| subheading-lg | 28px | 1.2 | -0.28px | `--text-subheading-lg` |
| heading-sm | 36px | 1.1 | -0.72px | `--text-heading-sm` |
| heading | 44px | 1.1 | -0.88px | `--text-heading` |
| heading-lg | 52px | 1.1 | -1.56px | `--text-heading-lg` |
| display | 60px | 1.0 | -1.8px | `--text-display` |

Body line-height is 1.6 rather than Column's 1.5. Column's body copy is short product blurbs; DVORA's is explanatory prose that parents will actually read, and it needs the extra air. Keep line length under 75 characters.

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 8px |
| inputs | 8px |
| buttons | 8px |
| images | 8px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| hairline | `rgba(18, 36, 63, 0.06) 0px 0px 0px 1px` | `--shadow-hairline` |
| sm | `rgba(18, 36, 63, 0.03) 0px 1px 4px 0px, rgba(18, 36, 63, 0.05) 0px 1px 0px 0px, rgba(18, 36, 63, 0.04) 0px 0px 0px 1px` | `--shadow-sm` |
| md | `rgba(18, 36, 63, 0.05) 0px 8px 16px 0px, rgba(18, 36, 63, 0.05) 0px 4px 8px 0px` | `--shadow-md` |
| lg | `rgba(18, 36, 63, 0.04) 0px 24px 32px 0px, rgba(18, 36, 63, 0.05) 0px 12px 16px 0px, rgba(18, 36, 63, 0.06) 0px 4px 6px 0px` | `--shadow-lg` |
| button | `rgba(18, 36, 63, 0.10) 0px 1px 3px 0px, rgba(18, 36, 63, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset` | `--shadow-button` |

Column carries nineteen shadow tokens because it has product mockups, floating widgets and dashboard chrome to differentiate. DVORA has cards and buttons. Five is enough, and fewer shadows read as more disciplined.

### Layout

- **Page max-width:** 1140px
- **Section gap:** 96px
- **Card padding:** 24px
- **Element gap:** 8px

Section gap goes to 96px from Column's 72px. This site is content-led rather than product-led, and the extra vertical separation is doing trust work — density reads as a page trying to convince you, space reads as a firm that doesn't need to.

## Components

### Primary Filled Button
**Role:** Main call to action — "Book a consultation", "Check your eligibility".

Background: `#12243f` (Ink Navy). Text: `#faf8f4`, 14px weight 500, letter-spacing normal. Border: none. Radius: 8px. Padding: 12px vertical, 20px horizontal. Box-shadow: `--shadow-button`. No arrow glyph appended to the label — the trailing arrow on button text is a generic tell, and the button already reads as an action.

### Secondary Outlined Button
**Role:** Secondary action — "See our university partners", "Read our fee structure".

Background: transparent. Text: `#12243f`, 14px weight 500. Border: 1px solid `#12243f`. Radius: 8px. Padding: 12px vertical, 28px horizontal. Sits beside the primary without competing. Never two filled buttons side by side.

### Accent Clay Button
**Role:** The single highest-attention CTA on a page — used once, usually the consultation booking in the hero or the closing band.

Background: `#c05a3e` (Clay). Text: `#ffffff`, 14px weight 500. Border: none. Radius: 8px. Padding: 12px vertical, 20px horizontal. Never in the nav bar. If a page already has a Clay surface anywhere, this button becomes the Primary Filled Button instead.

### Navigation Bar
**Role:** Fixed top bar.

Height: 68px. Background: transparent over the hero, transitioning to `#ffffff` with `--shadow-hairline` on scroll. Contains the horizontal DVORA wordmark at 24px height, left-aligned. Nav links: 14px weight 400 in `#69737f`, active state `#12243f` weight 500. One Secondary Outlined Button at the right edge. Simple chevron dropdowns, no mega-menu. The tagline never appears in the nav.

### Counsellor Profile Card
**Role:** The single most important trust component on the site. Replaces Column's product mockup card.

Background: `#ffffff`. Radius: 8px. Box-shadow: `--shadow-sm`. Padding: 24px. Contains: a real photograph of the person at 72px, radius 8px (not circular — circles read as social avatars, squares read as staff directory); name at 18px weight 500 `#12243f`; role at 14px weight 400 `#69737f`; credentials and years in the field at 14px `#2e3742`; destination specialisms as Tag with Dot; a LinkedIn link at 14px weight 400. Stock photography is prohibited here — an unverifiable face is worse than no face.

### Placement Outcome Card
**Role:** Proof of results. Replaces Column's transaction widget.

Background: `#ffffff`. Radius: 8px. Box-shadow: `--shadow-sm`. Padding: 24px. Contains: student first name and year; university name at 18px weight 500 `#12243f`; course and intake at 14px `#2e3742`; a Verified Chip if the student has consented to be contacted. Never render a placement without a named university and a year — an unattributed outcome is marketing, and families are told to discount it.

### University Partner Logo Bar
**Role:** Third-party credibility.

Background: `#ffffff` or transparent on Paper. Logos rendered as flat monochrome SVG at 20–24px height in `#69737f`. Gap: 48px. Centered single row, no card chrome. Every logo links out to that university's own page — the outbound link is the point, since it lets a visitor verify the claim without taking your word for it.

### Accreditation Badge
**Role:** Regulatory and registration trust marker. Replaces Column's FDIC badge.

Background: `#eaf2ed` (Verify Wash). Text: `#2c6e52`, 12px weight 500. Radius: 9999px. Padding: 4px 12px. Small check glyph prefix. Carries the registered entity name, registration number, or membership body. Appears in the footer on every page and in the hero on the homepage.

### Verified Chip
**Role:** Confirmed status — "Offer received", "Visa approved", "Contactable alumnus".

Background: `#eaf2ed`. Text: `#2c6e52`, 12px weight 500. Radius: 9999px. Padding: 4px 10px. Only ever applied to something that is actually verified. Applying this styling to an unconfirmed claim is the one thing in this system that would do real damage.

### Fee Transparency Table
**Role:** The published fee structure — the strongest available differentiator for a new firm, since almost no competitor publishes one.

Background: `#ffffff`. Radius: 8px. Border: 1px solid `#e3ded5`. Header row: 12px weight 500 uppercase `#69737f`, bottom rule 1px `#e3ded5`. Body rows: 16px `#2e3742`, row rule 1px `#e3ded5`, 16px vertical padding. Includes a plain-language row stating which universities pay DVORA a commission. Do not hide this table behind a form.

### Bordered Content Card
**Role:** Standard grouped content — service descriptions, destination guides, FAQ blocks.

Background: `#ffffff`. Radius: 8px. Box-shadow: `--shadow-sm`. Padding: 24px. Heading 20px weight 500 `#12243f`, body 16px `#2e3742`.

### Testimonial Card
**Role:** Student and parent quotes.

Background: `#fbf0ec` (Clay Wash). Radius: 8px. No shadow — the tint alone separates it. Padding: 32px. Quote at 18px weight 400 `#2e3742`, line-height 1.6. Attribution at 14px `#69737f` carrying name, university and year. A quote without all three reads as invented.

### Stats Row
**Role:** Trust metrics — students placed, years operating, partner universities, destination countries.

Four-column equal grid, no dividers, 48px gap, on Paper. Figure at 44px weight 600 `#12243f`, letter-spacing -0.88px. Label below at 14px weight 400 `#69737f`. Use only figures you can substantiate; round down rather than up. If you have placed 40 students, "40+" is credible and "hundreds" is not.

### Tag with Dot
**Role:** Category label — destination, intake, service type.

Background: transparent. Text: `#12243f`, 12px weight 500, sentence case. A small Steel or Verify Green dot prefix. Radius: 0 — reads as a label, not a chip. Sentence case rather than Column's uppercase: tracked-out all-caps labels are a template signature.

### Consultation Form
**Role:** The primary conversion surface.

Background: `#ffffff`. Radius: 8px. Box-shadow: `--shadow-md`. Padding: 32px. Inputs: 1px solid `#e3ded5`, radius 8px, 12px vertical padding, 16px text `#2e3742`, focus ring 2px `#12243f`. Labels above inputs at 14px weight 500 `#2e3742`. Submit is the Primary Filled Button reading "Book a consultation" — and the confirmation state says "Consultation booked", using the same verb. No countdown timer, no seats-remaining counter, no "limited slots" copy anywhere near this component.

## Do's and Don'ts

### Do
- Use 8px radius for cards, buttons, inputs and images — the 9999px pill is reserved for the Accreditation Badge and Verified Chip only.
- Pair the Ink Navy primary button with the Secondary Outlined Button — never two filled CTAs side by side.
- Use warm accents sparingly for emphasis; they may recur in CTAs and travel visuals.
- Restrict Verify Green to things that are genuinely confirmed. It is a functional color, not a palette member.
- Name every claim. Named counsellor, named university, named student, stated year. The specificity is the design.
- Put the registered entity name and full office address in the footer of every page, not only on the contact page.
- Publish the fee structure, including commission arrangements, on a page reachable without a form.
- Link university partner logos out to the universities' own sites so a visitor can verify without trusting you.
- Set section gaps to 96px — the space is part of the credibility register.
- Keep heading letter-spacing tight at large sizes (-0.03em at 52–60px). The tracking is what makes the geometric sans read as editorial rather than default.

### Don't
- Don't use guarantee language anywhere: no "100% admission", no "assured visa", no "guaranteed scholarship". Families are explicitly taught to treat these as fraud markers, and no design can outrun that copy.
- Don't build urgency devices — countdown timers, seats-remaining counters, fabricated deadlines. Pressure tactics are the second-most-cited red flag in the category.
- Don't use stock photography of students or offices. An unverifiable face is worse than an empty space; use a real photograph or use none.
- Don't render a testimonial or placement without name, university and year.
- Don't apply Verified Chip styling to anything unconfirmed.
- Don't put the tagline in the nav bar — it belongs in the hero, footer and print only.
- Don't append a trailing arrow glyph to button or link labels.
- Don't set tracked-out uppercase eyebrow labels above headings.
- Don't introduce a serif display face. The wordmark is a geometric sans and the cream-plus-serif-plus-terracotta combination is currently the most recognisable generated-design signature.
- Don't use a monospace face for small labels — Switzer at 12px weight 500 does that job.
- Don't set body text below 14px.
- Don't use pure black for text — Slate `#2e3742` or Ink Deep `#0b1728`.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper | `#faf8f4` | Base page background. Warm near-white, matched exactly to the logo file background |
| 1 | Card | `#ffffff` | Content cards, tables, forms, profile cards |
| 2 | Frosted Overlay | `#ffffff99` | Translucent nav over hero before scroll |
| 3 | Clay Wash | `#fbf0ec` | Testimonial and callout surface — low-intensity warmth |
| 4 | Verify Wash | `#eaf2ed` | Confirmation chips and accreditation badges |
| 5 | Ink Deep | `#0b1728` | Inverted band — footer and at most one dark section per page |

## Elevation

- **Profile / Outcome / Content Card:** `rgba(18,36,63,0.03) 0px 1px 4px 0px, rgba(18,36,63,0.05) 0px 1px 0px 0px, rgba(18,36,63,0.04) 0px 0px 0px 1px`
- **Consultation Form:** `rgba(18,36,63,0.05) 0px 8px 16px 0px, rgba(18,36,63,0.05) 0px 4px 8px 0px`
- **Hero Feature Card:** `rgba(18,36,63,0.04) 0px 24px 32px 0px, rgba(18,36,63,0.05) 0px 12px 16px 0px, rgba(18,36,63,0.06) 0px 4px 6px 0px`
- **Primary Button:** `rgba(18,36,63,0.10) 0px 1px 3px 0px, rgba(18,36,63,0.05) 0px 1px 0px 0px, rgba(255,255,255,0.4) 0px 1px 0px 0px inset`

Never use more than two elevation levels on a single page.

## Imagery

This is the one place where DVORA deliberately breaks from Column. Column avoids photography entirely and builds its visual language from SVG data illustrations and product mockups — appropriate for a product with no human-facing service. DVORA's credibility rests on the opposite: research on how families evaluate consultants points repeatedly at showing there are real, named, trustworthy people behind the organisation. So photography is required, with tight constraints:

- Real photographs of real counsellors, shot consistently: same background, same crop, same lighting. A uniform set reads as a firm; mixed sourcing reads as assembled.
- Real photographs of the actual office, including the exterior with signage. This corroborates the physical address in the footer.
- Student photographs only with written consent, and only attached to a named, dated placement.
- Avoid stock student imagery and flag montages. The approved globe/aircraft scene may include a restrained illustrative orbit.
- Icons uniformly outlined at 1.5–2px stroke in `#2e3742` or `#9aa3ad`, filled variants for active states.
- University crests reproduced only as supplied by the institution, never redrawn or recoloured.

Photography sits at 8px radius, never circular, never with a colour overlay.

## Layout

Max-width 1140px centered, 64–80px side margins on desktop. Navigation is a fixed 68px top bar, transparent over the hero, white with a hairline on scroll.

The hero is a split layout: headline and CTAs left-aligned at 45% width, with the Accreditation Badge directly beneath the CTA pair. The right 50% holds a single Placement Outcome Card or a counsellor portrait — something human and specific rather than an abstract graphic. Below the hero, bands alternate between White and Paper with 96px vertical gaps.

Section order on the homepage is deliberate and follows how a cautious visitor evaluates you: hero with a specific claim → stats row → university partner logo bar → how the process works → counsellor profiles → placement outcomes → fee transparency → testimonials → consultation form. Proof precedes persuasion throughout. Nothing that sells appears before something that verifies.

Content blocks span 4 of 6 columns for text, 5–6 for cards. Feature sections use text-left / card-right. The stats row breaks full-width to a 4-column equal grid. The footer is a 3-column layout carrying the registered entity name, full address, registration number and accreditation badges — it is a trust component, not an afterthought, and it is the densest block on the page.

## Agent Prompt Guide

### Quick Color Reference
- Background: `#faf8f4` (Paper)
- Card surface: `#ffffff`
- Primary text and headings: `#12243f` (Ink Navy)
- Body text: `#2e3742` (Slate)
- Muted text: `#69737f` (Steel)
- Hairlines: `#e3ded5` (Rule)
- Accent: `#c05a3e` (Clay) — one surface per page
- Confirmation only: `#2c6e52` (Verify Green)

### Example Component Prompts

1. **Create a primary button**: `#12243f` background, `#faf8f4` text at 14px weight 500, 8px radius, 12px/20px padding, subtle navy shadow with an inset white highlight. No arrow glyph in the label.

2. **Create a counsellor profile card**: `#ffffff` background, 8px radius, 24px padding, hairline shadow. Square 72px photograph at 8px radius, name at 18px weight 500 `#12243f`, role at 14px `#69737f`, credentials at 14px `#2e3742`, destination tags with dot prefixes, LinkedIn link at 14px.

3. **Create a trust stats row**: Four equal columns on `#faf8f4`, 48px gaps, no dividers. Figure at 44px weight 600 `#12243f` with -0.88px tracking, label below at 14px weight 400 `#69737f`.

4. **Create a fee transparency table**: `#ffffff` background, 8px radius, 1px `#e3ded5` border. Header row 12px weight 500 `#69737f`, body rows 16px `#2e3742`, 1px `#e3ded5` rules, 16px vertical cell padding. Include a row stating which partners pay commission.

5. **Create a university partner bar**: Single centered row, monochrome SVG logos at 20–24px height in `#69737f`, 48px gaps, no card chrome, each logo linking to that university's own site.

6. **Create an accreditation badge**: `#eaf2ed` background, `#2c6e52` text at 12px weight 500, 9999px radius, 4px/12px padding, check glyph prefix, carrying the registration number.

## Signature Visual Element

Column's signature is a halftone world map. DVORA's replacement is the **destination ledger**: a recurring full-width band listing destination countries as a hairline-ruled index, each row carrying the country, the number of partner universities, and the number of students placed, set in the type scale with `#e3ded5` rules between rows. Figures in Ink Navy weight 500, labels in Steel.

It is structural rather than decorative — it encodes real, verifiable information, which is exactly what a decorative graphic cannot do. It also scales honestly with the business: three countries with real numbers reads better than a world map implying global reach you don't have. Use it once per page at most, typically between the process section and the counsellor profiles.

## Typography Personality

A single geometric grotesque across weights 300–600 gives the system tonal range without a second personality. Weight 300 appears on low-emphasis links as a deliberate softening; weight 600 only at display sizes. The tight negative tracking at large sizes is what separates this from a default Inter build — untracked, the same typeface reads as a generic startup page.

The decision not to use a serif is the system's most consequential type choice. A serif display face would read as more traditionally "established", and that instinct is correct in isolation. But the pairing of warm cream, serif display and a terracotta accent has become the most identifiable signature of machine-generated design, which for this brand is a worse failure than reading slightly modern. The institutional register is carried instead by density, hairline discipline, generous section spacing and the tracking on large type.

## Similar Brands

- **Column** — the source system. Deep primary on near-white, white card surfaces, hairline separation, one rare warm accent, comfortable density.
- **Mercury** — near-white canvas with deep navy typography, restrained single accent, trust conveyed through restraint rather than decoration.
- **Wise** — trust-forward near-white system where clarity and institutional credibility are prioritised over flourish.
- **Plaid** — light canvas, deep navy primary text, subtle-shadowed white cards, visual language built on structure rather than photography.

Note that all four are fintech. The structural grammar transfers; the content model does not. Those companies sell on product surfaces and screenshots. DVORA sells on named people and verifiable outcomes, which is why the component set here is profiles, placements, partners and published fees rather than mockups and code blocks.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink-navy: #12243f;
  --color-ink-deep: #0b1728;
  --color-slate: #2e3742;
  --color-steel: #69737f;
  --color-fog: #9aa3ad;
  --color-mist: #c3c9cf;
  --color-rule: #e3ded5;
  --color-paper: #faf8f4;
  --color-white: #ffffff;
  --color-clay: #c05a3e;
  --color-clay-wash: #fbf0ec;
  --color-verify-green: #2c6e52;
  --color-verify-wash: #eaf2ed;

  /* Typography — Font Family */
  --font-switzer: 'Switzer', 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.6;
  --text-body-lg: 18px;
  --leading-body-lg: 1.6;
  --text-subheading-sm: 20px;
  --leading-subheading-sm: 1.3;
  --tracking-subheading-sm: -0.2px;
  --text-subheading-lg: 28px;
  --leading-subheading-lg: 1.2;
  --tracking-subheading-lg: -0.28px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.72px;
  --text-heading: 44px;
  --leading-heading: 1.1;
  --tracking-heading: -0.88px;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.56px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -1.8px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1140px;
  --section-gap: 96px;
  --card-padding: 24px;
  --element-gap: 8px;
  --nav-height: 68px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 9999px;
  --radius-cards: 8px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-images: 8px;

  /* Shadows */
  --shadow-hairline: rgba(18, 36, 63, 0.06) 0px 0px 0px 1px;
  --shadow-sm: rgba(18, 36, 63, 0.03) 0px 1px 4px 0px, rgba(18, 36, 63, 0.05) 0px 1px 0px 0px, rgba(18, 36, 63, 0.04) 0px 0px 0px 1px;
  --shadow-md: rgba(18, 36, 63, 0.05) 0px 8px 16px 0px, rgba(18, 36, 63, 0.05) 0px 4px 8px 0px;
  --shadow-lg: rgba(18, 36, 63, 0.04) 0px 24px 32px 0px, rgba(18, 36, 63, 0.05) 0px 12px 16px 0px, rgba(18, 36, 63, 0.06) 0px 4px 6px 0px;
  --shadow-button: rgba(18, 36, 63, 0.10) 0px 1px 3px 0px, rgba(18, 36, 63, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;

  /* Surfaces */
  --surface-paper: #faf8f4;
  --surface-card: #ffffff;
  --surface-frosted: #ffffff99;
  --surface-clay-wash: #fbf0ec;
  --surface-verify-wash: #eaf2ed;
  --surface-ink-deep: #0b1728;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ink-navy: #12243f;
  --color-ink-deep: #0b1728;
  --color-slate: #2e3742;
  --color-steel: #69737f;
  --color-fog: #9aa3ad;
  --color-mist: #c3c9cf;
  --color-rule: #e3ded5;
  --color-paper: #faf8f4;
  --color-white: #ffffff;
  --color-clay: #c05a3e;
  --color-clay-wash: #fbf0ec;
  --color-verify-green: #2c6e52;
  --color-verify-wash: #eaf2ed;

  /* Typography */
  --font-switzer: 'Switzer', 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.6;
  --text-body-lg: 18px;
  --leading-body-lg: 1.6;
  --text-subheading-sm: 20px;
  --leading-subheading-sm: 1.3;
  --tracking-subheading-sm: -0.2px;
  --text-subheading-lg: 28px;
  --leading-subheading-lg: 1.2;
  --tracking-subheading-lg: -0.28px;
  --text-heading-sm: 36px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.72px;
  --text-heading: 44px;
  --leading-heading: 1.1;
  --tracking-heading: -0.88px;
  --text-heading-lg: 52px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.56px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -1.8px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-hairline: rgba(18, 36, 63, 0.06) 0px 0px 0px 1px;
  --shadow-sm: rgba(18, 36, 63, 0.03) 0px 1px 4px 0px, rgba(18, 36, 63, 0.05) 0px 1px 0px 0px, rgba(18, 36, 63, 0.04) 0px 0px 0px 1px;
  --shadow-md: rgba(18, 36, 63, 0.05) 0px 8px 16px 0px, rgba(18, 36, 63, 0.05) 0px 4px 8px 0px;
  --shadow-lg: rgba(18, 36, 63, 0.04) 0px 24px 32px 0px, rgba(18, 36, 63, 0.05) 0px 12px 16px 0px, rgba(18, 36, 63, 0.06) 0px 4px 6px 0px;
  --shadow-button: rgba(18, 36, 63, 0.10) 0px 1px 3px 0px, rgba(18, 36, 63, 0.05) 0px 1px 0px 0px, rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
}
```
