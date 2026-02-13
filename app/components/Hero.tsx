'use client'

import styles from './Hero.module.css'

export default function Hero() {
  const scrollToQuote = () => {
    const element = document.getElementById('quote')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Reliable Same Day & Express Transport
            <br />
            Across the UK & Europe
          </h1>
          <p className={styles.subtitle}>
            Fast, Secure & On-Time Deliveries 24/7
          </p>
          <div className={styles.ctas}>
            <button onClick={scrollToQuote} className={styles.primaryBtn}>
              Get a Free Quote
            </button>
            <a href="tel:07423272138" className={styles.secondaryBtn}>
              Call Us: 07423 272 138
            </a>
          </div>
          <p className={styles.email}>
            Email: <a href="mailto:xdrivelogisticsltd@gmail.com">xdrivelogisticsltd@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
