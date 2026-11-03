import Chapter from './Chapter';
import experience from '../data/experience';
import './Experience.css';

const Experience = () => (
  <Chapter id="experience" num="02" title="Experience" folio="p. 11" intro="Read it like a table of contents. Open any chapter for the details.">
    <ol className="toc">
      {experience.map((job, i) => (
        <li key={job.company}>
          <details open={i < 2}>
            <summary>
              <span className="no">2.{i + 1}</span>
              <span className="co">{job.company}<small>{job.title}</small></span>
              <span className="leader" />
              <span className="yrs">{job.years}</span>
              <span className="chev" aria-hidden="true">+</span>
            </summary>
            <div className="body">
              <ul>{job.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              <div className="stack">
                <span className="mono">Stack</span>
                <ul className="chips">{job.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            </div>
          </details>
        </li>
      ))}
    </ol>
  </Chapter>
);

export default Experience;
