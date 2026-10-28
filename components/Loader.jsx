'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
export default function Loader(){
 const r=useRef(),[n,setN]=useState(0),[done,setDone]=useState(false)
 useEffect(()=>{
  if(sessionStorage.getItem('wl')){setDone(true);return}
  const o={v:0}
  gsap.to(o,{v:100,duration:1.6,ease:'power2.inOut',onUpdate:()=>setN(Math.round(o.v)),
   onComplete:()=>gsap.to(r.current,{yPercent:-100,duration:.9,ease:'expo.inOut',onComplete:()=>{sessionStorage.setItem('wl','1');setDone(true)}})})
 },[])
 if(done)return null
 return <div className="loader" ref={r}><div className="ln">{String(n).padStart(3,'0')}</div><div className="lt">{n.toString(2).padStart(8,'0')}</div><div className="lt">WALLU GROUP — SYSTÈME EN LIGNE</div></div>
}
