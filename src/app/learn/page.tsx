export default function Learn(){
  return (
    <article className="card" style={{maxWidth:900}}>
      <h1 style={{fontSize:26,fontWeight:800}}>Learn: Culture & Civilization</h1>
      <p style={{color:'var(--muted)'}}>A concise primer with museum illustrations and links.</p>
      <section style={{marginTop:16}}>
        <h2 style={{fontWeight:800}}>Language</h2>
        <p>Neo-Aramaic varieties are still spoken by Assyrian communities in the region and diaspora.</p>
      </section>
      <section style={{marginTop:16}}>
        <h2 style={{fontWeight:800}}>Learning Pack</h2>
        <ul style={{lineHeight:1.7}}>
          <li><a href="/gallery">Artifacts & reliefs (Gallery)</a></li>
          <li><a href="/voice/timeline">Map of key cities (Timeline)</a></li>
          <li><a href="https://assyrianaction.com/action/write" target="_blank">Advocacy letter generator (AssyrianAction.com)</a></li>
        </ul>
      </section>
      <section style={{marginTop:16}}>
        <h2 style={{fontWeight:800}}>Credits</h2>
        <p>Images via The Met (CC0) and Wikimedia Commons (CC BY-SA). Replace or expand as you wish.</p>
      </section>
    </article>
  );
}
