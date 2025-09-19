const IMAGES = [
  { title:'Library of Ashurbanipal tablet — The Met (CC0)', url:'https://images.metmuseum.org/CRDImages/an/original/DP270389.jpg', src:'https://www.metmuseum.org/art/collection/search/327700' },
  { title:'Lamassu — The Met (CC0)', url:'https://images.metmuseum.org/CRDImages/an/original/DP120929.jpg', src:'https://www.metmuseum.org/art/collection/search/322610' },
  { title:'Jerwan Aqueduct — Wikimedia (CC BY-SA 4.0)', url:'https://upload.wikimedia.org/wikipedia/commons/9/9c/Jerwan_Aqueduct.jpg', src:'https://commons.wikimedia.org/wiki/File:Jerwan_Aqueduct.jpg' }
];

export default function Gallery(){
  return (
    <div>
      <h1 style={{fontSize:26,fontWeight:800}}>Gallery</h1>
      <div style={{display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',marginTop:12}}>
        {IMAGES.map(img=>(
          <figure key={img.url} className="card">
            <img src={img.url} alt={img.title} style={{width:'100%',height:220,objectFit:'cover',borderRadius:12}} />
            <figcaption style={{fontSize:12,marginTop:8}}>
              <div style={{fontWeight:700}}>{img.title}</div>
              <a href={img.src} target="_blank">Source & credit</a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
