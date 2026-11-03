import { useEffect, useRef, useState } from 'react';
import { agent, agentDemo } from '../data/now';
import './AgentDemo.css';

const { question, steps, answer } = agentDemo;

// One frame per typed character, then one per tool step, then the answer.
const delays = [
  ...Array.from({ length: question.length }, () => 32),
  700,
  ...steps.map((s) => (s.kind === 'call' ? 650 : 900)),
];
const lastFrame = delays.length;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// PLACEHOLDER: scripted replay standing in for a real screenshot and recording of the agent
const AgentDemo = () => {
  const [frame, setFrame] = useState(() => (prefersReducedMotion() ? lastFrame : 0));
  const [playing, setPlaying] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !panel.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPlaying(true);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(panel.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || frame >= lastFrame) return;
    const timer = window.setTimeout(() => setFrame((f) => f + 1), delays[frame]);
    return () => window.clearTimeout(timer);
  }, [playing, frame]);

  const typed = question.slice(0, Math.min(frame, question.length));
  const stepsShown = Math.max(0, frame - question.length - 1);
  const done = frame >= lastFrame;

  const replay = () => {
    setFrame(0);
    setPlaying(true);
  };

  return (
    <div className="agent-demo" ref={panel}>
      <div className="agent-demo-bar mono">
        <span>{agent.name} · preview</span>
        <span>Illustrative data</span>
      </div>
      <div className="agent-demo-body" aria-live="off">
        <p className="ask"><span className="who mono">You</span>{typed}{!done && frame <= question.length && <span className="caret" aria-hidden="true" />}</p>
        {steps.slice(0, stepsShown).map((s, i) => (
          <p key={i} className={`step ${s.kind}`}><span aria-hidden="true">{s.kind === 'call' ? '→' : '✓'}</span> {s.text}</p>
        ))}
        {done && <p className="reply"><span className="who mono">{agent.name}</span>{answer}</p>}
      </div>
      <button className="replay mono" type="button" onClick={replay} disabled={!done}>
        {done ? 'Replay' : 'Running…'}
      </button>
    </div>
  );
};

export default AgentDemo;
