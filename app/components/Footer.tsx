import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.companyName}>XDrive Logistics Ltd</h3>
            <p className={styles.established}>Established 2021</p>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <p className={styles.footerText}>
              <a href="tel:07423272138">07423 272 138</a>
            </p>
            <p className={styles.footerText}>
              <a href="mailto:xdrivelogisticsltd@gmail.com">
                xdrivelogisticsltd@gmail.com
              </a>
            </p>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Payment Terms</h4>
            <p className={styles.footerText}>14 days (standard)</p>
            <p className={styles.footerText}>30 days (by arrangement)</p>
            <p className={styles.footerText}>Late fee: £25 per week overdue</p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} XDrive Logistics Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
