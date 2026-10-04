import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
const code=ts.transpileModule(await readFile(new URL('../lib/journey-state.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {journeyState,journeyIds}=await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
assert.equal(journeyState(-1).active,0);
assert.equal(journeyState(NaN).active,0);
assert.equal(journeyState(2).active,4);
for(let stage=0;stage<4;stage++){
  assert.equal(journeyState((stage+.5)/5).mix,0);
  const mid=journeyState((stage+.85)/5);
  assert.ok(Math.abs(mid.mix-.5)<1e-10);
  const before=journeyState((stage+1)/5-1e-7),after=journeyState((stage+1)/5);
  assert.equal(before.next,after.index);
  assert.ok(before.mix>.999);
}
const forward=Array.from({length:501},(_,i)=>journeyState(i/500));
assert.deepEqual([...new Set(forward.map(s=>journeyIds[s.active]))],journeyIds);
assert.deepEqual([...new Set([...forward].reverse().map(s=>journeyIds[s.active]))],[...journeyIds].reverse());
for(const state of forward)assert.ok(state.mix>=0&&state.mix<=1);
console.log('Journey holds, crossfades, boundary continuity, clamping and reverse progression passed.');
