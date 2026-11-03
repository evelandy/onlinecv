import './Colophon.css';

const Colophon = () => (
  <footer className="wrap">
    <div className="colophon">
      <div><h4>Colophon</h4><p>Set in Bodoni Moda and Literata, with IBM Plex Mono for the margins.</p></div>
      <div><h4>Built with</h4><p>React, TypeScript and Vite. Hosted on GitHub Pages.</p></div>
      <div><h4>Edition</h4><p>Follows your system’s light or dark setting. Use the switch at the top to pick.</p></div>
    </div>
    <div className="end-mark" aria-hidden="true">❦</div>
  </footer>
);

export default Colophon;
