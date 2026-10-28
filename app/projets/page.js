import Section from '@/components/Section'
import ProjetRows from '@/components/ProjetRows'
import Scramble from '@/components/Scramble'
export const metadata={title:'Projets — Wallu Group'}
export default function Page(){
 return <>
  <Section className="page" s={.55}><div className="lab"><Scramble auto text="// Projets"/></div><h1 className="t">Ce que nous construisons.</h1></Section>
  <Section bg="#ffffff" ink="#0b2540" s={.55} className="proj"><ProjetRows/></Section>
 </>
}
