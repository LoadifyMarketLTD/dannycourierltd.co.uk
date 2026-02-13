import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      title: 'Same Day Delivery',
      description: 'Urgent parcels delivered within hours across the UK',
      icon: '⚡',
    },
    {
      title: 'Express / Next Day',
      description: 'Fast overnight shipping for time-sensitive deliveries',
      icon: '🚀',
    },
    {
      title: 'Scheduled Transport',
      description: 'Plan ahead with our reliable scheduled delivery service',
      icon: '📅',
    },
    {
      title: 'Pallet Transport',
      description: 'Secure transportation for palletized goods',
      icon: '📦',
    },
    {
      title: 'UK-EU Road Freight',
      description: 'Cross-border transport between UK and Europe',
      icon: '🚛',
    },
    {
      title: 'Dedicated Van',
      description: 'Exclusive vehicle for your delivery needs',
      icon: '🚐',
    },
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Professional courier and logistics solutions tailored to your needs
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
