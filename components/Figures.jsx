const P={fill:'none',stroke:'currentColor',strokeWidth:3,strokeLinecap:'round',strokeLinejoin:'round'}
export const RobotFig=({className=''})=><svg viewBox="0 0 240 330" className={'fig '+className} {...P}>
 <g className="bob">
  <path d="M120 40V20"/><circle cx="120" cy="12" r="6" fill="currentColor" className="pulse"/>
  <rect x="70" y="40" width="100" height="80" rx="24"/>
  <rect x="88" y="68" width="26" height="18" rx="7" fill="currentColor" className="blink"/><rect x="126" y="68" width="26" height="18" rx="7" fill="currentColor" className="blink"/>
  <path d="M100 102h40" opacity=".6"/><rect x="54" y="64" width="12" height="32" rx="5"/><rect x="174" y="64" width="12" height="32" rx="5"/>
  <path d="M120 120v14"/><rect x="62" y="134" width="116" height="112" rx="26"/>
  <rect x="92" y="164" width="56" height="38" rx="9" opacity=".7"/>
  <text x="120" y="190" textAnchor="middle" fontSize="20" fontFamily="monospace" fill="currentColor" stroke="none" className="pulse">01</text>
  <circle cx="82" cy="222" r="4" fill="currentColor" className="pulse"/><circle cx="158" cy="222" r="4" fill="currentColor" className="pulse"/>
  <path d="M62 158q-30 10-30 52"/><circle cx="32" cy="216" r="9"/>
  <g className="wv"><path d="M178 156l36-28"/><circle cx="220" cy="122" r="9"/></g>
  <rect x="84" y="246" width="28" height="58" rx="11"/><rect x="128" y="246" width="28" height="58" rx="11"/>
  <rect x="74" y="302" width="42" height="16" rx="8"/><rect x="124" y="302" width="42" height="16" rx="8"/>
 </g></svg>
export const VRFig=({className=''})=><svg viewBox="0 0 240 330" className={'fig '+className} {...P}>
 <g className="bob">
  <g className="head">
   <circle cx="120" cy="72" r="36"/><path d="M104 100q16 9 32 0" opacity=".7"/>
   <rect x="78" y="52" width="84" height="36" rx="15" fill="currentColor" fillOpacity=".18"/>
   <path d="M78 66q-10 4-10 10t10 10M162 66q10 4 10 10t-10 10" opacity=".7"/>
   <path d="M88 70h64" className="scan"/><circle cx="104" cy="70" r="5" fill="currentColor" className="pulse"/><circle cx="136" cy="70" r="5" fill="currentColor" className="pulse"/>
  </g>
  <rect x="110" y="108" width="20" height="16" rx="6"/><rect x="70" y="124" width="100" height="100" rx="24"/><path d="M104 124q16 14 32 0" opacity=".6"/>
  <g className="aL"><path d="M74 142l-42-34"/><circle cx="26" cy="102" r="9"/></g>
  <g className="aR"><path d="M166 142l42-34"/><circle cx="214" cy="102" r="9"/></g>
  <rect x="84" y="224" width="28" height="70" rx="12"/><rect x="128" y="224" width="28" height="70" rx="12"/>
  <rect x="76" y="292" width="40" height="16" rx="8"/><rect x="124" y="292" width="40" height="16" rx="8"/>
  <g className="fl"><g className="holo"><rect x="6" y="40" width="26" height="26"/><rect x="14" y="32" width="26" height="26" opacity=".6"/><path d="M6 40l8-8M32 40l8-8M6 66l8-8M32 66l8-8" opacity=".6"/></g></g>
  <g className="fl2"><g className="holo"><path d="M204 44l18 10v20l-18 10-18-10V54z"/><path d="M204 44v20M186 54l18 10 18-10" opacity=".6"/></g></g>
 </g></svg>
