
import React from 'react';
import { Star, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@/components/ui/hover-card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import LoginModal from './LoginModal';

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
  showLoginForMembership?: boolean;
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
  onStartMembership,
  showLoginForMembership = false
}: GymCardProps) => {
  const [selectedMembershipType, setSelectedMembershipType] = React.useState('monthly');

  const handleStartMembership = () => {
    if (onStartMembership) {
      onStartMembership();
    }
  };

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
            className="w-1/2 bg-transparent hover:bg-gymstr-beige/10" 
            onClick={onViewDetails}
          >
            View Details
          </Button>
          
          {showLoginForMembership ? (
            <LoginModal>
              <Button 
                className="w-1/2 bg-[#22C55E] hover:bg-[#22C55E]/80 text-white transition-colors"
              >
                Start Membership
              </Button>
            </LoginModal>
          ) : (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  className="w-1/2 bg-[#22C55E] hover:bg-[#22C55E]/80 text-white transition-colors"
                  onClick={handleStartMembership}
                >
                  Start Membership
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-[#1A2235] text-gymstr-beige border-white/10">
                <div className="space-y-4">
                  <h4 className="font-medium">Choose a membership plan</h4>
                  <RadioGroup 
                    value={selectedMembershipType}
                    onValueChange={setSelectedMembershipType}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between space-x-2 p-2 rounded hover:bg-gymstr-beige/5">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" className="text-gymstr-orange" />
                        <Label htmlFor="monthly">Monthly Membership</Label>
                      </div>
                      <span className="font-medium">$50/mo</span>
                    </div>
                    <div className="flex items-center justify-between space-x-2 p-2 rounded hover:bg-gymstr-beige/5">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="annual" id="annual" className="text-gymstr-orange" />
                        <Label htmlFor="annual">Annual Membership</Label>
                      </div>
                      <span className="font-medium">$480/yr</span>
                    </div>
                    <div className="flex items-center justify-between space-x-2 p-2 rounded hover:bg-gymstr-beige/5">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="daypass" id="daypass" className="text-gymstr-orange" />
                        <Label htmlFor="daypass">Day Pass</Label>
                      </div>
                      <span className="font-medium">$15</span>
                    </div>
                  </RadioGroup>
                  <div className="flex items-center gap-2 p-3 bg-gymstr-navy/50 rounded border border-gymstr-orange/30">
                    <Zap size={20} className="text-gymstr-orange fill-gymstr-orange/30" />
                    <div className="text-sm">Pay with Nostr Protocol</div>
                  </div>
                  <Button className="w-full bg-[#22C55E] hover:bg-[#22C55E]/90 text-white">
                    Continue with Nostr
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default GymCard;
