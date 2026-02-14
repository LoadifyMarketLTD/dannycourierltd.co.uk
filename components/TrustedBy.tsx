'use client';

import { motion } from 'framer-motion';

const TRUSTED_COMPANIES = [
  { name: 'Amazon', style: 'italic lowercase' },
  { name: 'ROYAL MAIL', style: 'font-bold tracking-widest' },
  { name: 'CONSTRUCT', style: 'font-semibold' },
  { name: 'BUILDEX', style: 'font-semibold' },
  { name: 'CITY EXPRESS', style: 'font-semibold' },
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-navy-light">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white uppercase tracking-wider"
        >
          TRUSTED BY UK BUSINESSES
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {TRUSTED_COMPANIES.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur px-8 py-6 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <span className={`text-2xl text-white ${company.style}`}>
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
