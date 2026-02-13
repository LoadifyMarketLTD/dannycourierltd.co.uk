'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isTokenExpired } from '../../lib/auth-utils'
import styles from './invoices.module.css'

export default function InvoicesPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem('auth_token')
      router.push('/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <Link href="/admin" className={styles.backLink}>
            ← Back to Dashboard
          </Link>
          <h1 className={styles.logo}>Invoice Management</h1>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Invoices</h2>
            <button className={styles.createBtn}>
              + Create New Invoice
            </button>
          </div>

          <div className={styles.infoBox}>
            <h3>Invoice System - Coming Soon</h3>
            <p>Full invoice management system with the following features:</p>
            
            <div className={styles.featuresList}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>📄</span>
                <div>
                  <h4>Professional Invoice Templates</h4>
                  <p>Matching your brand with blue bands and clean layout</p>
                </div>
              </div>

              <div className={styles.feature}>
                <span className={styles.featureIcon}>💾</span>
                <div>
                  <h4>PDF Generation & Download</h4>
                  <p>One-click PDF export for sharing with clients</p>
                </div>
              </div>

              <div className={styles.feature}>
                <span className={styles.featureIcon}>✉️</span>
                <div>
                  <h4>Email Sending</h4>
                  <p>Send invoices directly to clients via email</p>
                </div>
              </div>

              <div className={styles.feature}>
                <span className={styles.featureIcon}>💬</span>
                <div>
                  <h4>WhatsApp Integration</h4>
                  <p>Share invoice summaries via WhatsApp</p>
                </div>
              </div>

              <div className={styles.feature}>
                <span className={styles.featureIcon}>💳</span>
                <div>
                  <h4>Payment Options</h4>
                  <p>Bank Transfer & PayPal details included</p>
                </div>
              </div>

              <div className={styles.feature}>
                <span className={styles.featureIcon}>📅</span>
                <div>
                  <h4>Payment Terms</h4>
                  <p>14 or 30 days terms with late fee tracking (£25/week)</p>
                </div>
              </div>
            </div>

            <div className={styles.templateInfo}>
              <h4>Invoice Template Includes:</h4>
              <ul>
                <li>Company details: XDrive Logistics Ltd</li>
                <li>Job reference and invoice number</li>
                <li>Pickup and delivery details with timestamps</li>
                <li>Photo thumbnails (optional)</li>
                <li>Amount payable and payment methods</li>
                <li>Payment terms (14/30 days)</li>
                <li>Late fee policy</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
