'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scene } from '@/lib/scene'
export default function Section({bg='#0b2540',ink='#ffffff',m=0,s=0,x=0,className='',children,...p}){
 const ref=useRef()
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  const d={bg,ink,m,s,x}
  if(ref.current.getBoundingClientRect().top<innerHeight*.5)setTimeout(()=>scene.set(d),50)
  const t=ScrollTrigger.create({trigger:ref.current,start:'top 50%',end:'bottom 50%',onToggle:v=>v.isActive&&scene.set(d)})
  return()=>t.kill()
 },[])
 return <section ref={ref} className={className} {...p}>{children}</section>
}
