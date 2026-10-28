'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { projets, mission, vision } from '@/lib/data'
const PAGES={home:'/',accueil:'/','a-propos':'/a-propos',apropos:'/a-propos',projets:'/projets',equipe:'/equipe','équipe':'/equipe',distinctions:'/distinctions',contact:'/contact'}
const HELP=['Commandes :','  projets          liste des projets','  projet <nom>     ouvrir un projet','  ouvrir <page>    home, a-propos, projets, equipe, distinctions, contact','  mission · vision','  clear            vider l’écran','Ou posez directement une question à l’assistant.']
export default function CmdTerminal(){
 const [open,setOpen]=useState(false),[L,setL]=useState([{k:'ok',t:'WALLU-AI en ligne. Tapez "aide".'}]),[v,setV]=useState(''),[busy,setBusy]=useState(false)
 const end=useRef(),inp=useRef(),chat=useRef([]),r=useRouter()
 useEffect(()=>{const k=e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setOpen(o=>!o)}if(e.key==='Escape')setOpen(false)};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[])
 useEffect(()=>{if(open)setTimeout(()=>inp.current?.focus(),60)},[open])
 useEffect(()=>{end.current?.scrollIntoView({block:'end'})},[L,open])
 const out=(...x)=>setL(l=>[...l,...x.flat().map(t=>typeof t==='string'?{k:'o',t}:t)])
 async function run(e){
  e.preventDefault();const c=v.trim();if(!c||busy)return;setV('');out({k:'i',t:'> '+c})
  const [cmd,...rest]=c.toLowerCase().split(/\s+/),arg=rest.join(' ')
  if(cmd==='aide'||cmd==='help')return out(HELP)
  if(cmd==='clear')return setL([])
  if(cmd==='projets')return out(projets.map(p=>`${p.n}  ${p.nom} — ${p.tag}`))
  if(cmd==='mission')return out(mission);if(cmd==='vision')return out(vision)
  if(cmd==='projet'){const p=projets.find(p=>p.nom.toLowerCase().includes(arg)||p.slug.includes(arg));if(p&&arg){out({k:'ok',t:'→ /projets/'+p.slug});return r.push('/projets/'+p.slug)}}
  const pg=PAGES[['ouvrir','cd','go'].includes(cmd)?arg:c.toLowerCase()]
  if(pg){out({k:'ok',t:'→ '+pg});return r.push(pg)}
  setBusy(true);chat.current=[...chat.current,{role:'user',content:c}].slice(-6)
  try{const d=await(await fetch('/api/assistant',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:chat.current})})).json()
   chat.current=[...chat.current,{role:'assistant',content:d.text}];out({k:'a',t:d.text})}
  catch{out({k:'o',t:'Connexion perdue. Réessayez.'})}
  setBusy(false)
 }
 return <>
  <button className="tbtn" onClick={()=>setOpen(o=>!o)} aria-label="Ouvrir l’assistant WALLU-AI">{open?'×':'›_'}</button>
  {open&&<div className="tpanel"><div className="th">WALLU-AI · Ctrl+K</div>
   <div className="tl">{L.map((l,i)=><div key={i} className={'ln-'+l.k}>{l.t}</div>)}{busy&&<div className="ln-o">…</div>}<div ref={end}/></div>
   <form onSubmit={run}><span>&gt;</span><input ref={inp} value={v} onChange={e=>setV(e.target.value)} placeholder="aide, projets, ou une question…" autoComplete="off" maxLength={300}/></form></div>}
 </>
}
