import Chips from './Chips.jsx'
import { hero, site } from '../data/content.js'

export default function Hero() {
  const profileImage = `${import.meta.env.BASE_URL}profile.webp`

  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="pill"><span className="dot" />{hero.greeting}</span>
          <h1>Hi,<br />我是 {hero.name}</h1>
          <div className="role">{hero.role}</div>
          <div className="motto"><b>个人理念</b>{hero.motto}</div>
          <p className="intro">{hero.intro}</p>
          <Chips items={hero.tags} />
          <div className="btns">
            <a className="btn btn-dark" href={site.resumeUrl} download>下载简历</a>
            <a className="btn btn-line" href="#contact">联系我</a>
          </div>
        </div>
        <div className="photo-col">
          <div className="photo-card">
            <img src={profileImage} alt="郑佳在深圳大学校园内与玩偶合影" fetchPriority="high" />
          </div>
          <div className="now-card"><em>NOW</em>{hero.status[0]}<br />{hero.status[1]}</div>
        </div>
      </div>
      <a className="pill scroll-hint" href="#edu">继续下滑，探索更多 ↓</a>
    </header>
  )
}
