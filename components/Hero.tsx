'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const WHATSAPP_URL = 'https://wa.me/447423272138?text=Hello,%20I%20would%20like%20to%20request%20a%20quote';

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[70px] bg-navy-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #4a9eff 12%, transparent 12.5%, transparent 87%, #4a9eff 87.5%, #4a9eff), linear-gradient(150deg, #4a9eff 12%, transparent 12.5%, transparent 87%, #4a9eff 87.5%, #4a9eff), linear-gradient(30deg, #4a9eff 12%, transparent 12.5%, transparent 87%, #4a9eff 87.5%, #4a9eff), linear-gradient(150deg, #4a9eff 12%, transparent 12.5%, transparent 87%, #4a9eff 87.5%, #4a9eff)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}/>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase mb-6 leading-tight">
              <span className="block text-white">DRIVING EXCELLENCE</span>
              <span className="block text-white">IN LOGISTICS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              Fast • Secure • Reliable UK &amp; EU Transport
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-gold-light to-gold-dark hover:shadow-2xl hover:shadow-gold/50 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                Request a Quote
              </button>
              
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Image - Luton Van with Branding */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px]"
          >
            {/* Composite Image Representation with Luton Van */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Professional Man Silhouette */}
              <div className="absolute left-0 bottom-0 w-1/3 h-3/4 bg-gradient-to-t from-blue-accent/30 to-transparent rounded-lg" style={{
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
              }}/>
              
              {/* Luton Van with XDrive Branding - Main Focus */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Van Body */}
                <svg className="w-full h-auto max-w-2xl" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Van base structure */}
                  <defs>
                    <linearGradient id="vanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#e0e0e0', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Main van body */}
                  <rect x="150" y="100" width="500" height="200" rx="10" fill="url(#vanGradient)" stroke="#4a9eff" strokeWidth="3"/>
                  
                  {/* Van cab */}
                  <path d="M 150 200 L 100 200 L 100 250 L 80 280 L 150 280 Z" fill="url(#vanGradient)" stroke="#4a9eff" strokeWidth="3"/>
                  
                  {/* Wheels */}
                  <circle cx="200" cy="300" r="35" fill="#333" stroke="#666" strokeWidth="5"/>
                  <circle cx="200" cy="300" r="20" fill="#888"/>
                  <circle cx="580" cy="300" r="35" fill="#333" stroke="#666" strokeWidth="5"/>
                  <circle cx="580" cy="300" r="20" fill="#888"/>
                  
                  {/* XDrive Logistics Branding on Van */}
                  <rect x="200" y="130" width="400" height="140" fill="white" opacity="0.9" rx="5"/>
                  
                  {/* Company Logo */}
                  <text x="400" y="180" fontSize="48" fontWeight="800" textAnchor="middle" fill="#4a9eff">X</text>
                  <text x="430" y="180" fontSize="48" fontWeight="800" textAnchor="start" fill="#0a1628">DRIVE</text>
                  
                  {/* Logistics text */}
                  <text x="400" y="220" fontSize="32" fontWeight="600" textAnchor="middle" fill="#d4a574">LOGISTICS</text>
                  
                  {/* Phone number */}
                  <text x="400" y="250" fontSize="18" fontWeight="500" textAnchor="middle" fill="#0a1628">07423 272 138</text>
                </svg>
              </div>

              {/* Accent elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl"/>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-accent/20 rounded-full blur-3xl"/>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
