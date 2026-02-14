'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const WHY_XDRIVE = [
  '24/7 Availability',
  'Fast Response Time',
  'Fully Insured',
  'Professional Drivers',
  'Real-Time Communication',
];

export default function WhyXDrive() {
  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="max-w-2xl ml-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-wider"
          >
            <span className="text-gold">WHY </span>
            <span className="text-white">XDRIVE</span>
          </motion.h2>

          <div className="space-y-6">
            {WHY_XDRIVE.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-navy-light/50 backdrop-blur p-4 rounded-lg"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <Check size={20} className="text-navy-dark font-bold" />
                </div>
                <span className="text-xl text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
