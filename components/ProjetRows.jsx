import Link from 'next/link'
import { projets } from '@/lib/data'
import { Rise } from './Fx'
export default function ProjetRows(){
 return <Rise>{projets.map(p=><Link href={`/projets/${p.slug}`} className="row" key={p.n}><span className="num">{p.n}</span><h3>{p.nom}</h3><p>{p.txt}</p><small>{p.tag} →</small></Link>)}</Rise>
}
