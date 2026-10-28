'use client'
import { useState } from 'react'
export default function ContactForm(){
 const [s,setS]=useState('idle')
 async function send(e){e.preventDefault();setS('load')
  const d=Object.fromEntries(new FormData(e.currentTarget))
  try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});setS(r.ok?'ok':'err');if(r.ok)e.target.reset()}catch{setS('err')}}
 return <form className="form" onSubmit={send}>
  <label>Nom<input name="nom" required maxLength={100}/></label>
  <label>E-mail<input name="email" type="email" required maxLength={150}/></label>
  <label>Votre projet<textarea name="message" rows={5} required maxLength={4000}/></label>
  <button className="btn" disabled={s==='load'}>{s==='load'?'Envoi…':'Envoyer le message'}</button>
  {s==='ok'&&<p className="st">Message envoyé. Merci, nous revenons vers vous vite.</p>}
  {s==='err'&&<p className="st">Oups, l’envoi a échoué. Réessayez ou écrivez-nous directement.</p>}
 </form>
}
