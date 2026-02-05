import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact fade-in">
      <div className="container">
        <div className="page-header">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <h3>Email</h3>
                <p>info@myapp.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaPhone /></div>
              <div>
                <h3>Phone</h3>
                <p>+994 50 123 45 67</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h3>Address</h3>
                <p>Baku, Azerbaijan</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ {t('contact.success')}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.emailPlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t('contact.phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.phonePlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
