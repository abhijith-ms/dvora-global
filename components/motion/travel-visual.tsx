"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { TravelArt } from "./travel-art";
import { journeyState } from "@/lib/journey-state";
import type { TravelController } from "./travel-scene";

export type TravelVisualHandle = { setProgress: (progress: number) => void };
export const TravelVisual = forwardRef<TravelVisualHandle, { mode: "hero" | "journey" }>(function TravelVisual({ mode }, forwardedRef) {
  const host = useRef<HTMLDivElement>(null);
  const scene = useRef<TravelController | null>(null);
  const progress = useRef(0);
  const paused = useRef(false);
  const [isPaused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  useImperativeHandle(forwardedRef, () => ({ setProgress(value) {
    progress.current = value;
    if (host.current) host.current.dataset.stage = String(journeyState(value).active);
    scene.current?.setProgress(value);
  } }), []);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const short = matchMedia("(max-height: 699px)");
    const connection = (navigator as Navigator & { connection?: EventTarget & { saveData?: boolean } }).connection;
    let generation = 0;
    let observer: IntersectionObserver | undefined;
    let destroyed = false;
    const reset = () => {
      const token = ++generation;
      observer?.disconnect(); scene.current?.dispose(); scene.current = null;
      setReady(false);
      if (reduced.matches || connection?.saveData || (mode === "journey" && short.matches)) return;
      let loading = false;
      observer = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting || loading || !host.current) return;
        loading = true; observer?.disconnect();
        import("./travel-scene").then(async ({ createTravelScene }) => {
          if (destroyed || token !== generation || !host.current) return;
          const controller = await createTravelScene(host.current, mode, () => { if (!destroyed && token === generation) setReady(false); });
          if (destroyed || token !== generation) { controller.dispose(); return; }
          scene.current = controller; controller.setProgress(progress.current); controller.setPaused(paused.current);
          setReady(true);
        }).catch((error: unknown) => { if (process.env.NODE_ENV === "development") console.warn("Travel scene fallback", error); if (!destroyed && token === generation) setReady(false); });
      }, { rootMargin: mode === "hero" ? "0px" : "200px" });
      if (host.current) observer.observe(host.current);
    };
    reset(); reduced.addEventListener("change", reset); short.addEventListener("change", reset); connection?.addEventListener("change", reset);
    return () => { destroyed = true; generation++; observer?.disconnect(); scene.current?.dispose(); scene.current = null; reduced.removeEventListener("change", reset); short.removeEventListener("change", reset); connection?.removeEventListener("change", reset); };
  }, [mode]);
  return <div className={`travel-visual-wrap travel-${mode}`}>
    <div ref={host} className="travel-visual" data-stage="0" data-ready={ready} aria-hidden="true">
      <div className="travel-fallback">{mode === "hero" ? <TravelArt hero /> : [0,1,2,3,4].map(stage => <div key={stage} data-still={stage}><TravelArt stage={stage}/></div>)}</div>
    </div>
    {mode === "hero" && ready && <button type="button" className="travel-pause" aria-pressed={isPaused} onClick={() => {
      paused.current = !paused.current; setPaused(paused.current); scene.current?.setPaused(paused.current);
    }}>{isPaused ? "Resume animation" : "Pause animation"}</button>}
  </div>;
});
