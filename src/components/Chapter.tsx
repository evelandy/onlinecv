import type { ReactNode } from 'react';

interface ChapterProps {
  id: string;
  num: string;
  title: ReactNode;
  folio: string;
  intro?: string;
  children: ReactNode;
}

const Chapter = ({ id, num, title, folio, intro, children }: ChapterProps) => (
  <section className="chapter wrap" id={id} aria-labelledby={`${id}-h`}>
    <div className="chapter-head">
      <div className="chapter-num" aria-hidden="true">{num}</div>
      <h2 id={`${id}-h`}>{title}</h2>
      <div className="folio mono">{folio}</div>
    </div>
    {intro && <p className="chapter-intro">{intro}</p>}
    {children}
  </section>
);

export default Chapter;
