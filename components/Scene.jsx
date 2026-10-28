'use client'
import { useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { scene } from '@/lib/scene'
THREE.ColorManagement.enabled=false
// Petit « réseau neuronal 3D » en coin : sobre, ne couvre pas le texte
export default function Scene(){
 useEffect(()=>{
  let R;try{R=new THREE.WebGLRenderer({canvas:document.getElementById('gl'),alpha:true,antialias:true})}catch{return}
  R.setPixelRatio(Math.min(devicePixelRatio,1.75))
  const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(45,1,.1,50);C.position.z=7
  const G=new THREE.Group();S.add(G)
  const geo=new THREE.IcosahedronGeometry(1.5,1),ink=new THREE.Color('#ffffff')
  const lm=new THREE.LineBasicMaterial({color:ink,transparent:true,opacity:.35})
  const pm=new THREE.PointsMaterial({color:ink,size:.07,transparent:true,opacity:.85})
  const inGeo=new THREE.IcosahedronGeometry(.8,0),wg=new THREE.WireframeGeometry(geo),ig=new THREE.WireframeGeometry(inGeo)
  const pos=geo.attributes.position,gp=new Float32Array(9)
  ;[3,40,97].forEach((v,i)=>pos.array.slice(v*3,v*3+3).forEach((x,k)=>gp[i*3+k]=x))
  const gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.BufferAttribute(gp,3))
  const gm=new THREE.PointsMaterial({color:0xf2b84b,size:.16,transparent:true})
  G.add(new THREE.LineSegments(wg,lm),new THREE.LineSegments(ig,lm),new THREE.Points(geo,pm),new THREE.Points(gg,gm))
  scene.ink=ink
  const size=()=>{R.setSize(innerWidth,innerHeight,false);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()}
  size();addEventListener('resize',size)
  const mt={x:0,y:0},mv=e=>{mt.x=e.clientX/innerWidth*2-1;mt.y=e.clientY/innerHeight*2-1}
  addEventListener('pointermove',mv)
  const tick=t=>{
   const w=innerWidth>900,tx=w?3.7:.9,ty=w?1.3:2.1,sc=w?.62:.4
   G.position.x+=(tx-G.position.x)*.05;G.position.y+=(ty-G.position.y)*.05
   G.scale.setScalar(sc*(1+Math.sin(t*1.5)*.03))
   G.rotation.y=t*.25+mt.x*.4;G.rotation.x+=(mt.y*.3-G.rotation.x)*.05
   lm.color.copy(ink);pm.color.copy(ink)
   lm.opacity=.35*(1-scene.st.s*.6);pm.opacity=.85*(1-scene.st.s*.6)
   gm.opacity=.6+Math.sin(t*3)*.4
   R.render(S,C)}
  gsap.ticker.add(tick)
  return()=>{gsap.ticker.remove(tick);removeEventListener('resize',size);removeEventListener('pointermove',mv)
   ;[geo,inGeo,wg,ig,gg].forEach(g=>g.dispose());R.dispose();scene.ink=null}
 },[])
 return <canvas id="gl"/>
}
