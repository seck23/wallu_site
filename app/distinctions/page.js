import Section from '@/components/Section'
import Spot from '@/components/Spot'
import Scramble from '@/components/Scramble'
import { Rise } from '@/components/Fx'
import { distinctions } from '@/lib/data'
export const metadata={title:'Distinctions — Wallu Group'}
export default function Page(){
 return <>
  <Section className="page" m={1} x={1.9}><div className="lab"><Scramble auto text="// Distinctions"/></div><h1 className="t">Reconnus par nos pairs.</h1></Section>
  <Section bg="#0b2540" ink="#ffffff" s={.3} className="proj"><Rise className="tline">
   {distinctions.map((d,i)=><Spot className="ti" key={i}><span className="yr">{d.an}</span><h4>{d.titre}</h4><small>{d.par}</small><p>{d.txt}</p></Spot>)}</Rise></Section>
 </>
}
