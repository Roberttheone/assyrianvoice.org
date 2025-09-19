export default function Timeline(){
  return (
    <div className="grid" style={{gap:16}}>
      <h1 style={{fontSize:26,fontWeight:800}}>Interactive Timeline & Map</h1>

      <div className="card">
        <p style={{color:'var(--muted)'}}>
          Explore key Assyrian sites. Use the map to pan/zoom; pins mark Nineveh (Mosul), Ashur, and Nimrud.
        </p>
        {/* Simple OSM embedded map with markers via uMap (lightweight) */}
        <div style={{position:'relative',paddingBottom:'56%',height:0,overflow:'hidden',borderRadius:16}}>
          <iframe
            title="Assyrian Sites Map"
            src="https://umap.openstreetmap.fr/en/map/assyrian-sites_1046093?scaleControl=true&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=false&searchControl=false&tilelayersControl=true&embedControl=false&datalayersControl=true&onLoadPanel=none&captionBar=false"
            style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}}
            loading="lazy"
          />
        </div>
      </div>

      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
        <article className="card">
          <h3 style={{fontWeight:800}}>Nineveh (Mosul)</h3>
          <p>An imperial capital; famed for the Library of Ashurbanipal.</p>
        </article>
        <article className="card">
          <h3 style={{fontWeight:800}}>Ashur (Qal'at Sherqat)</h3>
          <p>Religious heart of Assyria and early royal center.</p>
        </article>
        <article className="card">
          <h3 style={{fontWeight:800}}>Nimrud (Kalhu)</h3>
          <p>Capital under Ashurnasirpal II with monumental reliefs.</p>
        </article>
      </div>
    </div>
  );
}
