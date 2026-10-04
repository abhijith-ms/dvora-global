"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, motion } from "@/lib/motion";

export function PageMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add({ always: "all", reduce: motion.query.reduce, hover: motion.query.hover }, context => {
      if (context.conditions?.reduce) return;
      const host = root.current!;
      const hero = host.querySelectorAll("[data-hero]");
      // Visible server markup is the fallback; only enhance the initial top-of-page visit.
      if (window.scrollY < 40 && !window.location.hash) {
        gsap.from(hero, { y: motion.distance.hero, opacity: 0, duration: motion.duration.reveal,
          stagger: motion.stagger.hero, ease: motion.ease.entrance });
      }
      const elements = host.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger] > *");
      const tweens = new Map<HTMLElement, gsap.core.Tween>();
      elements.forEach((element) => {
        // Never conceal content already in view, including direct hash landings.
        if (element.getBoundingClientRect().top < window.innerHeight) return;
        const parent = element.parentElement;
        const index = parent?.hasAttribute("data-stagger") ? Array.from(parent.children).indexOf(element) : 0;
        const stagger = parent?.dataset.stagger === "cards" ? motion.stagger.cards : motion.stagger.rows;
        const tween = gsap.from(element, {
          y: motion.distance.reveal, opacity: 0, duration: motion.duration.reveal,
          delay: (index % 3) * stagger, ease: motion.ease.entrance,
          scrollTrigger: { trigger: element, start: "top 92%", once: true },
        });
        tweens.set(element, tween);
      });
      const revealFocus = (event: FocusEvent) => {
        tweens.forEach((tween, element) => {
          if (element.contains(event.target as Node)) tween.progress(1);
        });
        if (Array.from(hero).some(element => element.contains(event.target as Node))) {
          gsap.killTweensOf(hero);
          gsap.set(hero, { clearProps: "transform,opacity" });
        }
      };
      host.addEventListener("focusin", revealFocus);
      const listeners: (() => void)[] = [];
      if (context.conditions?.hover) {
        host.querySelectorAll<HTMLElement>("[data-service-card]").forEach(card => {
          const enter = () => gsap.to(card, { y: -motion.distance.lift, duration: motion.duration.feedback, ease: motion.ease.ui, overwrite: "auto" });
          const leave = () => gsap.to(card, { y: 0, duration: motion.duration.feedback, ease: motion.ease.ui, overwrite: "auto" });
          card.addEventListener("pointerenter", enter);
          card.addEventListener("pointerleave", leave);
          listeners.push(() => { card.removeEventListener("pointerenter", enter); card.removeEventListener("pointerleave", leave); gsap.killTweensOf(card); gsap.set(card, { clearProps: "transform" }); });
        });
      }
      return () => { host.removeEventListener("focusin", revealFocus); listeners.forEach(fn => fn()); };
    });
    let live = true;
    const initialHash=window.location.hash;
    let interacted=false,frame=0;
    const onInteraction=()=>{interacted=true;};
    ["wheel","touchstart","keydown"].forEach(type=>window.addEventListener(type,onInteraction,{passive:true}));
    document.fonts.ready.then(() => {
      if (!live) return;
      ScrollTrigger.refresh();
      frame=requestAnimationFrame(()=>{frame=requestAnimationFrame(()=>{
        if(!live||interacted||!initialHash||window.location.hash!==initialHash)return;
        try { document.getElementById(decodeURIComponent(initialHash.slice(1)))?.scrollIntoView({behavior:"instant"}); } catch { /* Ignore malformed fragment URLs. */ }
      });});
    });
    return () => { live = false;cancelAnimationFrame(frame);["wheel","touchstart","keydown"].forEach(type=>window.removeEventListener(type,onInteraction)); mm.revert(); };
  }, { scope: root });
  return <div ref={root}>{children}</div>;
}
