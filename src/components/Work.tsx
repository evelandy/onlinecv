import Chapter from './Chapter';
import projects from '../data/projects';
import './Work.css';

const Work = () => (
  <Chapter id="work" num="03" title={<>Selected <em>work</em></>} folio="p. 19">
    <div className="plates">
      {projects.map((p, i) => (
        <article key={p.title} className="plate">
          <figure>
            <div className="frame"><img src={p.image.src} alt={p.image.alt} loading="lazy" /></div>
            <figcaption className="mono"><span><b>Fig. 3.{i + 1}</b> {p.image.caption}</span><span>{p.image.note}</span></figcaption>
          </figure>
          <div>
            <h3>{p.title} <em>{p.kicker}</em></h3>
            <p>{p.body}</p>
            <dl className="spec-mini">
              {p.spec.map(([label, value]) => <div key={label}><dt className="mono">{label}</dt><dd>{value}</dd></div>)}
            </dl>
            <div className="links">{p.links.map((l) => <a key={l.href} href={l.href}>{l.label} ↗</a>)}</div>
          </div>
        </article>
      ))}
    </div>
  </Chapter>
);

export default Work;
