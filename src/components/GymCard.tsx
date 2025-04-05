
import React from 'react';
import { Star, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GymCardProps {
  name: string;
  image: string;
  rating: number;
  location: string;
  amenities: string[];
  distance?: string;
  acceptsLightning?: boolean;
  onViewDetails?: () => void;
  onStartMembership?: () => void;
}

const GymCard = ({ 
  name, 
  image, 
  rating, 
  location, 
  amenities, 
  distance, 
  acceptsLightning, 
  onViewDetails,
  onStartMembership 
}: GymCardProps) => {
  return (
    <div className="glass rounded-xl overflow-hidden border border-gymstr-beige/10 hover:border-gymstr-orange/30 transition-all duration-300 hover-scale group">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gymstr-navy/90 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Star className="text-gymstr-orange fill-gymstr-orange mr-1" size={16} />
              <span className="text-gymstr-beige font-medium">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-2">
              {distance && (
                <div className="bg-gymstr-navy/80 text-gymstr-beige py-1 px-3 rounded-full text-xs font-medium">
                  {distance}
                </div>
              )}
              {acceptsLightning && (
                <div className="bg-gymstr-orange/90 text-white p-1 rounded-full">
                  <Zap size={14} className="fill-current" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2">{name}</h3>
        <div className="flex items-center text-gymstr-beige/70 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {amenities.map((amenity, index) => (
            <span 
              key={index} 
              className="bg-gymstr-navy text-gymstr-beige/80 text-xs px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            className="w-1/2" 
            onClick={onViewDetails}
          >
            View Details
          </Button>
          <Button 
            className="w-1/2 bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
            onClick={onStartMembership}
          >
            Start Membership
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GymCard;
