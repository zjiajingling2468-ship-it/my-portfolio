import SectionHeading from './SectionHeading.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="work" className="section-after-first">
      <div className="wrap">
        <SectionHeading {...experience} />
        <div className="timeline">
          {experience.items.map((item, index) => (
            <article className="t-item reveal" key={item.company}>
              <div className="t-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
              <div className="card t-card">
                <div className="date">{item.date}</div>
                <h3>{item.company}</h3><span className="en">{item.englishName}</span>
                <div><span className="pos">{item.role}</span></div>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
