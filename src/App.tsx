import RunningHead from './components/RunningHead';
import TitlePage from './components/TitlePage';
import Now from './components/Now';
import Experience from './components/Experience';
import Work from './components/Work';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Colophon from './components/Colophon';

const App = () => (
  <>
    <a className="skip" href="#now">Skip to content</a>
    <RunningHead />
    <main id="top">
      <TitlePage />
      <Now />
      <Experience />
      <Work />
      <Toolkit />
      <Contact />
    </main>
    <Colophon />
  </>
);

export default App;
