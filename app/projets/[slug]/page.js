import Link from 'next/link'
import { notFound } from 'next/navigation'
import Section from '@/components/Section'
import Spot from '@/components/Spot'
import Scramble from '@/components/Scramble'
import { Rise, Btn } from '@/components/Fx'
import { projets } from '@/lib/data'
export const generateStaticParams=()=>projets.map(p=>({slug:p.slug}))
export async function generateMetadata({params}){const {slug}=await params;const p=projets.find(x=>x.slug===slug);return {title:p?`${p.nom} — Wallu Group`:'Projet'}}
export default async function Page({params}){
 const {slug}=await params
 const i=projets.findIndex(p=>p.slug===slug);if(i<0)notFound()
 const p=projets[i],next=projets[(i+1)%projets.length]
 return <>
  <Section className="page" s={.55}><div className="lab"><Scramble auto text={`// ${p.n} — ${p.tag}`}/></div><h1 className="t">{p.nom}</h1><p className="lead">{p.txt}</p></Section>
  <Section bg="#ffffff" ink="#0b2540" s={.4} className="proj"><Rise className="cards">{p.details.map(d=><Spot key={d.h}><h4>{d.h}</h4><p>{d.p}</p></Spot>)}</Rise></Section>
  <Section className="center"><div className="lab">Projet suivant</div><Link href={`/projets/${next.slug}`}><h2>{next.nom}</h2></Link><Btn href="/contact">Nous écrire</Btn></Section>
 </>
}
