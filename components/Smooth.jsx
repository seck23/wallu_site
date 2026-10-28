'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
let lenis
export default function Smooth(){
 const path=usePathname()
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return
  lenis=new Lenis({lerp:.08});lenis.on('scroll',ScrollTrigger.update)
  const f=t=>lenis.raf(t*1000);gsap.ticker.add(f);gsap.ticker.lagSmoothing(0)
  return()=>{gsap.ticker.remove(f);lenis.destroy();lenis=null}
 },[])
 useEffect(()=>{lenis?lenis.scrollTo(0,{immediate:true}):scrollTo(0,0);setTimeout(()=>ScrollTrigger.refresh(),150)},[path])
 return null
}
