'use client';

import { motion } from 'framer-motion';
import { Zap, Package, MapPin } from 'lucide-react';

const SERVICES = [
  {
    title: 'Express Courier',
    description: 'Rapid same-day deliveries',
    icon: Zap,
  },
  {
    title: 'Pallet & Freight',
    description: 'Secure pallet and freight shipping',
    icon: Package,
  },
  {
    title: 'UK & EU Transport',
    description: 'Reliable transport across UK & Europe',
    icon: MapPin,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-navy-light">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wider"
        >
          OUR SERVICES
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border-2 border-blue-accent rounded-xl p-8 bg-navy-dark/50 backdrop-blur hover:bg-navy-dark transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-accent/20"
              >
                <div className="mb-4 text-gold text-5xl">
                  <Icon size={48} className="text-blue-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/80 text-lg">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
