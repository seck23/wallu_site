import gsap from 'gsap'
import * as THREE from 'three'
export const scene={st:{m:0,s:0},ink:null,mesh:null,
 set({bg,ink,m,s,x}){
  gsap.to('body',{backgroundColor:bg,color:ink,'--ac':ink==='#ffffff'?'#f2b84b':'#b9770e',duration:.9,ease:'power2.out'})
  if(this.ink){const c=new THREE.Color(ink);gsap.to(this.ink,{r:c.r,g:c.g,b:c.b,duration:.9})}
  gsap.to(this.st,{m,s,duration:1.8,ease:'power3.inOut',overwrite:true})
 }}
