'use client';
import { useMemo, useState } from 'react';

export default function Donate(){
  const [amt,setAmt]=useState(50);
  const [country,setCountry]=useState('UK');
  const impact=useMemo(()=>{
    const opts=[{a:25,l:'Language materials'},{a:50,l:'Workshop supplies'},{a:100,l:'Digitization pages'}];
    return opts.sort((x,y)=>Math.abs(x.a-amt)-Math.abs(y.a-amt))[0].l;
  },[amt]);

  return (
    <div className="card" style={{maxWidth:760}}>
      <h1 style={{fontSize:26,fontWeight:800}}>Donate</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',marginTop:8}}>
        <label>Amount (USD)<input type="number" min={5} value={amt} onChange={e=>setAmt(parseInt(e.target.value||'0'))} className="card" /></label>
        <label>Country
          <select value={country} onChange={e=>setCountry(e.target.value)} className="card">
            <option>UK</option><option>Australia</option><option>United States</option><option>Other</option>
          </select>
        </label>
      </div>
      <p style={{marginTop:8}}>Your gift of <b>${amt}</b> helps with: <b>{impact}</b>.</p>
      <p style={{color:'var(--muted)'}}>
        {country==='UK' && '🇬🇧 Eligible for Gift Aid if you are a UK taxpayer.'}
        {country==='Australia' && '🇦🇺 May be tax-deductible (DGR).'}
        {country==='United States' && '🇺🇸 May be tax-deductible via 501(c)(3) partner.'}
        {country==='Other' && ' ℹ️ Tax status depends on your country.'}
      </p>
      <a className="btn" href="#" onClick={e=>e.preventDefault()}>Proceed to Checkout (wire later)</a>
    </div>
  );
}
