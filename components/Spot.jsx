'use client'
export default function Spot({children,className='',...p}){
 const mv=e=>{const el=e.currentTarget,b=el.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5,s=el.style
  s.setProperty('--mx',e.clientX-b.left+'px');s.setProperty('--my',e.clientY-b.top+'px')
  s.transform=`perspective(900px) rotateX(${-y*8}deg) rotateY(${x*10}deg)`}
 const lv=e=>{e.currentTarget.style.transform=''}
 return <div className={'spot '+className} onMouseMove={mv} onMouseLeave={lv} {...p}>{children}</div>
}
