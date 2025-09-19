export default function Home(){
  return (
    <div className="grid" style={{gridTemplateColumns:'1.2fr .8fr'}}>
      <section className="card" style={{gridColumn:'1 / -1'}}>
        <h1 style={{fontSize:34,fontWeight:900,letterSpacing:-0.5}}>Assyrian Voice</h1>
        <p style={{maxWidth:760,color:'var(--muted)',marginTop:8}}>
          A living introduction to Assyrian civilization—language, inventions, cities—and practical ways to help today.
          Explore the timeline & map, sign coalition letters, donate, and share resources.
        </p>
        <div style={{display:'flex',gap:12,marginTop:12}}>
          <a className="btn" href="/voice/timeline">Explore Timeline & Map</a>
          <a className="btn" href="https://assyrianaction.com/action/write" target="_blank" rel="noreferrer">Write to Your MP</a>
        </div>
      </section>

      <section className="card">
        <h2 style={{fontWeight:800}}>Highlights</h2>
        <ul style={{marginTop:8,lineHeight:1.6}}>
          <li>Jerwan aqueduct & early engineering</li>
          <li>Library of Ashurbanipal & cuneiform legacy</li>
          <li>Neo-Aramaic language communities</li>
        </ul>
      </section>

      <section className="card">
        <h2 style={{fontWeight:800}}>Get Involved</h2>
        <ul style={{marginTop:8,lineHeight:1.6}}>
          <li><a href="/voice/signon">Coalition Sign-On</a></li>
          <li><a href="/donate">Donate</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>
      </section>
    </div>
  );
}
{/* Featured Images */}
<section className="card">
  <h2 style={{fontWeight:800}}>Featured Images</h2>
  <div style={{display:'grid',gap:12,gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',marginTop:8}}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="https://images.metmuseum.org/CRDImages/an/original/DP120929.jpg" alt="Lamassu — The Met" loading="lazy" style={{width:'100%',height:160,objectFit:'cover',borderRadius:12}}/>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Jerwan_Aqueduct.jpg" alt="Jerwan Aqueduct" loading="lazy" style={{width:'100%',height:160,objectFit:'cover',borderRadius:12}}/>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="https://images.metmuseum.org/CRDImages/an/original/DP375421.jpg" alt="Relief panel — The Met" loading="lazy" style={{width:'100%',height:160,objectFit:'cover',borderRadius:12}}/>
  </div>
  <div style={{marginTop:10}}>
    <a className="btn" href="/gallery">See full gallery</a>
  </div>
</section>
