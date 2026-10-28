'use client'
import { useEffect, useRef, useState } from 'react'
const CH='01'
export default function Scramble({text,auto=false,className=''}){
 const [s,setS]=useState(text),id=useRef()
 const run=()=>{let f=0;clearInterval(id.current);id.current=setInterval(()=>{f++
  setS([...text].map((c,i)=>c===' '||f>i*1.2+3?c:CH[Math.random()*CH.length|0]).join(''))
  if(f>text.length*1.2+4){clearInterval(id.current);setS(text)}},30)}
 useEffect(()=>{if(auto)run();return()=>clearInterval(id.current)},[])
 return <span className={className} onMouseEnter={run}>{s}</span>
}
