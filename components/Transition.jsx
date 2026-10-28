'use client'
import { useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
const rows=Array.from({length:22},(_,r)=>Array.from({length:70},(_,c)=>((Math.imul(r+1,2654435761)^Math.imul(c+1,40503))>>>7)&1).join(''))
export default function Transition(){
 const ref=useRef(),first=useRef(true),path=usePathname()
 useLayoutEffect(()=>{
  if(first.current){first.current=false;return}
  const o=ref.current;gsap.killTweensOf(o);gsap.set(o,{yPercent:0,display:'flex'})
  gsap.to(o,{yPercent:-100,duration:.9,ease:'expo.inOut',delay:.25,onComplete:()=>gsap.set(o,{display:'none'})})
 },[path])
 return <div className="wipe" ref={ref} aria-hidden="true">{rows.map((r,i)=><div key={i}>{r}</div>)}</div>
}
