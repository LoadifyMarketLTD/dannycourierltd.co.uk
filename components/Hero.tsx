'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

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

          {/* Right Image - REAL Luton Van Photo with Branding */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px]"
          >
            {/* Background Highway Image */}
            <div className="absolute inset-0 opacity-20 blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
                alt="Highway background"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>

            {/* Real Luton Van Image with fallback background */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-light/50 to-navy-dark/80">
              <div className="relative w-full h-full max-w-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1000&q=80"
                  alt="White Luton Van - Professional Transport"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  unoptimized
                />
                
                {/* Text Overlay for Company Branding - MAIN FOCUS */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/98 backdrop-blur-md px-10 py-8 rounded-xl shadow-2xl border-4 border-blue-accent transform hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3">
                        <span className="text-blue-accent drop-shadow-lg">X</span>
                        <span className="text-navy-dark">DRIVE</span>
                      </div>
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gold mb-3 tracking-wider">LOGISTICS</div>
                      <div className="text-xl md:text-2xl font-bold text-navy-dark border-t-2 border-gold pt-3 mt-2">
                        📞 07423 272 138
                      </div>
                      <div className="text-sm md:text-base text-navy-dark/70 mt-2 font-medium">
                        Professional Transport Services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent pointer-events-none"/>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl"/>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-accent/20 rounded-full blur-3xl"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
