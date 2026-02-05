import { useTranslation } from 'react-i18next'
import { FaEdit, FaPalette, FaCode, FaBolt } from 'react-icons/fa'
import './Blog.css'

const Blog = () => {
  const { t } = useTranslation()

  const blogPosts = [
    {
      id: 1,
      titleKey: 'blog.post1Title',
      date: '2026-02-01',
      excerptKey: 'blog.post1Excerpt',
      image: <FaEdit />
    },
    {
      id: 2,
      titleKey: 'blog.post2Title',
      date: '2026-01-28',
      excerptKey: 'blog.post2Excerpt',
      image: <FaPalette />
    },
    {
      id: 3,
      titleKey: 'blog.post3Title',
      date: '2026-01-25',
      excerptKey: 'blog.post3Excerpt',
      image: <FaCode />
    },
    {
      id: 4,
      titleKey: 'blog.post4Title',
      date: '2026-01-20',
      excerptKey: 'blog.post4Excerpt',
      image: <FaBolt />
    }
  ]

  return (
    <div className="blog fade-in">
      <div className="container">
        <div className="page-header">
          <h1>{t('blog.title')}</h1>
          <p>{t('blog.subtitle')}</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-icon">{post.image}</div>
              <div className="blog-content">
                <h3>{t(post.titleKey)}</h3>
                <p className="blog-date">{post.date}</p>
                <p className="blog-excerpt">{t(post.excerptKey)}</p>
                <button className="read-more">{t('blog.readMore')} →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
