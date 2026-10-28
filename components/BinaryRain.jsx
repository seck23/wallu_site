'use client'
import { useEffect, useRef } from 'react'
export default function BinaryRain(){
 const r=useRef()
 useEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
  const c=r.current,x=c.getContext('2d'),S=24,L=16,LH=19;let W,H,cols,raf,v=0,last=scrollY
  const size=()=>{W=c.width=innerWidth;H=c.height=innerHeight;cols=Array.from({length:Math.ceil(W/S)},()=>({y:Math.random()*H,s:.7+Math.random()*1.6}))}
  size();addEventListener('resize',size)
  const loop=t=>{
   v+=(Math.abs(scrollY-last)-v)*.1;last=scrollY
   x.clearRect(0,0,W,H);x.font='15px monospace'
   const m=getComputedStyle(document.body).color.match(/\d+/g)||[255,255,255]
   cols.forEach((o,i)=>{
    o.y+=o.s*(1+v*.15);if(o.y>H+L*LH)o.y=-20
    for(let k=0;k<L;k++){const yy=o.y-k*LH;if(yy<0||yy>H)continue
     const h=Math.imul(i+1,73856093)^Math.imul(k+1+(k%3===0?(t/800|0):0),19349663)
     x.fillStyle=k===0?'rgba(242,184,75,.95)':`rgba(${m[0]},${m[1]},${m[2]},${(1-k/L)*.6})`
     x.fillText((h>>>5)&1?'1':'0',i*S,yy)}
   })
   raf=requestAnimationFrame(loop)}
  raf=requestAnimationFrame(loop)
  return()=>{cancelAnimationFrame(raf);removeEventListener('resize',size)}
 },[])
 return <canvas ref={r} className="rain"/>
}
