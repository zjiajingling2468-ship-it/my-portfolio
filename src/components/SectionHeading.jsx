export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <>
      <div className="eyebrow reveal">{eyebrow}</div>
      <h2 className="sec-title reveal">{title}</h2>
      <p className="sec-sub reveal">{subtitle}</p>
    </>
  )
}
