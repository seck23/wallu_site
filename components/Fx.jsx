'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export const Chars=({t})=>[...t].map((c,i)=><span className="ch" key={i}><i>{c}</i></span>)
export function Rise({children,className=''}){
 const r=useRef()
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger)
  const c=gsap.context(()=>gsap.from(r.current.children,{y:70,opacity:0,duration:1,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:r.current,start:'top 85%'}}),r)
  return()=>c.revert()},[])
 return <div ref={r} className={className}>{children}</div>
}
export function Words({text,className=''}){
 const r=useRef()
 useEffect(()=>{gsap.registerPlugin(ScrollTrigger)
  const c=gsap.context(()=>gsap.to('.w',{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:r.current,start:'top 78%',end:'bottom 45%',scrub:true}}),r)
  return()=>c.revert()},[])
 return <p ref={r} className={className}>{text.split(' ').map((w,i)=><span className="w" key={i}>{w} </span>)}</p>
}
export function Btn({href,children}){
 const r=useRef()
 const mv=e=>{const b=r.current.getBoundingClientRect();gsap.to(r.current,{x:(e.clientX-b.left-b.width/2)*.35,y:(e.clientY-b.top-b.height/2)*.35,duration:.4})}
 const lv=()=>gsap.to(r.current,{x:0,y:0,duration:1,ease:'elastic.out(1,.4)'})
 return <a ref={r} href={href} className="btn" onMouseMove={mv} onMouseLeave={lv}>{children}</a>
}
