"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export { gsap, useGSAP, ScrollTrigger };
export const motion = {
  duration: { feedback: 0.18, reveal: 0.45, hero: 0.9, follow: 0.5, crossfade: 0.25, marker: 0.2, stageOverlap: 0.15, finalHold: 0.9 },
  stagger: { hero: 0.08, rows: 0.05, cards: 0.06 },
  distance: { hero: 12, reveal: 16, menu: 8, lift: 3 },
  ease: { ui: "power2.out", entrance: "power3.out" },
  query: {
    reduce: "(prefers-reduced-motion: reduce)",
    desktop: "(min-width: 1024px) and (pointer: fine)",
    journey: "(min-width: 1024px) and (min-height: 760px) and (pointer: fine)",
    hover: "(hover: hover) and (pointer: fine)",
  },
  tilt: 4 * Math.PI / 180,
  scrub: 0.35,
  scrollLength: 1.8,
};
