import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaHome, FaBlog, FaInfoCircle, FaEnvelope } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const { t, i18n } = useTranslation()
  const language = i18n.language
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h2>MyApp</h2>
          </div>
          
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                <FaHome /> {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
                <FaBlog /> {t('nav.blog')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                <FaInfoCircle /> {t('nav.about')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                <FaEnvelope /> {t('nav.contact')}
              </NavLink>
            </li>
          </ul>

          <div className="language-switcher">
            <button 
              className={language === 'az' ? 'active' : ''} 
              onClick={() => changeLanguage('az')}
            >
              AZ
            </button>
            <button 
              className={language === 'en' ? 'active' : ''} 
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button 
              className={language === 'ru' ? 'active' : ''} 
              onClick={() => changeLanguage('ru')}
            >
              RU
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
