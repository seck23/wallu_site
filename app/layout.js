import './globals.css'
import './futur.css'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import Smooth from '@/components/Smooth'
import Nav from '@/components/Nav'
import Hud from '@/components/Hud'
import Loader from '@/components/Loader'
import BinaryRain from '@/components/BinaryRain'
import CmdTerminal from '@/components/CmdTerminal'
import Transition from '@/components/Transition'
const f=Space_Grotesk({subsets:['latin'],weight:['400','600','700']})
const mono=Space_Mono({subsets:['latin'],weight:['400','700'],variable:'--mono'})
export const metadata={title:'Wallu Group — Construire ce qui n’existe pas encore',description:'Wallu Group : IA, réalité virtuelle et tourisme, depuis Dakar.'}
export default function Layout({children}){
 return <html lang="fr"><body className={f.className+' '+mono.variable}><Loader/><div className="grid-bg"/><BinaryRain/><Smooth/><Nav/><Hud/><CmdTerminal/><Transition/><main>{children}</main>
  <footer>Wallu Group — La Forge ESP, Dakar · 2026</footer></body></html>
}
