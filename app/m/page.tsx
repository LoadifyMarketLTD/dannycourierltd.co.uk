'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './m.module.css'

export default function MobileOpsPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (!token) {
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

  const tiles = [
    { title: 'Active Jobs', count: 0, color: '#1B63C6' },
    { title: 'Pickup', count: 0, color: '#1E7A3E' },
    { title: 'Delivery', count: 0, color: '#FF9800' },
    { title: 'History', count: 0, color: '#0A2239' },
  ]

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.logo}>XDrive Ops</h1>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </header>

      <main className={styles.main}>
        <h2 className={styles.title}>Mobile Operations</h2>
        <p className={styles.subtitle}>Quick access to your delivery operations</p>

        <div className={styles.tilesGrid}>
          {tiles.map((tile, index) => (
            <div 
              key={index} 
              className={styles.tile}
              style={{ borderLeftColor: tile.color }}
            >
              <div className={styles.tileCount}>{tile.count}</div>
              <div className={styles.tileTitle}>{tile.title}</div>
            </div>
          ))}
        </div>

        <div className={styles.infoBox}>
          <h3>Coming Soon</h3>
          <p>Full mobile operations interface including:</p>
          <ul>
            <li>Job management and tracking</li>
            <li>Photo upload for POD (Proof of Delivery)</li>
            <li>Digital signature capture</li>
            <li>Delay notifications</li>
            <li>Real-time status updates</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
