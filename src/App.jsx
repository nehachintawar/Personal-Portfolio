import { useContext } from 'react';
import './app.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Skills from './components/Skills/Skills';
import { ThemeContext } from './contexts/theme';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <Home />

      <div>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
