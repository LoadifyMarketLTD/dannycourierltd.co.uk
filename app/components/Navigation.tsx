'use client'

import { useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('EN')

  const languages = ['EN', 'DE', 'FR', 'ES']

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>XDrive Logistics LTD</span>
        </div>

        <div className={`${styles.menuDesktop} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <button onClick={() => scrollToSection('hero')} className={styles.navLink}>
            Home
          </button>
          <button onClick={() => scrollToSection('services')} className={styles.navLink}>
            Services
          </button>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>
            About Us
          </button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
            Contact
          </button>
        </div>

        <div className={styles.navRight}>
          <div className={styles.langSwitcher}>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLang(lang)}
                className={`${styles.langBtn} ${currentLang === lang ? styles.langActive : ''}`}
              >
                {lang}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection('quote')} 
            className={styles.ctaButton}
          >
            Get a Quote
          </button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </nav>
  )
}
