import './App.css';
import Header from './/Header/Header';
import Hero from './/Hero/Hero';
import Skills from './/Skills/Skills';
import About from './/About/About';
import Projects from './/Projects/Projects';
import Footer from './/Footer/Footer';

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  };

  return (
    <div className="App">
      <Header />
      <Hero />     
      <Skills/>
      <About/>
      <Projects/>
      <Footer/> 
    </div>
  );
}

export default App;
