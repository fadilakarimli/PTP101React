import { useTranslation } from 'react-i18next'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2026 MyApp. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}

export default Footer
