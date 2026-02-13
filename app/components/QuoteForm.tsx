'use client'

import { useState, FormEvent } from 'react'
import styles from './QuoteForm.module.css'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pickup: '',
    delivery: '',
    cargoType: '',
    quantity: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    // Validation
    if (!formData.name || !formData.email || !formData.pickup || !formData.delivery || !formData.cargoType) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields')
      return
    }

    try {
      // Email sending via API route
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          pickup: '',
          delivery: '',
          cargoType: '',
          quantity: '',
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed to send quote request')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send request. Please try again or contact us directly.')
      console.error('Quote submission error:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="quote" className={styles.quoteSection}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Quote Form Card */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Get a Quick Quote</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  placeholder="Pickup Location *"
                  className={styles.input}
                  required
                />
                <input
                  type="text"
                  name="delivery"
                  value={formData.delivery}
                  onChange={handleChange}
                  placeholder="Delivery Location *"
                  className={styles.input}
                  required
                />
              </div>
              
              <div className={styles.formRow}>
                <select
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select Cargo Type *</option>
                  <option value="documents">Documents</option>
                  <option value="parcels">Parcels</option>
                  <option value="pallets">Pallets</option>
                  <option value="furniture">Furniture</option>
                  <option value="vehicle">Vehicle Parts</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Quantity (optional)"
                  className={styles.input}
                />
              </div>

              {status === 'error' && (
                <div className={styles.errorMessage}>
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className={styles.successMessage}>
                  ✅ Request sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              <div className={styles.submitRow}>
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Request a Quote'}
                </button>
              </div>
            </form>
          </div>

          {/* Image Card */}
          <div className={styles.imageCard}>
            <img 
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800" 
              alt="Delivery Van" 
              className={styles.image}
            />
            <div className={styles.imageCaption}>
              <h3>Professional Courier Services</h3>
              <p>Trusted by businesses across the UK & Europe</p>
            </div>
          </div>
        </div>

        {/* Contact Quick Buttons */}
        <div className={styles.contactButtons}>
          <a 
            href="https://wa.me/447423272138" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.contactBtn} ${styles.whatsapp}`}
          >
            <span className={styles.btnIcon}>💬</span>
            WhatsApp
          </a>
          <a 
            href="mailto:xdrivelogisticsltd@gmail.com" 
            className={`${styles.contactBtn} ${styles.email}`}
          >
            <span className={styles.btnIcon}>✉️</span>
            Email Us
          </a>
          <a 
            href="tel:07423272138" 
            className={`${styles.contactBtn} ${styles.call}`}
          >
            <span className={styles.btnIcon}>📞</span>
            Call Now
          </a>
        </div>

        {/* Trust Bar */}
        <div className={styles.trustBar}>
          <p>Trusted by Courier Exchange</p>
        </div>
      </div>
    </section>
  )
}
