import Section from '@/components/Section'
import Spot from '@/components/Spot'
import Scramble from '@/components/Scramble'
import { Words, Rise, Btn } from '@/components/Fx'
import { domaines, methode, mission, vision } from '@/lib/data'
export const metadata={title:'À propos — Wallu Group'}
export default function Page(){
 return <>
  <Section className="page" m={1} x={1.9}><div className="lab"><Scramble auto text="// 01 — À propos"/></div><h1 className="t">Des ingénieurs, une ambition.</h1></Section>
  <Section bg="#ffffff" ink="#0b2540" m={1} x={1.9} className="mani">
   <Words className="big" text="Wallu Group est une startup d’ingénieurs basée à Dakar et hébergée à la Forge ESP. Nous mettons l’IA, la réalité virtuelle et le numérique au service de ce qui compte."/>
  </Section>
  <Section bg="#0b2540" ink="#ffffff" s={.3} className="proj"><div className="lab"><Scramble auto text="// 02 — Mission & vision"/></div>
   <Rise className="mv"><Spot><span className="tag">Notre mission</span><p>{mission}</p></Spot><Spot><span className="tag">Notre vision</span><p>{vision}</p></Spot></Rise></Section>
  <Section bg="#ffffff" ink="#0b2540" className="proj"><div className="lab"><Scramble auto text="// 03 — Domaines"/></div>
   <Rise className="cols">{domaines.map(d=><Spot key={d.t}><h4>{d.t}</h4><p>{d.p}</p></Spot>)}</Rise></Section>
  <Section bg="#0b2540" ink="#ffffff" s={.3} className="proj"><div className="lab"><Scramble auto text="// 04 — Méthode"/></div>
   <Rise className="steps">{methode.map((m,i)=><Spot key={m.t}><span className="num">0{i+1}</span><h4>{m.t}</h4><p>{m.p}</p></Spot>)}</Rise></Section>
  <Section className="center"><h2>Un projet ?</h2><Btn href="/contact">Parlons-en</Btn></Section>
 </>
}
