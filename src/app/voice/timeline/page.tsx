'use client';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// dynamic imports for SSR safety
const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
const TileLayer    = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
const Marker       = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false });
const Popup        = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false });

export default function Timeline(){
  const pins = [
    { name: 'Nineveh (Mosul)',        coords: [36.35944, 43.15278], blurb: 'Imperial capital; Library of Ashurbanipal.' },
    { name: "Ashur (Qal'at Sherqat)", coords: [35.46360, 43.25060], blurb: 'Religious heart of Assyria.' },
    { name: 'Nimrud (Kalhu)',         coords: [36.09030, 43.32240], blurb: 'Capital under Ashurnasirpal II.' }
  ] as const;

  return (
    <div>
      <h1 style={{fontSize:26,fontWeight:800}}>Interactive Timeline & Map</h1>
      <div style={{height:520,borderRadius:16,overflow:'hidden',marginTop:10}}>
        <MapContainer center={[36.05, 43.2]} zoom={7} style={{height:'100%',width:'100%'}}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {pins.map(p => (
            <Marker key={p.name} position={p.coords as any}>
              <Popup><b>{p.name}</b><div style={{marginTop:4,fontSize:13}}>{p.blurb}</div></Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
