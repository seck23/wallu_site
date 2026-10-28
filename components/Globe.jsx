'use client'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
export default function Globe(){
 const box=useRef(),cam=useRef(),amp=useRef({v:.5}),[zoomed,setZoomed]=useState(false)
 useEffect(()=>{
  const el=box.current;let R,alive=true
  try{R=new THREE.WebGLRenderer({alpha:true,antialias:true})}catch{return}
  R.setPixelRatio(Math.min(devicePixelRatio,1.75));el.appendChild(R.domElement)
  const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(40,1,.1,50);C.position.z=5.2;cam.current=C
  const G=new THREE.Group();S.add(G)
  const ll=(la,lo,r=1.6)=>{la*=Math.PI/180;lo*=Math.PI/180;return new THREE.Vector3(r*Math.cos(la)*Math.sin(lo),r*Math.sin(la),r*Math.cos(la)*Math.cos(lo))}
  G.add(new THREE.Mesh(new THREE.SphereGeometry(1.58,48,48),new THREE.MeshBasicMaterial({color:0x0b2540})))
  const N=3200,a=new Float32Array(N*3)
  for(let i=0;i<N;i++)ll(Math.asin(1-2*(i+.5)/N)*180/Math.PI,(i*137.508)%360).toArray(a,i*3)
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(a,3))
  G.add(new THREE.Points(g,new THREE.PointsMaterial({size:.02,color:0xffffff,transparent:true,opacity:.3})))
  const D=ll(14.69,-17.44,1.62),gold=0xf2b84b
  const dot=new THREE.Mesh(new THREE.SphereGeometry(.03,16,16),new THREE.MeshBasicMaterial({color:gold}));dot.position.copy(D);G.add(dot)
  const ring=new THREE.Mesh(new THREE.RingGeometry(.04,.055,48),new THREE.MeshBasicMaterial({color:gold,transparent:true,side:THREE.DoubleSide,depthWrite:false}))
  ring.position.copy(D);ring.lookAt(D.clone().multiplyScalar(2));G.add(ring)
  const lab=document.createElement('div');lab.className='glab';lab.textContent='DAKAR';el.appendChild(lab)
  // --- carte du monde (pays) + Sénégal en or ---
  ;(async()=>{try{
   const [{default:topo},{feature}]=await Promise.all([import('world-atlas/countries-110m.json'),import('topojson-client')])
   if(!alive)return
   const fc=feature(topo,topo.objects.countries),seg=[]
   fc.features.forEach(f=>{
    const sen=f.properties.name==='Senegal',polys=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates
    polys.forEach(poly=>poly.forEach((ring,ri)=>{
     const pts=ring.map(([lo,la])=>ll(la,lo,sen?1.608:1.603))
     if(sen){G.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:gold})))
      if(ri===0){const c=ring.slice(0,-1).map(([lo,la])=>new THREE.Vector2(lo,la)),tri=THREE.ShapeUtils.triangulateShape(c,[])
       const ps=[];tri.forEach(t=>t.forEach(i=>ps.push(ll(c[i].y,c[i].x,1.606))))
       G.add(new THREE.Mesh(new THREE.BufferGeometry().setFromPoints(ps),new THREE.MeshBasicMaterial({color:gold,transparent:true,opacity:.4,side:THREE.DoubleSide,depthWrite:false})))}}
     else for(let i=0;i<pts.length-1;i++)seg.push(pts[i],pts[i+1])
    }))})
   G.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(seg),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.55})))
  }catch(e){console.warn('Carte du monde indisponible (npm install ?)',e)}})()
  const size=()=>{R.setSize(el.clientWidth,el.clientHeight);C.aspect=el.clientWidth/el.clientHeight;C.updateProjectionMatrix()}
  size();const ro=new ResizeObserver(size);ro.observe(el)
  let off=0,drag=false,lx=0
  const dn=e=>{drag=true;lx=e.clientX},mv=e=>{if(drag){off+=(e.clientX-lx)*.006;lx=e.clientX}},up=()=>{drag=false}
  el.addEventListener('pointerdown',dn);addEventListener('pointermove',mv);addEventListener('pointerup',up)
  const tick=t=>{G.rotation.x=14.69*Math.PI/180;G.rotation.y=17.44*Math.PI/180+Math.sin(t*.25)*amp.current.v+off
   const k=(t*.8)%1;ring.scale.setScalar(1+k*3);ring.material.opacity=1-k;R.render(S,C)
   const w=D.clone().applyMatrix4(G.matrixWorld),p=w.clone().project(C)
   lab.style.transform=`translate(${(p.x*.5+.5)*el.clientWidth+12}px,${(-p.y*.5+.5)*el.clientHeight-8}px)`;lab.style.opacity=w.z>1?1:0}
  gsap.ticker.add(tick)
  return()=>{alive=false;gsap.ticker.remove(tick);ro.disconnect();el.removeEventListener('pointerdown',dn);removeEventListener('pointermove',mv);removeEventListener('pointerup',up);g.dispose();R.dispose();R.domElement.remove();lab.remove()}
 },[])
 const zoom=()=>{gsap.to(cam.current.position,{z:zoomed?5.2:2.9,duration:1.4,ease:'power3.inOut'});gsap.to(amp.current,{v:zoomed?.5:.12,duration:1.4});setZoomed(!zoomed)}
 return <div className="gwrap"><div className="globe" ref={box}/><button className="gzoom" onClick={zoom}>{zoomed?'Vue globe':'Zoom sur Dakar'}</button></div>
}
