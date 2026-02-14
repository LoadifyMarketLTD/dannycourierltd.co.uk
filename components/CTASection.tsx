'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background with highway effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-light to-navy-dark">
        {/* Animated road lines effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-1/2"/>
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform -translate-y-8"/>
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/30 transform translate-y-8"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/50 to-navy-dark/90" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Ready to Move Your Freight?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-10"
        >
          Fast quote in under 100 minutes.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-gold-light to-gold-dark hover:shadow-2xl hover:shadow-gold/50 text-white font-bold text-xl py-5 px-12 rounded-lg transition-all duration-300 hover:scale-105 mb-12"
        >
          Get Instant Quote
        </motion.button>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 text-white"
        >
          <a
            href="tel:07423272138"
            className="flex items-center gap-3 hover:text-gold transition-colors"
          >
            <Phone size={24} />
            <span className="text-lg font-medium">07423 272 138</span>
          </a>
          
          <a
            href="mailto:xdrvielogisticoltd@gmail.com"
            className="flex items-center gap-3 hover:text-gold transition-colors"
          >
            <Mail size={24} />
            <span className="text-lg">xdrvielogisticoltd@gmail.com</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
