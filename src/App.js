import './App.css';
import Header from './/Header/Header';
import Hero from './/Hero/Hero';
import Skills from './/Skills/Skills';
import About from './/About/About';
import Projects from './/Projects/Projects';
import Footer from './/Footer/Footer';
import { useSelector } from 'react-redux';
import { selectToggle } from './Header/HeaderSlice';

function App() {
  const toggle = useSelector(selectToggle);
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  };

  return (
    <div className={toggle.isVisible ? `App` : `night`}>
      <Header />
      <Hero />
      <Projects/>
      <Skills/>
      <About/>
      <Footer/> 
    </div>
  );
}

export default App;
