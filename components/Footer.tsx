'use client';

import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo & Tagline */}
          <div>
            <div className="text-2xl font-extrabold mb-4 tracking-wide">
              <span className="text-blue-accent">X</span>
              <span className="text-white">DRIVE LOGISTICS</span>
            </div>
            <p className="text-white/70">UK Transport &amp; Courier Services</p>
          </div>

          {/* Center - Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Navigation</h3>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-white/70 hover:text-gold transition-colors">
                Home
              </a>
              <a href="#services" className="text-white/70 hover:text-gold transition-colors">
                Services
              </a>
              <a href="#contact" className="text-white/70 hover:text-gold transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right - Social & Privacy */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
            <a href="#" className="text-white/70 hover:text-gold transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© 2025 SomeLightfalls. All rights reserved. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
