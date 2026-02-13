import styles from './BenefitsStrip.module.css'

export default function BenefitsStrip() {
  const benefits = [
    {
      icon: '🕐',
      title: '24/7 Service',
      description: 'Round-the-clock availability',
    },
    {
      icon: '🌍',
      title: 'Nationwide & Europe',
      description: 'UK and European coverage',
    },
    {
      icon: '✓',
      title: 'Fully Insured',
      description: 'Complete protection',
    },
  ]

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <div className={styles.icon}>{benefit.icon}</div>
              <h3 className={styles.title}>{benefit.title}</h3>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
