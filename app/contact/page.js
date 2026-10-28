import Section from '@/components/Section'
import Scramble from '@/components/Scramble'
import ContactForm from '@/components/ContactForm'
import { EMAIL } from '@/lib/data'
export const metadata={title:'Contact — Wallu Group'}
export default function Page(){
 return <Section className="page contact" m={1} x={2}>
  <div className="lab"><Scramble auto text="// Contact"/></div><h1 className="t">Parlons de votre idée.</h1>
  <ContactForm/><p className="mail">ou directement : <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p></Section>
}
