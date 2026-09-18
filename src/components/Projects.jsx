import Chips from './Chips.jsx'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="proj" className="section-after-first">
      <div className="wrap">
        <SectionHeading {...projects} />
        <div className="proj-list">
          {projects.items.map((project, index) => (
            <article className="card proj-card reveal" key={project.title}>
              <div>
                <div className="p-num">{String(index + 1).padStart(2, '0')}</div>
                <div className="p-meta">{project.meta}</div>
                <h3>{project.title}</h3>
                <div className="p-role">{project.role}</div>
                <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <Chips items={project.tags} />
              </div>
              <div className={`p-img ${project.imageClass}`} role="img" aria-label={project.imageLabel}>
                <span>{project.icon}</span>{project.imageLabel}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
