'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Section from './Section'
import { Chars } from './Fx'
import { RobotFig, VRFig } from './Figures'
export default function Hero(){
 const r=useRef()
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger)
  const c=gsap.context(()=>{
   const d=sessionStorage.getItem('wl');gsap.from('.fig',{opacity:0,y:80,duration:1.6,ease:'expo.out',delay:d?.4:2.5});gsap.from('.ch i',{yPercent:115,duration:1.3,stagger:.06,ease:'expo.out',delay:(typeof sessionStorage!=='undefined'&&sessionStorage.getItem('wl'))?.2:2.3})
   gsap.timeline({scrollTrigger:{trigger:r.current,start:'top top',end:'+=130%',scrub:1,pin:true}})
    .to('#ht',{scale:.2,ease:'none'},0).to('.fig.l',{x:'7vw',scale:1.1,ease:'none'},0).to('.fig.r',{x:'-7vw',scale:1.1,ease:'none'},0).to('.hint',{opacity:0,duration:.2},0).to('.sub',{opacity:1,duration:.35},.55)
  },r);return()=>c.revert()},[])
 return <div><div ref={r}><Section className="hero">
  <RobotFig className="l"/><VRFig className="r"/><h1 id="ht"><span className="split"><Chars t="Wallu"/></span><span className="split"><Chars t="Group"/></span></h1>
  <p className="sub">Une équipe d’ingénieurs à Dakar qui construit l’IA, la réalité virtuelle et le numérique de demain.</p>
  <div className="hint">Défiler ↓</div></Section></div></div>
}
