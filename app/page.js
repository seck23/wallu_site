import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Spot from '@/components/Spot'
import Scramble from '@/components/Scramble'
import Terminal from '@/components/Terminal'
import Globe from '@/components/Globe'
import { Headset, Robot, Chip } from '@/components/Icons'
import ProjetRows from '@/components/ProjetRows'
import { Words, Btn, Rise } from '@/components/Fx'
const bin=s=>[...s].map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ')
const MODS=[['VR','Réalité virtuelle','Des mondes immersifs pour explorer et apprendre.',Headset],['IA','Intelligence artificielle','Des assistants qui comprennent et répondent.',Robot],['NUM','Numérique','Des plateformes utiles, rapides et accessibles.',Chip]]
export default function Home(){
 return <>
  <Hero/>
  <Section bg="#ffffff" ink="#0b2540" m={1} x={1.9} className="mani">
   <Words className="big" text="Nous sommes une jeune équipe d’ingénieurs hébergée à la Forge ESP. Nous transformons l’intelligence artificielle, la réalité virtuelle et le tourisme en services utiles, de l’accueil du citoyen à la découverte du Sénégal."/>
  </Section>
  <Section bg="#0b2540" ink="#ffffff" s={.3} className="sys">
   <div className="lab"><Scramble auto text="// SYSTÈME EN LIGNE"/></div>
   <div className="sysgrid"><Terminal/>
    <Rise className="mods">{MODS.map(([k,t,p,I])=><Spot key={k}><I/><span className="bits">{bin(k)}</span><h4>{k}</h4><small>{t}</small><p>{p}</p></Spot>)}</Rise></div>
  </Section>
  <Section bg="#0b2540" ink="#ffffff" className="globe-sec">
   <div className="lab"><Scramble auto text="// DEPUIS DAKAR"/></div>
   <div className="gl-wrap"><div><Globe/><small className="cap">Glissez pour tourner le globe</small></div><p className="gl-t">Pensé ici.<br/>Utile partout.</p></div>
  </Section>
  <Section bg="#ffffff" ink="#0b2540" s={.55} className="proj"><div className="lab">Nos projets</div><ProjetRows/></Section>
  <Section className="center"><h2>Construisons<br/>la suite.</h2><Btn href="/contact">Nous écrire</Btn></Section>
 </>
}
