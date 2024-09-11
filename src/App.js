import './App.css';
import Header from './/Header/Header';
import Hero from './/Hero/Hero';
import Skills from './/Skills/Skills';
import About from './/About/About';
import Projects from './/Projects/Projects';
import Footer from './/Footer/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    //Format webpage to scroll to top on reload or entering site
    window.scrollTo(0,0);
  }, []);

  return (
    <div className={`App`}>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
