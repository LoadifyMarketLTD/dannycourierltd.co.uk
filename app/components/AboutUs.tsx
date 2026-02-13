import styles from './AboutUs.module.css'

export default function AboutUs() {
  const highlights = [
    'Experienced UK & EU coverage',
    'Proof of delivery workflow',
    'Transparent terms & pricing',
    'Hundreds of successful collaborations',
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About XDrive Logistics Ltd</h2>
          <p className={styles.description}>
            Established in 2021, XDrive Logistics Ltd has quickly become a trusted name 
            in courier and logistics services across the UK and Europe. We pride ourselves 
            on reliability, transparency, and delivering exceptional service to every client.
          </p>
          <p className={styles.description}>
            With hundreds of successful collaborations under our belt, we understand the 
            critical importance of timely, secure deliveries. Our experienced team works 
            around the clock to ensure your cargo reaches its destination safely and on time.
          </p>
          
          <div className={styles.highlights}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightItem}>
                <span className={styles.checkmark}>✓</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
