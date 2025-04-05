import React, { useEffect } from "react";
import { AtSign, KeyRound, HelpCircle, Box, Key, Eye } from "lucide-react";
import { Input } from "./ui/input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NostrLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if ((window as any).nostr?.getPublicKey) {
        try {
          const pubkey = await (window as any).nostr.getPublicKey();
          const challenge = crypto.randomUUID();

          const authEvent = {
            kind: 22242,
            created_at: Math.floor(Date.now() / 1000),
            tags: [["challenge", challenge]],
            content: "Login with Nostr",
            pubkey,
          };

          const signedEvent = await (window as any).nostr.signEvent(authEvent);
          if (
            signedEvent &&
            signedEvent.sig &&
            signedEvent.id &&
            signedEvent.pubkey === pubkey
          ) {
            navigate("/dashboard");
          } else {
            console.log("nostr auth error");
          }
        } catch (error) {
          console.log(`nostr auth error: ${error}`);
        }
      }
    })();
  });
  return (window as any).nostr?.getPublicKey ? (
    <></>
  ) : (
    <div className="w-full max-w-md mx-auto bg-gymstr-navy p-8 rounded-xl border border-gymstr-beige/10 shadow-lg">
      {/* Logo and Title */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-gymstr-orange flex items-center justify-center mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-10 h-10 text-gymstr-navy"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2zM9 17l-2-2 7-7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gymstr-beige">Sign in</h2>
      </div>

      {/* Main Input Form */}
      <div className="space-y-4">
        {/* Nostr Address Input */}
        <div className="relative">
          <div className="bg-gymstr-orange/10 w-full py-3 px-4 rounded-md flex items-center border border-gymstr-beige/10">
            <AtSign className="text-gymstr-beige mr-2" size={20} />
            <Input
              type="text"
              placeholder="Nostr Address"
              className="border-0 bg-transparent text-gymstr-beige focus-visible:ring-0 focus-visible:ring-offset-0 p-0 placeholder:text-gymstr-beige/60"
            />
          </div>
        </div>

        {/* Signing Device Button */}
        <div className="flex gap-2">
          <button className="bg-gymstr-orange/20 hover:bg-gymstr-orange/30 w-full py-3 px-4 rounded-md border border-gymstr-beige/10 text-gymstr-beige flex items-center justify-center transition-colors">
            <KeyRound className="mr-2" size={20} />
            Use Signing Device
          </button>

          <button className="bg-gymstr-orange/20 hover:bg-gymstr-orange/30 p-3 rounded-md border border-gymstr-beige/10 text-gymstr-beige flex items-center justify-center">
            <HelpCircle size={20} />
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="h-px bg-gymstr-beige/20 flex-grow"></div>
          <span className="px-4 text-gymstr-beige/60 text-sm">OR</span>
          <div className="h-px bg-gymstr-beige/20 flex-grow"></div>
        </div>

        {/* Alternative Login Methods */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-gymstr-navy hover:bg-gymstr-beige/5 border border-gymstr-beige/20 rounded-md p-4 transition-colors flex flex-col items-center">
            <Box className="text-gymstr-beige mb-2" size={28} />
            <span className="text-xs text-gymstr-beige/80">Nostr Connect</span>
          </button>

          <button className="bg-gymstr-navy hover:bg-gymstr-beige/5 border border-gymstr-beige/20 rounded-md p-4 transition-colors flex flex-col items-center">
            <Key className="text-gymstr-beige mb-2" size={28} />
            <span className="text-xs text-gymstr-beige/80">Private key</span>
          </button>

          <button className="bg-gymstr-navy hover:bg-gymstr-beige/5 border border-gymstr-beige/20 rounded-md p-4 transition-colors flex flex-col items-center">
            <Eye className="text-gymstr-beige mb-2" size={28} />
            <span className="text-xs text-gymstr-beige/80">Public key</span>
          </button>
        </div>
      </div>

      {/* Sign Up Link */}
      <div className="mt-8 text-center">
        <p className="text-gymstr-beige/60 mb-3">Don't have an account?</p>
        <Button variant="outline" className="w-full">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default NostrLogin;
