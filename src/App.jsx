import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Life from './components/Life.jsx'
import Contact from './components/Contact.jsx'

function useRevealOnScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll('.reveal')

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('in'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useRevealOnScroll()

  return (
    <>
      <a className="skip-link" href="#top">跳到主要内容</a>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Life />
        <Contact />
      </main>
      <footer className="foot-note">
        © 2026 郑佳 · <a href="#top">回到顶部 ↑</a>
      </footer>
    </>
  )
}
