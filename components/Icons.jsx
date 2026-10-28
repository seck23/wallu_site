const P={fill:'none',stroke:'currentColor',strokeWidth:3,strokeLinecap:'round',strokeLinejoin:'round'}
export const Headset=()=><svg viewBox="0 0 200 120" className="ico fl" {...P}>
 <path d="M30 40c0-12 8-20 22-20h96c14 0 22 8 22 20v34c0 12-8 20-20 20h-26l-12-14h-24l-12 14H50c-12 0-20-8-20-20z"/>
 <circle cx="72" cy="58" r="18" className="lens"/><circle cx="128" cy="58" r="18" className="lens"/>
 <circle cx="72" cy="58" r="6" fill="currentColor" className="pulse"/><circle cx="128" cy="58" r="6" fill="currentColor" className="pulse"/>
 <path d="M30 52H14v20h16M170 52h16v20h-16M70 20c0-14 60-14 60 0" opacity=".6"/></svg>
export const Robot=()=><svg viewBox="0 0 160 160" className="ico fl2" {...P}>
 <path d="M80 12v16"/><circle cx="80" cy="8" r="5" fill="currentColor" className="pulse"/>
 <rect x="32" y="28" width="96" height="72" rx="20"/>
 <rect x="48" y="52" width="24" height="16" rx="6" fill="currentColor" className="blink"/><rect x="88" y="52" width="24" height="16" rx="6" fill="currentColor" className="blink"/>
 <path d="M60 86h40M68 92h24" opacity=".6"/><path d="M20 54v26M140 54v26M52 100v10h56v-10M36 152c0-22 18-38 44-38s44 16 44 38"/></svg>
export const Chip=()=><svg viewBox="0 0 160 160" className="ico fl" {...P}>
 <rect x="40" y="40" width="80" height="80" rx="10"/><rect x="62" y="62" width="36" height="36" rx="4" className="lens"/>
 <path d="M60 40V20M80 40V20M100 40V20M60 120v20M80 120v20M100 120v20M40 60H20M40 80H20M40 100H20M120 60h20M120 80h20M120 100h20"/>
 <text x="80" y="87" textAnchor="middle" fontSize="20" fill="currentColor" stroke="none" fontFamily="monospace" className="pulse">01</text></svg>
