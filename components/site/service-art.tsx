const paths=[
  "M18 16h28v22H30l-10 8v-8h-2Z M26 24h12m-12 7h8",
  "M15 19h14v27H15Zm20-6h14v33H35ZM11 50h42M20 25h4m-4 7h4m16-12h4m-4 8h4m-4 8h4",
  "M20 12h18l10 10v29H20ZM38 12v12h10M27 32h13m-13 8h10",
  "M17 47l5-15 23-22 8 8-23 23ZM22 32l8 9M15 52h36",
  "m11 25 21-12 21 12-21 12ZM20 31v13q12 9 24 0V31M52 25v20",
  "M14 22h37v27H14ZM19 22v-8h26v8M42 32h10v9H42Z M21 33h10m-10 7h6",
  "M19 12h27v40H19Z M24 18h17M24 46h17 M39 31a7 7 0 1 1-14 0 7 7 0 0 1 14 0ZM32 24v14m-7-7h14",
  "m12 29 20-17 20 17M18 26v25h28V26M28 51V36h9v15",
  "M20 24h25v26H20ZM27 24v-8h11v8M25 29v16m15-16v16M24 51v3m17-3v3",
];
export function ServiceArt({index}:{index:number}){return <svg viewBox="0 0 64 64" aria-hidden="true" className="service-art"><circle cx="32" cy="32" r="29" fill="#edf3f7"/><path d={paths[index%paths.length]} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;}
