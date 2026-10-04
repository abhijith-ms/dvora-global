import { useId } from "react";

export function TravelArt({ stage = 4, hero = false }: { stage?: number; hero?: boolean }) {
  const id = useId().replace(/:/g, "");
  return <svg viewBox="0 0 600 440" fill="none" aria-hidden="true" className="travel-art">
    <defs>
      <radialGradient id={`${id}sea`} cx=".32" cy=".26"><stop stopColor="#6eaacd"/><stop offset=".6" stopColor="#276793"/><stop offset="1" stopColor="#122b50"/></radialGradient>
      <linearGradient id={`${id}paper`} x2="1" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#c7d8e9"/></linearGradient>
      <clipPath id={`${id}globe`}><circle cx="300" cy="212" r="139"/></clipPath>
    </defs>
    <ellipse cx="303" cy="390" rx="178" ry="17" fill="#071323" opacity=".12"/>
    {(hero || stage === 1 || stage === 4) && <g transform={hero ? undefined : "translate(0 25) scale(.88)"}>
      <circle cx="300" cy="212" r="147" stroke="#a6d7f5" strokeOpacity=".4" strokeWidth="8"/>
      <circle cx="300" cy="212" r="139" fill={`url(#${id}sea)`}/>
      <g clipPath={`url(#${id}globe)`} fill="#8ca78d">
        <path d="m252 94 31 6 8 21 24 4 9 17-18 16-34-5-8 19-32-1-9-30 12-15-3-22Z"/>
        <path d="m261 169 47-3 31 23 9 28-16 24-12 45-24 21-17-30-8-28-20-10-18-35 4-23Z"/>
        <path d="m317 104 58-34 69 20 37 58-19 36-55 3-12 30-32-3-17-45-27-17-13-25Z"/>
        <path d="m158 110 37-28 30 18-10 29-38 9-6 32-18-8Z M151 201l40 11 21 40-10 51-23 31-15-57Z"/>
      </g>
      <ellipse cx="300" cy="213" rx="196" ry="64" stroke="#d9a181" strokeWidth="1.5" transform="rotate(-24 300 213)"/>
    </g>}
    {!hero && stage === 0 && <g>
      <rect x="147" y="90" width="210" height="265" rx="16" fill="#315474" transform="rotate(-9 147 90)"/>
      <rect x="185" y="102" width="208" height="252" rx="14" fill={`url(#${id}paper)`}/>
      <circle cx="285" cy="174" r="26" fill="#a4bacd"/><path d="M240 237q0-45 45-45t45 45" fill="#7898b2"/>
      <path d="M219 271h135m-135 25h100" stroke="#97adbf" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="410" cy="290" r="58" fill="#c88961"/><circle cx="410" cy="290" r="48" fill="#faf8f4"/><path d="m410 250 15 48-15 31-15-48Z" fill="#183553"/>
    </g>}
    {!hero && stage === 1 && <g transform="translate(350 170) rotate(8)"><rect width="147" height="175" rx="12" fill={`url(#${id}paper)`}/><path d="M24 46h98m-98 26h80m-80 49h98" stroke="#7b9ab4" strokeWidth="7"/><path d="m21 94 45-23 48 23-48 20Z" fill="#193a5c"/></g>}
    {!hero && stage === 2 && <g>
      <path d="M120 148h120l23 25h213v176H120Z" fill="#cf936f"/>
      <rect x="194" y="81" width="207" height="227" rx="12" fill={`url(#${id}paper)`} transform="rotate(6 194 81)"/>
      <path d="m224 126 121 13m-125 23 121 13m-125 23 121 13" stroke="#9eb2c2" strokeWidth="8"/>
      <path d="m120 230 356-10-21 148H141Z" fill="#345a7e"/>
      <path d="m420 106 16 7-39 93-18 18 2-26Z" fill="#193754"/>
    </g>}
    {!hero && stage === 3 && <g>
      <path d="M242 134v-23q0-18 18-18h71q18 0 18 18v23" stroke="#bb8c67" strokeWidth="13"/>
      <rect x="172" y="136" width="247" height="222" rx="24" fill="#416c8b"/>
      <path d="M228 157v176m136-176v176" stroke="#8fa9be" strokeWidth="7"/>
      <circle cx="215" cy="366" r="12" fill="#152e49"/><circle cx="375" cy="366" r="12" fill="#152e49"/>
      <rect x="357" y="228" width="90" height="122" rx="8" fill="#c58b66" transform="rotate(12 357 228)"/>
      <rect x="120" y="189" width="103" height="142" rx="8" fill={`url(#${id}paper)`} transform="rotate(-9 120 189)"/>
      <path d="m145 230 9 9 15-21m-19 46 9 9 15-21" stroke="#42647e" strokeWidth="4"/>
    </g>}
    {(hero || stage === 4) && <g transform="translate(410 130) rotate(-25)">
      <path d="M-87 0q3-14 30-14h31L6-88l18-2-12 76h55q33 0 39 14-6 14-39 14H12l12 76-18-2-32-74h-31q-27 0-30-14Z" fill={`url(#${id}paper)`} stroke="#a9becd" strokeWidth="2"/>
      <path d="m-70-10-14-27h14l25 26m-25 21-14 27h14l25-26" fill="#173755"/>
      <path d="m73-9 15 4v10l-15 4" fill="#244664"/><path d="M-24-8h73" stroke="#476c89" strokeWidth="3" strokeDasharray="3 6"/>
    </g>}
  </svg>;
}
