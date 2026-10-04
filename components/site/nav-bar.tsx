"use client";

import { gsap, useGSAP, motion } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { NavLink } from "@/content/site";

export interface NavBarProps {
  links: NavLink[];
  ctaLabel: string;
  /** Force the scrolled (white + hairline) visual state — used by the styleguide. */
  forceScrolled?: boolean;
}

function ChevronDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className="ml-1 inline-block"
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M5 5L15 15M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 6H17M3 10H17M3 14H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NavBar({ links, ctaLabel, forceScrolled }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!mobileOpen || !panelRef.current) return;
    const mm = gsap.matchMedia();
    mm.add({ always: "all", reduce: motion.query.reduce }, context => {
      if (!context.conditions?.reduce) gsap.from(panelRef.current, { opacity: 0, y: -motion.distance.menu, duration: motion.duration.feedback, ease: motion.ease.ui });
    });
    return () => mm.revert();
  }, { dependencies: [mobileOpen], revertOnUpdate: true });
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const isScrolled = forceScrolled ?? (scrolled || mobileOpen);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        isScrolled ? "bg-white shadow-[var(--shadow-hairline)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1140px] items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="DVORA">
          <Image
            src="/brand/logo-horizontal.png"
            alt="DVORA"
            width={1130}
            height={240}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-32 md:flex">
          {links.map((link) =>
            link.children ? (
              <details key={link.label} className="group relative">
                <summary className="flex cursor-pointer list-none items-center text-[14px] font-normal text-steel [&::-webkit-details-marker]:hidden">
                  {link.label}
                  <ChevronDown />
                </summary>
                <div className="absolute left-0 top-full mt-2 min-w-[160px] rounded-lg bg-white p-2 shadow-[var(--shadow-sm)]">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-[14px] text-slate hover:bg-paper"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="nav-motion-link text-[14px] font-normal text-steel hover:text-ink-navy"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <a href="#consultation" className={cn(buttonVariants({ variant: "secondary" }), "hidden text-[14px] md:inline-flex")}>
          {ctaLabel}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-navy md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen ? (
        <div
          ref={panelRef}
          id="mobile-nav-panel"
          className="border-t border-rule bg-white px-6 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-3 text-[16px] text-slate hover:bg-paper"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.children ? (
                  <div className="ml-16 flex flex-col">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-md px-2 py-2 text-[14px] text-steel hover:bg-paper"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <a
            href="#consultation"
            className={cn(buttonVariants({ variant: "secondary" }), "mt-16 w-full justify-center text-[14px]")}
            onClick={() => setMobileOpen(false)}
          >
            {ctaLabel}
          </a>
        </div>
      ) : null}
    </header>
  );
}
