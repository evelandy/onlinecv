import { useRef } from 'react';
import { profile } from '../data/profile';
import { useTheme } from '../hooks/useTheme';
import { chapters } from './chapters';
import './RunningHead.css';

const RunningHead = () => {
  const { theme, setTheme } = useTheme();
  const contents = useRef<HTMLDetailsElement>(null);
  const closeContents = () => contents.current?.removeAttribute('open');

  return (
    <header className="head">
      <div className="wrap">
        <a className="brand" href="#top">{profile.initials}<span>.</span></a>
        <nav className="chapters" aria-label="Chapters">
          {chapters.map((c) => (
            <a key={c.id} className="mono" href={`#${c.id}`}><b>{c.num}</b>{c.label}</a>
          ))}
        </nav>
        <details className="contents" ref={contents}>
          <summary className="mono">Contents</summary>
          <nav aria-label="Chapters">
            {chapters.map((c) => (
              <a key={c.id} className="mono" href={`#${c.id}`} onClick={closeContents}><b>{c.num}</b>{c.label}</a>
            ))}
          </nav>
        </details>
        <button
          className="edition mono"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? 'Day edition' : 'Night edition'}
        </button>
      </div>
    </header>
  );
};

export default RunningHead;
