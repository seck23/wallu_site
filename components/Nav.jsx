import Link from 'next/link'
import Scramble from './Scramble'
const L=[['/a-propos','À propos'],['/projets','Projets'],['/equipe','Équipe'],['/distinctions','Distinctions'],['/contact','Contact']]
export default function Nav(){
 return <header><Link href="/" className="logo"><img src="/logo.png" alt="Wallu Group"/></Link>
  <nav>{L.map(([h,t])=><Link key={h} href={h}><Scramble text={t}/></Link>)}</nav></header>
}
