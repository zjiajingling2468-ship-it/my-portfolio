import Chips from './Chips.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="section-after-first">
      <div className="wrap">
        <SectionHeading {...skills} />
        <div className="skill-grid">
          {skills.groups.map((group) => (
            <article className="card skill-card reveal" key={group.title}>
              <h3><span>{group.icon}</span>{group.title}</h3>
              <Chips items={group.items} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
