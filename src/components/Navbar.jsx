import { useEffect, useState } from 'react'
import { navigation, site } from '../data/content.js'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const sections = document.querySelectorAll('header[id], section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="nav" aria-label="主导航">
      <a className="brand-lockup" href="#top" aria-label="回到关于我">
        <span className="avatar" aria-hidden="true">🌸</span>
        <span className="brand">PORTFOLIO</span>
      </a>
      <div className="links">
        {navigation.map((item) => (
          <a
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            aria-current={activeSection === item.id ? 'page' : undefined}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </div>
      <a className="resume" href={site.resumeUrl} download>简历.pdf ↗</a>
    </nav>
  )
}
