import * as T from "three";
import { gsap } from "@/lib/motion";
import { journeyState } from "@/lib/journey-state";
import { aircraft, journeyObjects, material, earthMaterial } from "./travel-models";

export type TravelController = { setProgress: (value:number)=>void; setPaused:(value:boolean)=>void; dispose:()=>void };

export async function createTravelScene(host:HTMLDivElement, mode:"hero"|"journey", onFallback:()=>void):Promise<TravelController> {
  const mobile=matchMedia("(max-width: 767px)").matches;
  const texture=await new T.TextureLoader().loadAsync(`/visuals/earth-${mobile?1024:2048}.webp`);
  texture.colorSpace=T.SRGBColorSpace;
  let renderer:T.WebGLRenderer;
  try { renderer=new T.WebGLRenderer({alpha:true,antialias:!mobile,powerPreference:"low-power"}); }
  catch(error) { texture.dispose();throw error; }
  renderer.setPixelRatio(mobile?1:Math.min(devicePixelRatio,1.5));
  renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
  const scene=new T.Scene();const root=new T.Group();scene.add(root);
  const camera=new T.PerspectiveCamera(mode==="hero"?36:34,1,.1,50);
  camera.position.set(0,mode==="hero"?.35:.25,mode==="hero"?6.1:6.2);camera.lookAt(0,mode==="hero"?0:-.15,0);
  scene.add(new T.HemisphereLight(0xe4f4ff,0x496079,2.1));
  const key=new T.DirectionalLight(0xfff3df,3.2);key.position.set(-3,4,5);scene.add(key);
  const fill=new T.DirectionalLight(0x90caff,1.2);fill.position.set(4,1,-2);scene.add(fill);
  let earth:T.Mesh|undefined,clouds:T.Mesh|undefined,plane:T.Group|undefined,objects:ReturnType<typeof journeyObjects>|undefined;
  let cloudTexture:T.CanvasTexture|undefined;
  if(mode==="hero") {
    earth=new T.Mesh(new T.SphereGeometry(1.35,64,40),earthMaterial(texture));earth.rotation.y=-1.8;root.add(earth);
    const atmosphere=new T.Mesh(new T.SphereGeometry(1.39,48,32),new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.BackSide,uniforms:{},vertexShader:`varying vec3 vNormal; varying vec3 vPosition; void main(){vec4 p=modelViewMatrix*vec4(position,1.0);vPosition=p.xyz;vNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}`,fragmentShader:`varying vec3 vNormal; varying vec3 vPosition; void main(){float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(-vPosition))),3.0);gl_FragColor=vec4(0.38,0.7,1.0,rim*0.28);}`}));root.add(atmosphere);
    const canvas=document.createElement("canvas");canvas.width=512;canvas.height=256;const ctx=canvas.getContext("2d")!;
    // Deterministic, soft cloud bands; no remote cloud service or texture downloads.
    for(let i=0;i<55;i++){const x=(i*137.5)%512,y=40+(i*73.7)%176;const gradient=ctx.createRadialGradient(x,y,0,x,y,24);gradient.addColorStop(0,"rgba(255,255,255,.25)");gradient.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=gradient;ctx.fillRect(x-24,y-24,48,48);}
    cloudTexture=new T.CanvasTexture(canvas);clouds=new T.Mesh(new T.SphereGeometry(1.362,40,28),new T.MeshStandardMaterial({map:cloudTexture,transparent:true,opacity:.6,depthWrite:false}));root.add(clouds);
    plane=aircraft();plane.scale.setScalar(.32);root.add(plane);
    const points=[];for(let i=0;i<=160;i++){const a=i/160*Math.PI*2;points.push(new T.Vector3(-Math.cos(a)*1.6,-Math.cos(a)*.9,Math.sin(a)*1.8));}
    const orbit=new T.Line(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:0x9a7358,transparent:true,opacity:.24}));root.add(orbit);
  } else {
    objects=journeyObjects(texture);objects.groups.forEach(group=>root.add(group));root.add(objects.shared);
    const base=new T.Mesh(new T.CylinderGeometry(1.7,1.8,.12,56),material("#274765"));base.position.y=-1.12;root.add(base);root.rotation.y=-.1;
  }
  let disposed=false,paused=false,visible=false,frame=0,last=0,frames=0,windowStart=0,quality=0;
  let orbits=0;
  const clock={angle:.6};let orbitTween:gsap.core.Tween|undefined;
  const controller:TravelController={setProgress, setPaused(value){paused=value;sync();},dispose};
  const fallback=()=>{dispose();onFallback();};
  function requestRender(){if(disposed||!visible||document.hidden||frame)return;frame=requestAnimationFrame(render);}
  function render(now:number){
    frame=0;if(disposed||!visible||document.hidden)return;
    renderer.render(scene,camera);
    // Count sustained active rendering only; gaps from on-demand rendering reset the sample.
    if(!windowStart||now-last>200){windowStart=now;frames=0;}
    last=now;frames++;
    if(now-windowStart>=2400){const fps=frames*1000/(now-windowStart);frames=0;windowStart=now;
      if(fps<30&&quality===0){quality=1;renderer.setPixelRatio(.8);if(clouds)clouds.visible=false;resize();}
      else if(fps<24&&quality===1){fallback();}
    }
  }
  function resize(){const {width,height}=host.getBoundingClientRect();if(!width||!height||disposed)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();requestRender();}
  function updateFlight(){if(!plane||!earth)return;const a=clock.angle;
    // Front half climbs from lower left to upper right; return passes behind the globe.
    plane.position.set(-Math.cos(a)*1.6,-Math.cos(a)*.9,Math.sin(a)*1.8);
    const tangent=new T.Vector3(Math.sin(a)*1.6,Math.sin(a)*.9,Math.cos(a)*1.8).normalize();
    const roof=plane.position.clone().normalize();const side=new T.Vector3().crossVectors(roof,tangent).normalize();const up=new T.Vector3().crossVectors(tangent,side).normalize();
    plane.quaternion.setFromRotationMatrix(new T.Matrix4().makeBasis(tangent,side,up));
    earth.rotation.y=-1.8+(a-.6+orbits*Math.PI*2)*.15;if(clouds)clouds.rotation.y=(a-.6+orbits*Math.PI*2)*.19;requestRender();
  }
  function fade(group:T.Group,alpha:number){group.visible=alpha>.001;if(!group.visible)return;group.traverse(node=>{if(node instanceof T.Mesh){const mats=Array.isArray(node.material)?node.material:[node.material];mats.forEach(mat=>{mat.transparent=alpha<1;mat.opacity=alpha;mat.depthWrite=alpha>.5;});}});}
  function setProgress(value:number){if(!objects||disposed)return;const state=journeyState(value);const t=Math.min(1,(value*5-state.index)/.7);
    objects.groups.forEach((group,index)=>{const alpha=index===state.index?1-state.mix:index===state.next?state.mix:0;fade(group,alpha);group.position.x=index===state.index?-state.mix*.35:(1-state.mix)*.35;group.scale.setScalar(.95+alpha*.05);});
    objects.animate(state.index,Math.max(0,t),state.mix);
    // The same document bridges shortlisting, application and preparation.
    objects.shared.scale.setScalar(.8*(1-(state.index===3?state.mix:0)));requestRender();
  }
  function sync(){if(disposed)return;const active=visible&&!document.hidden;
    if(active&&!paused)orbitTween?.resume();else orbitTween?.pause();
    if(!active){cancelAnimationFrame(frame);frame=0;last=0;windowStart=0;gsap.killTweensOf(root.rotation);}else requestRender();
  }
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();});
  const resizeObserver=new ResizeObserver(resize);
  const move=(event:PointerEvent)=>{if(mode!=="hero"||event.pointerType!=="mouse"||paused||!visible)return;const r=host.getBoundingClientRect();gsap.to(root.rotation,{x:((event.clientY-r.top)/r.height-.5)*.08,y:((event.clientX-r.left)/r.width-.5)*.1,duration:.6,overwrite:true,onUpdate:requestRender});};
  const leave=()=>{if(mode==="hero")gsap.to(root.rotation,{x:0,y:0,duration:.6,overwrite:true,onUpdate:requestRender});};
  const lost=(event:Event)=>{event.preventDefault();fallback();};
  function dispose(){if(disposed)return;disposed=true;orbitTween?.kill();gsap.killTweensOf(root.rotation);cancelAnimationFrame(frame);observer.disconnect();resizeObserver.disconnect();document.removeEventListener("visibilitychange",sync);host.removeEventListener("pointermove",move);host.removeEventListener("pointerleave",leave);renderer.domElement.removeEventListener("webglcontextlost",lost);
    const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>();scene.traverse(node=>{if(node instanceof T.Mesh||node instanceof T.Line){geometries.add(node.geometry);(Array.isArray(node.material)?node.material:[node.material]).forEach(mat=>materials.add(mat));}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());texture.dispose();cloudTexture?.dispose();renderer.dispose();renderer.domElement.remove();}
  try {
    renderer.domElement.className="travel-canvas";host.appendChild(renderer.domElement);resize();
    if(mode==="hero"){updateFlight();orbitTween=gsap.to(clock,{angle:.6+Math.PI*2,duration:24,repeat:-1,onRepeat:()=>{orbits++;},ease:"none",paused:true,onUpdate:updateFlight});}else setProgress(0);
    renderer.render(scene,camera);observer.observe(host);resizeObserver.observe(host);document.addEventListener("visibilitychange",sync);host.addEventListener("pointermove",move);host.addEventListener("pointerleave",leave);renderer.domElement.addEventListener("webglcontextlost",lost);
  }catch(error){dispose();throw error;}
  return controller;
}
