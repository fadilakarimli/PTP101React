import { useTranslation } from 'react-i18next'
import { FaUsers, FaBullseye, FaRocket } from 'react-icons/fa'
import './About.css'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="about fade-in">
      <div className="container">
        <div className="page-header">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="about-image">
              <span className="about-emoji"><FaUsers /></span>
            </div>
            <div className="about-text">
              <p>{t('about.description')}</p>
            </div>
          </div>

          <div className="mission-vision">
            <div className="mission">
              <h2><FaBullseye /> {t('about.mission')}</h2>
              <p>{t('about.missionText')}</p>
            </div>
            <div className="vision">
              <h2><FaRocket /> {t('about.vision')}</h2>
              <p>{t('about.visionText')}</p>
            </div>
          </div>

          <div className="team-stats">
            <div className="stat">
              <h3>100+</h3>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Clients</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
