import Chips from './Chips.jsx'
import SectionHeading from './SectionHeading.jsx'
import { education } from '../data/content.js'

export default function Education() {
  return (
    <section id="edu">
      <div className="wrap">
        <SectionHeading {...education} />
        <article className="card school-single reveal">
          <div className="school-image" role="img" aria-label="深圳大学主题视觉"><span>🏛️</span>深圳大学 · SHENZHEN UNIVERSITY</div>
          <div className="body">
            <div className="date">{education.school.date}</div>
            <div className="deg">{education.school.degree}</div>
            <h3>{education.school.name}</h3>
            <p>{education.school.description}</p>
          </div>
        </article>
        <article className="card info-card reveal">
          <h3>荣誉与成就</h3>
          <Chips items={education.honors} />
        </article>
        <article className="card info-card reveal">
          <h3>主修课程亮点</h3>
          <div className="courses">
            {education.courses.map((course) => <div className="course" key={course}>{course}</div>)}
          </div>
        </article>
      </div>
    </section>
  )
}
