
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Zap } from "lucide-react";

export interface GymDetailsProps {
  id?: number;
  name: string;
  image: string;
  gallery?: string[];
  rating: number;
  location: string;
  distance?: string;
  amenities: string[];
  description?: string;
  acceptsLightning?: boolean;
}

interface GymDetailsDialogProps {
  gym: GymDetailsProps | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onJoin: (gym: GymDetailsProps) => void;
}

export function GymDetailsDialog({ gym, open, onOpenChange, onJoin }: GymDetailsDialogProps) {
  if (!gym) return null;

  const galleryImages = gym.gallery || [gym.image];
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1E293B] text-[#E2E8F0] border-white/10 max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{gym.name}</DialogTitle>
          <DialogDescription className="text-[#E2E8F0]/70 flex items-center">
            <MapPin size={14} className="mr-1" />
            {gym.location}
            {gym.distance && ` (${gym.distance})`}
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img 
            src={galleryImages[0]} 
            alt={gym.name} 
            className="w-full h-full object-cover"
          />
          {galleryImages.length > 1 && (
            <div className="absolute bottom-3 right-3 flex gap-1">
              {galleryImages.slice(1).map((image, idx) => (
                <div key={idx} className="w-12 h-8 rounded overflow-hidden border-2 border-white/80">
                  <img 
                    src={image} 
                    alt={`${gym.name} ${idx + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="text-yellow-500 fill-yellow-500 mr-1" size={18} />
            <span className="text-lg font-medium">{gym.rating}</span>
            <span className="text-[#E2E8F0]/70 ml-2 text-sm">
              {gym.rating >= 4.8 ? "Excellent" : gym.rating >= 4.5 ? "Very Good" : "Good"}
            </span>
          </div>
          {gym.acceptsLightning && (
            <div className="flex items-center gap-2 text-sm">
              <Zap size={16} className="text-[#F7931A]" />
              <span>Lightning payments accepted</span>
            </div>
          )}
        </div>
        
        <p className="text-[#E2E8F0]/90">
          {gym.description || "A premium fitness center with top-notch equipment and amenities."}
        </p>
        
        <div>
          <h4 className="font-medium mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {gym.amenities.map((amenity, index) => (
              <span 
                key={index} 
                className="text-sm px-3 py-1 rounded-full bg-white/10 text-[#E2E8F0]/80"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        <DialogFooter className="flex gap-3 justify-end mt-4">
          <Button
            variant="outline"
            className="bg-transparent"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
          <Button
            className="bg-[#22C55E] hover:bg-[#22C55E]/90 text-white"
            onClick={() => {
              onOpenChange(false);
              onJoin(gym);
            }}
          >
            Join
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default GymDetailsDialog;
