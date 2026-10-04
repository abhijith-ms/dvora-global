"use client";

import { useRef } from "react";
import type { ProcessStep } from "@/content/site";
import { gsap, useGSAP, ScrollTrigger, motion } from "@/lib/motion";
import { journeyState } from "@/lib/journey-state";
import { TravelVisual, type TravelVisualHandle } from "./travel-visual";
import { TravelArt } from "./travel-art";

export function Journey({ heading, steps }: { heading: string; steps: ProcessStep[] }) {
  const root=useRef<HTMLDivElement>(null);const visual=useRef<TravelVisualHandle>(null);
  useGSAP(()=>{
    const mm=gsap.matchMedia();
    mm.add({all:"all",desktop:motion.query.journey,reduce:motion.query.reduce,tall:"(min-height: 700px)"},context=>{
      const host=root.current!;
      if(context.conditions?.reduce||!context.conditions?.tall)return;
      const desktop=!!context.conditions.desktop;
      host.classList.add(desktop?"journey-enhanced":"journey-mobile");
      const panels=host.querySelectorAll<HTMLElement>("[data-journey-panel]");
      const items=host.querySelectorAll<HTMLElement>("[data-journey-step]");
      const line=host.querySelector<HTMLElement>("[data-journey-line]")!;
      const state={progress:0};
      const update=()=>{
        const phase=journeyState(state.progress);visual.current?.setProgress(state.progress);
        host.dataset.active=steps[phase.active].id;
        panels.forEach((panel,index)=>{
          const alpha=index===phase.index?1-phase.mix:index===phase.next?phase.mix:0;
          panel.style.opacity=String(alpha);panel.style.transform=`translateY(${(1-alpha)*8}px)`;
        });
        items.forEach((item,index)=>item.dataset.current=String(index===phase.active));
        line.style.transform=`scaleX(${Math.min(1,state.progress*1.25)})`;
      };
      const alignTrack=()=>{const marker=host.querySelector<HTMLElement>(".journey-marker");const track=line.parentElement;if(marker&&track)track.style.top=`${marker.getBoundingClientRect().top-host.getBoundingClientRect().top+marker.offsetHeight/2}px`;};
      update();alignTrack();
      const timeline=gsap.timeline({scrollTrigger:{
        trigger:desktop?host:host.querySelector(".journey-steps"),
        start:desktop?"top 88px":"top 350px",
        end:desktop?()=>`+=${innerHeight*motion.scrollLength}`:"bottom 350px",
        onRefresh:alignTrack,pin:desktop?host:false,scrub:motion.scrub,invalidateOnRefresh:true,
      }}).to(state,{progress:1,duration:5,ease:"none",onUpdate:update});
      return ()=>{timeline.kill();host.classList.remove("journey-enhanced","journey-mobile");delete host.dataset.active;panels.forEach(p=>{p.style.removeProperty("opacity");p.style.removeProperty("transform");});items.forEach(i=>delete i.dataset.current);line.style.removeProperty("transform");};
    });
    let alive=true;document.fonts.ready.then(()=>{if(alive)ScrollTrigger.refresh();});
    return ()=>{alive=false;mm.revert();};
  },{scope:root});
  return <div ref={root} className="journey">
    <div className="journey-heading"><div><p className="section-kicker">From ambition to arrival</p><h2>{heading}</h2></div><a href="#consultation" className="nav-motion-link">Continue to contact</a></div>
    <div className="journey-track" aria-hidden="true"><span data-journey-line/></div>
    <ol className="journey-steps">{steps.map((step,index)=><li key={step.id} data-journey-step data-stage-id={step.id}>
      <span className="journey-marker">{step.step}</span><h3>{step.title}</h3>
      <div className="journey-inline-art"><TravelArt stage={index}/></div>
      <p className="journey-description">{step.body}</p>
    </li>)}</ol>
    <div className="journey-showcase">
      <TravelVisual ref={visual} mode="journey"/>
      <div className="journey-panels" aria-hidden="true">{steps.map(step=><div data-journey-panel key={step.id}>
        <p className="journey-stage-label">Your next chapter · {step.step} / 05</p><p className="journey-stage-title">{step.title}</p><p>{step.body}</p>
      </div>)}</div>
    </div>
  </div>;
}
