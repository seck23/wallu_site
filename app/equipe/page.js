import Section from '@/components/Section'
import Spot from '@/components/Spot'
import Scramble from '@/components/Scramble'
import { Rise } from '@/components/Fx'
import { equipe } from '@/lib/data'
export const metadata={title:'Équipe — Wallu Group'}
export default function Page(){
 return <>
  <Section className="page" m={1} x={1.9}><div className="lab"><Scramble auto text="// Équipe"/></div><h1 className="t">Les têtes derrière Wallu.</h1></Section>
  <Section bg="#ffffff" ink="#0b2540" s={.4} className="proj"><Rise className="cards team">
   {equipe.map((p,i)=><Spot className="card" key={i}>
    {p.photo?<img className="av" src={p.photo} alt={p.nom}/>:<div className="av">{p.nom.split(' ').map(x=>x[0]).join('')}</div>}
    <h4>{p.nom}</h4><p>{p.role}</p>{p.lien&&<a className="lk" href={p.lien} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}</Spot>)}</Rise></Section>
 </>
}
