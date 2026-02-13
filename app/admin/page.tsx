'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { isTokenExpired } from '../lib/auth-utils'
import styles from './admin.module.css'

export default function AdminPage() {
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

  const handleLogout = () => {
    localStorage.removeItem('auth_token')
    router.push('/')
  }

  if (!isAuthenticated) {
    return <div className={styles.loading}>Loading...</div>
  }

  const features = [
    {
      title: 'Invoices',
      description: 'Generate and manage invoices',
      icon: '📄',
      link: '/admin/invoices',
      available: true,
    },
    {
      title: 'Jobs',
      description: 'View and manage all jobs',
      icon: '📦',
      link: '/admin/jobs',
      available: false,
    },
    {
      title: 'Customers',
      description: 'Customer database',
      icon: '👥',
      link: '/admin/customers',
      available: false,
    },
    {
      title: 'Reports',
      description: 'Analytics and reports',
      icon: '📊',
      link: '/admin/reports',
      available: false,
    },
  ]

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>XDrive Logistics Admin</h1>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.welcomeSection}>
            <h2 className={styles.title}>Admin Dashboard</h2>
            <p className={styles.subtitle}>
              Manage your operations, invoices, and customer data
            </p>
          </div>

          <div className={styles.cardsGrid}>
            {features.map((feature, index) => (
              feature.available ? (
                <Link 
                  key={index}
                  href={feature.link}
                  className={styles.card}
                >
                  <div className={styles.cardIcon}>{feature.icon}</div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                </Link>
              ) : (
                <div key={index} className={`${styles.card} ${styles.cardDisabled}`}>
                  <div className={styles.cardIcon}>{feature.icon}</div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                  <span className={styles.comingSoon}>Coming Soon</span>
                </div>
              )
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
