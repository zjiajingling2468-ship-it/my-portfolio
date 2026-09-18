import { contact, site } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="card contact-card reveal">
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
          <div className="btns contact-buttons">
            <a className="btn btn-dark" href={`mailto:${contact.email}`}>{contact.emailLabel}</a>
            <a className="btn btn-line" href={site.resumeUrl} download>下载简历</a>
          </div>
        </div>
      </div>
    </section>
  )
}
