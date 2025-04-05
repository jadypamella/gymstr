
import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Sample gym locations - these would normally come from an API
const gymLocations = [
  { id: 1, name: "PowerFit Gym", lng: -46.6333, lat: -23.5505, rating: 4.8 },
  { id: 2, name: "CrossTrain Center", lng: -46.6483, lat: -23.5675, rating: 4.6 },
  { id: 3, name: "FlexZone", lng: -46.6733, lat: -23.5905, rating: 4.5 },
  { id: 4, name: "Iron Temple", lng: -46.6233, lat: -23.5855, rating: 4.7 },
  { id: 5, name: "Yoga Harmony", lng: -46.6583, lat: -23.5755, rating: 4.9 },
  { id: 6, name: "Cardio Kings", lng: -46.6863, lat: -23.5605, rating: 4.4 },
];

const GymMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState<string>('');
  
  useEffect(() => {
    // In a production app, this would come from an environment variable or Supabase secrets
    // This is a temporary solution for demo purposes
    if (!mapToken) return;
    
    if (map.current) return; // Map already initialized
    
    mapboxgl.accessToken = mapToken;
    
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-46.6333, -23.5505], // São Paulo coordinates
        zoom: 12
      });
      
      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Add markers for each gym location
      gymLocations.forEach(gym => {
        // Create marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'gym-marker';
        markerEl.innerHTML = `<div class="w-6 h-6 bg-gymstr-orange rounded-full flex items-center justify-center text-white shadow-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
                              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                              <circle cx="12" cy="10" r="3"></circle></svg>
                            </div>`;
        
        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`<div class="p-2">
                      <h3 class="font-semibold text-sm">${gym.name}</h3>
                      <div class="flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" 
                        stroke="currentColor" stroke-width="0" class="text-amber-400 mr-1">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span class="text-xs">${gym.rating}</span>
                      </div>
                    </div>`);
        
        // Add marker to map
        new mapboxgl.Marker(markerEl)
          .setLngLat([gym.lng, gym.lat])
          .setPopup(popup)
          .addTo(map.current);
      });
      
      // Add custom CSS to style the markers
      const style = document.createElement('style');
      style.innerHTML = `
        .gym-marker {
          cursor: pointer;
          transition: transform 0.2s;
        }
        .gym-marker:hover {
          transform: scale(1.2);
        }
        .mapboxgl-popup-content {
          background: #1A2235;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        .mapboxgl-popup-tip {
          border-top-color: #1A2235 !important;
          border-bottom-color: #1A2235 !important;
        }
        .mapboxgl-popup-close-button {
          color: white;
        }
      `;
      document.head.appendChild(style);
    }
  }, [mapToken]);
  
  return (
    <div className="relative bg-gymstr-navy/80 rounded-lg border border-white/10 h-64 md:h-96 overflow-hidden">
      {/* Mapbox container */}
      <div ref={mapContainer} className="absolute inset-0"></div>
      
      {/* Map token input overlay - this would be removed in production */}
      {!mapToken && (
        <div className="absolute inset-0 flex items-center justify-center bg-gymstr-navy/90 z-10">
          <div className="flex flex-col items-center text-center max-w-sm p-4">
            <MapPin size={48} className="text-gymstr-orange mb-2" />
            <h3 className="text-xl font-bold mb-2">Nearby Gyms</h3>
            <p className="text-gymstr-beige/80 mb-4">
              Enter your Mapbox public token to view the interactive map:
            </p>
            <input
              type="text"
              className="w-full p-2 bg-gymstr-navy border border-white/20 rounded text-white mb-2"
              placeholder="Enter Mapbox public token"
              onChange={(e) => setMapToken(e.target.value)}
            />
            <p className="text-xs text-gymstr-beige/60">
              Get your free token at <a href="https://mapbox.com" target="_blank" className="text-gymstr-orange">mapbox.com</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GymMap;
