'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-[1400px] mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-blue-accent">X</span>
          <span className="text-white">DRIVE LOGISTICS</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-gold transition-colors">
            Home
          </a>
          <a href="#services" className="text-white hover:text-gold transition-colors">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gold transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white flex items-center gap-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="text-sm font-semibold">MENU</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light border-t border-white/10">
          <div className="flex flex-col py-4 px-6 gap-4">
            <a
              href="#home"
              className="text-white hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
