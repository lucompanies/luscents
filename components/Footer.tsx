"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-ink border-t border-gold/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-gold/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="LU Scents" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="font-display text-lg tracking-widest">LU SCENTS</span>
            </div>
            <p className="text-parchment/45 text-sm leading-relaxed max-w-xs">
              Crafted with elegance. Made to leave a lasting impression. Launching soon.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-parchment/50 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-parchment/50 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="mailto:hello@luscents.com" aria-label="Email" className="text-parchment/50 hover:text-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Explore</p>
            <ul className="flex flex-col gap-3 text-sm text-parchment/50">
              <li><a href="#scents" className="hover:text-gold transition-colors">The Collection</a></li>
              <li><a href="#story" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#perks" className="hover:text-gold transition-colors">Why Pre-Order</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Stay in the Loop</p>
            <p className="text-parchment/45 text-sm mb-4">
              Get launch updates and early access drops straight to your inbox.
            </p>
            {subscribed ? (
              <p className="text-sm text-gold">You&rsquo;re on the list. Thank you.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field !py-2.5 flex-1"
                />
                <button type="submit" className="btn-outline !px-4 !py-2.5 whitespace-nowrap">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-parchment/35 uppercase tracking-wide">
          <p>© {new Date().getFullYear()} LU Scents. All rights reserved.</p>
          <p>Your Signature. Your Scent.</p>
        </div>
      </div>
    </footer>
  );
}
