'use client'
import { useEffect, useRef, useState } from 'react'
const T=['> wallu --init','[ok] vr.engine ....... immersion chargée','[ok] ia.model ......... assistants en ligne','[ok] num.platform ..... services déployés','> deploy --cible=dakar'].join('\n')
export default function Terminal(){
 const r=useRef(),[n,setN]=useState(0)
 useEffect(()=>{
  let t;const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect()
   let i=0;t=setInterval(()=>{i++;setN(i);if(i>=T.length)clearInterval(t)},35)},{threshold:.5})
  io.observe(r.current);return()=>{io.disconnect();clearInterval(t)}},[])
 return <pre ref={r} className="term">{T.slice(0,n).split(/(\[ok\])/).map((s,i)=>s==='[ok]'?<span key={i} className="okc">{s}</span>:s)}<b className="caret"/></pre>
}
