import * as T from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export function material(color: string, metalness = 0, roughness = .55) {
  return new T.MeshStandardMaterial({ color, metalness, roughness });
}
export function earthMaterial(texture:T.Texture) {
  const mat=new T.MeshStandardMaterial({map:texture,roughness:.7,metalness:0});
  // Blue Marble land imagery encodes deep water almost black. Tint only those
  // dark texels to daylight ocean blue while preserving the land photograph.
  mat.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
    float land = smoothstep(0.008, 0.045, max(diffuseColor.r, max(diffuseColor.g,diffuseColor.b)));
    diffuseColor.rgb = mix(vec3(0.025,0.115,0.235), diffuseColor.rgb, land);`);};
  mat.customProgramCacheKey=()=>"dvora-daylight-earth";
  return mat;
}
export function box(parent: T.Object3D, size: number[], position: number[], color: string) {
  const mesh = new T.Mesh(new RoundedBoxGeometry(size[0],size[1],size[2],2,.035), material(color));
  mesh.position.set(position[0],position[1],position[2]); parent.add(mesh); return mesh;
}
function sphere(parent: T.Object3D, scale: number[], position: number[], color: string) {
  const mesh = new T.Mesh(new T.SphereGeometry(1,24,16), material(color));
  mesh.scale.set(scale[0],scale[1],scale[2]); mesh.position.set(position[0],position[1],position[2]);parent.add(mesh);return mesh;
}
function wing(parent: T.Object3D, points: number[][], color: string) {
  const shape = new T.Shape();points.forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();
  const mesh = new T.Mesh(new T.ExtrudeGeometry(shape,{depth:.035,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:1,steps:1}),material(color,.15,.35));
  parent.add(mesh); return mesh;
}
/** Aircraft points along local +X; wings span Y and its roof faces +Z. */
export function aircraft() {
  const plane = new T.Group();
  sphere(plane,[1.4,.145,.15],[0,0,0],"#f5f6f6");
  wing(plane,[[.28,.08],[-.42,1.17],[-.77,1.24],[-.45,.05]],"#e7eef3");
  wing(plane,[[.28,-.08],[-.42,-1.17],[-.77,-1.24],[-.45,-.05]],"#e7eef3");
  wing(plane,[[-.8,.05],[-1.13,.49],[-1.35,.5],[-1.17,0]],"#234968");
  wing(plane,[[-.8,-.05],[-1.13,-.49],[-1.35,-.5],[-1.17,0]],"#234968");
  const tail=wing(plane,[[-.75,.07],[-1.14,.64],[-1.34,.66],[-1.23,0]],"#173654");tail.rotation.x=Math.PI/2;
  for (const sign of [-1,1]) {
    const engine = new T.Mesh(new T.CylinderGeometry(.12,.13,.43,20),material("#dde4eb",.25,.3)); engine.rotation.z=Math.PI/2;engine.position.set(.02,sign*.48,-.16);plane.add(engine);
    const inlet = new T.Mesh(new T.CircleGeometry(.085,20),material("#152735"));inlet.rotation.y=Math.PI/2;inlet.position.set(.24,sign*.48,-.16);plane.add(inlet);
    for(let i=0;i<13;i++) sphere(plane,[.021,.009,.029],[.76-i*.11,sign*.14,.027],"#23415b");
    sphere(plane,[.145,.035,.047],[1.08,sign*.055,.08],"#17364d");
  }
  return plane;
}
export function documentCard() {
  const card = new T.Group();box(card,[1,1.35,.065],[0,0,0],"#f4f5ef");
  box(card,[.52,.06,.025],[-.1,.42,.045],"#406681");
  for(let i=0;i<4;i++)box(card,[i===3?.42:.72,.025,.02],[i===3?-.15:0,.17-i*.16,.045],"#a4b7c6");return card;
}
function wallet() { const g=new T.Group(); box(g,[.65,.9,.11],[0,0,0],"#b47b52");const ring=new T.Mesh(new T.TorusGeometry(.14,.012,8,32),material("#e4c18d",.35));ring.position.z=.065;g.add(ring);return g; }
function suitcase() {
  const g=new T.Group();box(g,[1.8,1.5,.55],[0,0,0],"#46738c");
  for(const x of [-.6,-.3,0,.3,.6])box(g,[.045,1.15,.025],[x,0,.29],"#7497aa");
  box(g,[.7,.09,.12],[0,.94,0],"#cea782");for(const x of [-.32,.32])box(g,[.065,.24,.1],[x,.82,0],"#213c55");
  for(const x of [-.62,.62])sphere(g,[.1,.1,.1],[x,-.82,0],"#132a3e");return g;
}
export function journeyObjects(texture: T.Texture) {
  const groups = Array.from({length:5},()=>new T.Group());
  const [discover,explore,apply,prepare,depart]=groups;
  box(discover,[1.3,1.7,.16],[-.4,0,-.18],"#31516d").rotation.z=-.12;
  const profile=documentCard();profile.position.set(-.12,.1,.08);discover.add(profile);
  sphere(profile,[.12,.12,.03],[0,.2,.07],"#8aa7bc");box(profile,[.36,.12,.035],[0,-.02,.07],"#668aa4");
  const compass = new T.Group();const dial=new T.Mesh(new T.CylinderGeometry(.43,.43,.09,40),material("#d0a276",.4));dial.rotation.x=Math.PI/2;compass.add(dial);
  const face=new T.Mesh(new T.CircleGeometry(.36,40),material("#fbf7e9"));face.position.z=.05;compass.add(face);
  const needle=wing(compass,[[0,.29],[.075,0],[0,-.26],[-.075,0]],"#203e5b");needle.position.z=.07;
  compass.position.set(.85,-.42,.3);discover.add(compass);
  const globeMaterial=earthMaterial(texture);
  const globe=new T.Mesh(new T.SphereGeometry(.76,40,28),globeMaterial);globe.position.set(-.55,.1,-.16);globe.rotation.y=-1.8;explore.add(globe);
  const cards:T.Group[]=[];for(let i=0;i<3;i++){const card=documentCard();card.scale.setScalar(.64);card.position.set(.35+i*.28,-.08+i*.12,.18+i*.09);card.rotation.z=-.12+i*.14;explore.add(card);cards.push(card);}
  box(apply,[2.1,1.45,.12],[0,-.05,-.2],"#d1a07a");box(apply,[.7,.22,.1],[-.65,.72,-.2],"#d1a07a");
  const folderFront=box(apply,[2.1,1.03,.14],[0,-.28,.18],"#345d80");folderFront.rotation.x=-.12;
  const pen=box(apply,[.07,1.3,.07],[1,.2,.36],"#e2bf93");pen.rotation.z=-.4;
  const bag=suitcase();bag.position.y=-.02;prepare.add(bag);
  const lid=box(prepare,[1.8,1.48,.09],[0,.2,-.43],"#2f536c");lid.rotation.x=-.7;
  const passport=wallet();passport.position.set(.85,-.35,.42);passport.rotation.z=-.15;prepare.add(passport);
  const checklist=documentCard();checklist.scale.setScalar(.65);checklist.position.set(-.8,.25,.48);checklist.rotation.z=.12;prepare.add(checklist);
  const earth=new T.Mesh(new T.SphereGeometry(.7,40,28),earthMaterial(texture));earth.position.set(-.6,-.3,-.4);earth.rotation.y=-1.8;depart.add(earth);
  const plane=aircraft();plane.scale.setScalar(.64);plane.rotation.set(-.32,-.25,.26);depart.add(plane);
  const shared=documentCard();shared.scale.setScalar(.8);
  return {groups,shared,animate(index:number,t:number,mix=0){
    needle.rotation.z=-.5+t*.5;
    cards.forEach((card,i)=>{card.position.z=.18+i*.09+(i>0?t*.17:0);});
    lid.rotation.x=-.7+t*.7;lid.position.y=.2-t*.2;lid.position.z=-.43+t*.75;
    checklist.position.y=.35-t*.3;
    plane.position.set(-.1+t*.65,.06+t*.55,.55);plane.rotation.z=.18+t*.12;
    shared.visible=index<4;
    const poses=[[-.12,.12,.1],[.65,.05,.58],[0,.55,.04],[-.72,.2,.53]];
    const p=poses[Math.min(index,3)],next=poses[Math.min(index+1,3)];shared.position.set(p[0]+(next[0]-p[0])*mix,p[1]+(next[1]-p[1])*mix,p[2]+(next[2]-p[2])*mix);shared.rotation.z=index===1?-.1:index===3?.12:0;
  }};
}
