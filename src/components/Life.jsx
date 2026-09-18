import SectionHeading from './SectionHeading.jsx'
import { life } from '../data/content.js'

export default function Life() {
  return (
    <section id="life" className="section-after-first">
      <div className="wrap">
        <SectionHeading {...life} />
        <div className="life-grid">
          {life.items.map((item) => (
            <article className="card life-card reveal" key={item.title}>
              <div className="icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
