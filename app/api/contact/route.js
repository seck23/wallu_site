export async function POST(req){
 const {nom,email,message}=await req.json().catch(()=>({}))
 if(!nom||!message||message.length>4000||!/^\S+@\S+\.\S+$/.test(email||''))return Response.json({ok:false},{status:400})
 const key=process.env.RESEND_API_KEY,to=process.env.CONTACT_TO
 if(!key||!to){console.log('[contact]',{nom,email,message});return Response.json({ok:true,dev:true})}
 const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},
  body:JSON.stringify({from:'Wallu Group <onboarding@resend.dev>',to:[to],reply_to:email,subject:`Contact site — ${nom}`,text:`${nom} <${email}>\n\n${message}`})})
 return Response.json({ok:r.ok},{status:r.ok?200:502})
}
