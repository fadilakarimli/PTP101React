import { useTranslation } from 'react-i18next'
import Card from '../components/Card'
import { FaBolt, FaRocket, FaMobileAlt } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="home fade-in">
      <section className="hero">
        <div className="container">
          <h1>{t('home.title')}</h1>
          <p>{t('home.subtitle')}</p>
        </div>
      </section>

      <section className="cards-section">
        <div className="container">
          <div className="cards-grid">
            <Card
              icon={<FaBolt />}
              title={t('home.card1Title')}
              description={t('home.card1Desc')}
            />
            <Card
              icon={<FaRocket />}
              title={t('home.card2Title')}
              description={t('home.card2Desc')}
            />
            <Card
              icon={<FaMobileAlt />}
              title={t('home.card3Title')}
              description={t('home.card3Desc')}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
