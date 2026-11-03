import { profile } from '../data/profile';
import { agent } from '../data/now';
import './TitlePage.css';

const TitlePage = () => {
  const { lede, links, resumeUrl } = profile;

  return (
    <section className="title-page wrap" aria-labelledby="name">
      <div className="eyebrow mono"><span>Field notes</span><span>{profile.edition}</span><span>{profile.site}</span></div>

      <h1 className="name" id="name">{profile.firstName} <em>{profile.lastName}<span className="dot">.</span></em></h1>

      <div className="dimension" role="img" aria-label="Full stack, from interface to database">
        <span className="end">Interface</span>
        <span className="line" />
        <span className="label">Full stack</span>
        <span className="line" />
        <span className="end">Database</span>
      </div>

      <div className="title-note" aria-hidden="true">
        <span className="pencil">+ the AI agents<br />on top of it all</span>
        <svg width="90" height="40" viewBox="0 0 90 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M80 4 C 60 30, 30 34, 6 26" />
          <path d="M14 20 L5 26 L15 31" />
        </svg>
      </div>

      <div className="lede-row">
        <p className="lede">{lede.before}<strong>{lede.highlight}</strong>{lede.after}</p>
        <div>
          <dl className="manifest">
            <div><dt className="mono">Status</dt><dd><span className="live" aria-hidden="true" />{profile.status}</dd></div>
            <div><dt className="mono">Building</dt><dd>{agent.name}, an agentic AI assistant for OCTG</dd></div>
            <div><dt className="mono">Running</dt><dd><a href={links.studio.href}>GrDev</a>, my software studio</dd></div>
          </dl>
          <div className="actions">
            <a className="btn solid" href="#contact">Get in touch</a>
            {resumeUrl
              ? <a className="btn" href={resumeUrl} download="William-Griffin-Resume.pdf">Download résumé</a>
              : <a className="btn" href="#experience">Read the résumé</a>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitlePage;
