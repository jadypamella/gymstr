import { useState } from "react";
import Button from "./Button";
import GymCard from "./GymCard";
import GymDetailsDialog, { GymDetailsProps } from "./GymDetailsDialog";
import LoginModal from "./LoginModal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Check, Lock, Zap, Globe } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PartnerSection = () => {
  const [selectedGym, setSelectedGym] = useState<GymDetailsProps | null>(null);
  const [showGymDetails, setShowGymDetails] = useState(false);
  const [showMembershipDialog, setShowMembershipDialog] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState("monthly");

  const TARGET_LNURL = "https://getalby.com/.well-known/lnurlp/vonnatur";
  const TARGET_PUBKEY =
    "79f00d3f5a19ec806189fcab03c1be4ff81d18ee4f653c88fac41fe03570f432";
  const RELAY_URL = "wss://nos.lol";
  const DEFAULT_SATS = 100;
  const partnerGyms = [
    {
      name: "FitLife Studio",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      location: "New York, NY",
      amenities: ["24/7 Access", "Sauna", "Personal Training"],
      description:
        "A modern fitness center with state-of-the-art equipment and professional trainers.",
      acceptsLightning: true,
      gallery: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
    {
      name: "Elevation Fitness",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      location: "Los Angeles, CA",
      amenities: ["Pool", "Group Classes", "Nutrition"],
      description:
        "Specialized in high-intensity functional training and CrossFit classes.",
      acceptsLightning: true,
      gallery: [
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
    {
      name: "PowerHouse Gym",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      location: "Chicago, IL",
      amenities: ["CrossFit", "Heavy Weights", "Boxing"],
      description:
        "A premium fitness club with comprehensive training programs and specialized equipment.",
      acceptsLightning: false,
      gallery: [
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
    {
      name: "Zen Wellness Center",
      image:
        "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      location: "Austin, TX",
      amenities: ["Yoga", "Meditation", "Spa"],
      description:
        "A peaceful sanctuary offering various yoga styles and meditation practices.",
      acceptsLightning: true,
      gallery: [
        "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
    },
  ];

  const partnerLogos = [
    "Equinox",
    "Planet Fitness",
    "Gold's Gym",
    "Anytime Fitness",
    "LA Fitness",
    "24 Hour Fitness",
    "Crunch Fitness",
    "Orange Theory",
  ];

  const membershipOptions = {
    monthly: {
      name: "Monthly Membership",
      price: "$29.99",
      sats: "30,000",
      btc: "0.00030000",
    },
    annual: {
      name: "Annual Membership",
      price: "$359.99",
      sats: "360,000",
      btc: "0.00360000",
    },
    daily: {
      name: "Day Pass",
      price: "$1.00",
      sats: "1,000",
      btc: "0.00001000",
    },
  };

  const handleViewDetails = (gym: GymDetailsProps) => {
    setSelectedGym(gym);
    setShowGymDetails(true);
  };

  const handleJoin = (gym: GymDetailsProps) => {
    setSelectedGym(gym);
    setShowMembershipDialog(true);
  };

  const handlePayment = async (price: number) => {
    try {
      // Passo 1: obter chave pública do usuário (remetente)
      const senderPubkey = await (window as any).nostr.getPublicKey();

      // Passo 2: obter LNURL metadata
      const lnurlRes = await fetch(TARGET_LNURL);
      const lnurlData = await lnurlRes.json();

      if (!lnurlData.callback) throw new Error("LNURL inválido");

      const minSendable = parseInt(lnurlData.minSendable);
      const maxSendable = parseInt(lnurlData.maxSendable);
      const desiredMsats = DEFAULT_SATS * 1000;

      if (desiredMsats < minSendable || desiredMsats > maxSendable) {
        throw new Error(
          `⚠️ Valor inválido: ${DEFAULT_SATS} sats. Permitido entre ${minSendable / 1000} e ${maxSendable / 1000} sats.`,
        );
      }
      // Passo 3: montar zap request (evento 9734)
      const zapRequest = {
        kind: 9734,
        created_at: Math.floor(Date.now() / 1000),
        content: "Zap automático via React + NIP-57",
        pubkey: senderPubkey,
        tags: [
          ["p", TARGET_PUBKEY],
          ["amount", desiredMsats],
          ["relays", RELAY_URL],
        ],
      };

      const signedEvent = await (window as any).nostr.signEvent(zapRequest);

      // Passo 4: chamar o callback LNURL com o evento
      const callbackUrl = new URL(lnurlData.callback);
      callbackUrl.searchParams.set("amount", desiredMsats.toString());
      callbackUrl.searchParams.set("nostr", JSON.stringify(signedEvent));

      const callbackRes = await fetch(callbackUrl.toString());
      const callbackJson = await callbackRes.json();

      if (!callbackJson.pr) {
        throw new Error("Falha ao obter invoice");
      }
    } catch (err) {
      console.log(`❌ Erro: ${err.message || err}`);
    }
  };

  return (
    <section id="partners" className="py-24 relative bg-gymstr-navy/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gradient font-bold mb-4">Trusted Partners</h2>
          <p className="text-gymstr-beige/70 max-w-2xl mx-auto text-lg">
            Join the network of 5,000+ fitness locations providing members with
            seamless access.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerGyms.map((gym, index) => (
            <GymCard
              key={index}
              name={gym.name}
              image={gym.image}
              rating={gym.rating}
              location={gym.location}
              amenities={gym.amenities}
              description={gym.description}
              acceptsLightning={gym.acceptsLightning}
              gallery={gym.gallery}
              onViewDetails={handleViewDetails}
              onJoin={handleJoin}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <LoginModal>
            <Button size="lg">Browse All Gyms</Button>
          </LoginModal>
        </div>

        <div className="mt-24">
          <p className="text-center text-gymstr-beige/50 text-sm uppercase tracking-wider mb-8">
            Major fitness chains available on our network
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="text-gymstr-beige/40 hover:text-gymstr-beige transition-colors duration-300"
              >
                <div className="font-bold text-xl md:text-2xl">{logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GymDetailsDialog
        gym={selectedGym}
        open={showGymDetails}
        onOpenChange={setShowGymDetails}
        onJoin={(gym) => {
          setShowGymDetails(false);
          handleJoin(gym);
        }}
      />

      {selectedGym && (
        <Sheet
          open={showMembershipDialog}
          onOpenChange={setShowMembershipDialog}
        >
          <SheetContent className="sm:max-w-md bg-[#1E293B] text-[#E2E8F0] border-l-white/10 flex flex-col">
            <SheetHeader>
              <SheetTitle className="text-[#E2E8F0]">
                Start Membership
              </SheetTitle>
              <SheetDescription className="text-[#E2E8F0]/70">
                Subscribe to {selectedGym.name}
              </SheetDescription>
            </SheetHeader>

            <ScrollArea className="flex-grow overflow-y-auto pr-4">
              <div className="py-6">
                <div className="bg-[#111827] rounded-lg p-4 mb-6 border border-white/10">
                  <h3 className="font-medium mb-3">{selectedGym.name}</h3>

                  <Tabs
                    defaultValue="monthly"
                    value={selectedMembership}
                    onValueChange={setSelectedMembership}
                    className="mb-3"
                  >
                    <TabsList className="bg-[#1E293B] w-full">
                      <TabsTrigger value="monthly" className="flex-1">
                        Monthly
                      </TabsTrigger>
                      <TabsTrigger value="annual" className="flex-1">
                        Annual
                      </TabsTrigger>
                      <TabsTrigger value="daily" className="flex-1">
                        Day Pass
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="flex justify-between mb-3">
                    <span className="text-[#E2E8F0]/70">
                      {membershipOptions[selectedMembership].name}
                    </span>
                    <span className="font-medium">
                      {membershipOptions[selectedMembership].price}
                    </span>
                  </div>
                  <div className="flex justify-between mb-4 text-sm">
                    <span className="text-[#E2E8F0]/70">
                      ≈ {membershipOptions[selectedMembership].sats} sats
                    </span>
                    <span className="text-[#F7931A]">
                      {membershipOptions[selectedMembership].btc} BTC
                    </span>
                  </div>

                  <div className="rounded-lg bg-white p-4 flex justify-center">
                    <div className="w-36 h-36 bg-black flex items-center justify-center">
                      <Zap size={48} className="text-white" />
                    </div>
                  </div>
                  <button className="mt-3 text-sm text-center w-full py-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors">
                    Copy Invoice
                  </button>
                </div>

                <div className="bg-[#1F2937] rounded-lg p-4 border border-white/10">
                  <h4 className="font-medium mb-3">
                    Nostr-Powered Payment Benefits
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                        <Check size={12} className="text-[#22C55E]" />
                      </div>
                      <div>
                        <span className="font-medium">Decentralized</span>
                        <p className="text-sm text-[#E2E8F0]/70">
                          No middlemen. The payment goes directly to the gym.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                        <Lock size={12} className="text-[#22C55E]" />
                      </div>
                      <div>
                        <span className="font-medium">Privacy-first</span>
                        <p className="text-sm text-[#E2E8F0]/70">
                          You use your cryptographic identity — no emails or
                          passwords needed.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                        <Zap size={12} className="text-[#22C55E]" />
                      </div>
                      <div>
                        <span className="font-medium">Fast & low fees</span>
                        <p className="text-sm text-[#E2E8F0]/70">
                          Payments are done instantly with the Lightning
                          Network.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                        <Check size={12} className="text-[#22C55E]" />
                      </div>
                      <div>
                        <span className="font-medium">Proven ownership</span>
                        <p className="text-sm text-[#E2E8F0]/70">
                          Your booking is signed with your Nostr key.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1 mr-3 p-1 bg-[#22C55E]/20 rounded-full">
                        <Globe size={12} className="text-[#22C55E]" />
                      </div>
                      <div>
                        <span className="font-medium">Global & open</span>
                        <p className="text-sm text-[#E2E8F0]/70">
                          Anyone, anywhere can participate.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-sm text-center mt-4 text-[#E2E8F0]/70">
                    This transaction is verified through Nostr. You own the
                    proof.
                  </p>
                </div>
              </div>
            </ScrollArea>

            <div className="flex gap-3 mt-6 w-full">
              <button
                className="flex-1 py-3 bg-transparent border border-white/20 rounded-md text-[#E2E8F0] hover:bg-white/5 transition-colors"
                onClick={() => setShowMembershipDialog(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 py-3 bg-[#22C55E] rounded-md text-white hover:bg-[#22C55E]/90 transition-colors"
                onClick={() =>
                  handlePayment(membershipOptions[selectedMembership].sats)
                }
              >
                Confirm and Pay
              </button>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </section>
  );
};

export default PartnerSection;
