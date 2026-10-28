'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
export default function Hud(){
 const [p,setP]=useState(0),cur=useRef()
 useEffect(()=>{
  const sc=()=>setP(Math.round(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100))
  addEventListener('scroll',sc,{passive:true});sc()
  let mv,hv
  if(matchMedia('(hover:hover)').matches){
   const qx=gsap.quickTo(cur.current,'x',{duration:.2}),qy=gsap.quickTo(cur.current,'y',{duration:.2})
   mv=e=>{qx(e.clientX);qy(e.clientY)};hv=e=>cur.current.classList.toggle('on',!!e.target.closest('a,button,.spot'))
   addEventListener('pointermove',mv);addEventListener('pointerover',hv)
  }
  return()=>{removeEventListener('scroll',sc);mv&&removeEventListener('pointermove',mv);hv&&removeEventListener('pointerover',hv)}
 },[])
 return <>
  <div className="cur" ref={cur}/>
  <div className="hud"><i className="c1"/><i className="c2"/><i className="c3"/><i className="c4"/><span className="bar" style={{width:p+'%'}}/></div>
 </>
}
