
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

// This is a simple map placeholder component
// In a real application, you would use a mapping library like Mapbox or Google Maps
const GymMap = () => {
  return (
    <div className="relative bg-gymstr-navy/80 rounded-lg border border-white/10 h-64 md:h-96 overflow-hidden">
      {/* Map placeholder background */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/256ef8ba-4889-4758-9e7e-31517a783fb5.png')] bg-cover opacity-40"></div>
      
      {/* Map overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-sm">
          <MapPin size={48} className="text-gymstr-orange mb-2" />
          <h3 className="text-xl font-bold mb-2">Nearby Gyms</h3>
          <p className="text-gymstr-beige/80 mb-4">
            Discover 12 gyms near your current location. All accessible with your Gymstr membership.
          </p>
        </div>
      </div>

      {/* Pin markers */}
      <div className="absolute top-1/4 left-1/4">
        <MapPin size={24} className="text-gymstr-orange" />
      </div>
      <div className="absolute top-1/3 right-1/4">
        <MapPin size={24} className="text-gymstr-orange" />
      </div>
      <div className="absolute bottom-1/4 left-1/3">
        <MapPin size={24} className="text-gymstr-orange" />
      </div>
      <div className="absolute bottom-1/3 right-1/3">
        <MapPin size={24} className="text-gymstr-orange" />
      </div>
    </div>
  );
};

export default GymMap;
