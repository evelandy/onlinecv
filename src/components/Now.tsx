import Chapter from './Chapter';
import AgentDemo from './AgentDemo';
import { agent, nowEntries } from '../data/now';
import './Now.css';

const Now = () => (
  <Chapter id="now" num="01" title={<>Now <em>on the bench</em></>} folio="p. 3" intro="What I’m building this season. Updated as things ship.">
    <div className="log">
      <article className="entry feature">
        <span className="pencil margin" aria-hidden="true">the one to watch</span>
        <div className="tag mono"><span>{agent.fig} · {agent.state}</span><span>{agent.when}</span></div>
        <h3>{agent.name} <span className="aside">({agent.subtitle})</span></h3>
        <p>{agent.body}</p>
        <div className="feature-split">
          <ol className="flow" aria-label="How a question flows through the agent">
            {agent.flow.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <AgentDemo />
        </div>
        <div className="progress" role="progressbar" aria-label="Build progress" aria-valuenow={agent.progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="bar"><div className="fill" style={{ width: `${agent.progress}%` }} /></div>
          <div className="scale mono"><span>Build progress</span><span>{agent.progress}%</span></div>
        </div>
        <ul className="chips" aria-label="Stack">
          {agent.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </article>

      {nowEntries.map((e) => (
        <article key={e.id} className="entry side">
          <div className="tag mono"><span>{e.fig} · {e.state}</span><span>{e.when}</span></div>
          <h3>{e.title}</h3>
          <p>{e.body}</p>
          {e.stack && <ul className="chips" aria-label="Stack">{e.stack.map((s) => <li key={s}>{s}</li>)}</ul>}
          {e.link && <div className="links"><a href={e.link.href} target="_blank" rel="noopener noreferrer">{e.link.label} ↗</a></div>}
        </article>
      ))}
    </div>
  </Chapter>
);

export default Now;
