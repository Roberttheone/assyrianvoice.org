export default function Builders(){
  return (
    <div className="grid" style={{gap:16}}>
      <header className="card">
        <h1 style={{fontSize:28,fontWeight:900}}>Builders of Civilization</h1>
        <p style={{color:'#cbd5e1',maxWidth:820,marginTop:6}}>
          Assyrian advances in engineering, administration, knowledge, and language shaped the region for millennia.
          Explore highlights below, then visit the Gallery and Timeline for artifacts and sites.
        </p>
      </header>

      <section className="grid fit-3">
        <article className="card">
          <h3 style={{fontWeight:800}}>Engineering & Infrastructure</h3>
          <p>Jerwan aqueduct and canal works attributed to Sennacherib; large-scale stone construction and water management.</p>
        </article>
        <article className="card">
          <h3 style={{fontWeight:800}}>Knowledge & Libraries</h3>
          <p>Library of Ashurbanipal—royal correspondence, epics, and scientific texts preserved on cuneiform tablets.</p>
        </article>
        <article className="card">
          <h3 style={{fontWeight:800}}>Language & Administration</h3>
          <p>Aramaic (and Neo-Aramaic today) as administrative and community lingua franca across a wide geography.</p>
        </article>
      </section>

      <section className="card">
        <h2 style={{fontWeight:800}}>Images</h2>
        <div className="grid fit-3" style={{marginTop:8}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.metmuseum.org/CRDImages/an/original/DP270389.jpg" alt="Tablet — Library of Ashurbanipal" loading="lazy" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.metmuseum.org/CRDImages/an/original/DP120929.jpg" alt="Lamassu — The Met" loading="lazy" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Jerwan_Aqueduct.jpg" alt="Jerwan Aqueduct" loading="lazy" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
        </div>
        <div style={{marginTop:10}}>
          <a className="btn" href="/gallery">See full gallery</a>
        </div>
      </section>

      <section className="grid fit-2">
        <article className="card">
          <h3 style={{fontWeight:800}}>Further Reading</h3>
          <ul style={{lineHeight:1.7}}>
            <li>Timeline & Map: <a href="/voice/timeline">/voice/timeline</a></li>
            <li>Coalition Sign-On: <a href="/voice/signon">/voice/signon</a></li>
            <li>Advocacy letters (partner site): <a href="https://assyrianaction.com/action/write" target="_blank">AssyrianAction.com</a></li>
          </ul>
        </article>
        <article className="card">
          <h3 style={{fontWeight:800}}>Share</h3>
          <p>Use this page as a concise primer when talking to press, donors, and officials.</p>
        </article>
      </section>
    </div>
  );
}
