'use client';
import { useState } from 'react';

export default function SignOn(){
  const [org,setOrg]=useState(''); const [name,setName]=useState('');
  const [email,setEmail]=useState(''); const [city,setCity]=useState('');
  const [msg,setMsg]=useState('');

  async function submit(e:React.FormEvent){
    e.preventDefault();
    const res=await fetch('/api/signon',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({org,name,email,city})});
    const d=await res.json(); setMsg(d.ok?'Thank you — we will be in touch.':'Error: '+(d.error||'unknown'));
  }

  return (
    <div className="card" style={{maxWidth:640}}>
      <h1 style={{fontSize:26,fontWeight:800}}>Coalition Sign-On</h1>
      <form onSubmit={submit} className="grid" style={{gap:10,marginTop:10}}>
        <label>Organization<input required value={org} onChange={e=>setOrg(e.target.value)} className="card" /></label>
        <label>Your Name<input required value={name} onChange={e=>setName(e.target.value)} className="card" /></label>
        <label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="card" /></label>
        <label>City / Country<input value={city} onChange={e=>setCity(e.target.value)} className="card" /></label>
        <button className="btn" style={{width:'fit-content'}}>Sign</button>
      </form>
      {msg && <p style={{marginTop:8}}>{msg}</p>}
      <p style={{fontSize:12,color:'var(--muted)',marginTop:8}}>Admin note: wire to Airtable/Apps Script later.</p>
    </div>
  );
}
