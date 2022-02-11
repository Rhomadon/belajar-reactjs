import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Komponen/ClassNavbar'
import Hero from './Komponen/ClassHero'
import About from './Komponen/ClassAbout'
import Skills from './Komponen/ClassSkills'
import Projects from './Komponen/ClassProjects'
import Testi from './Komponen/ClassTesti'
import Contact from './Komponen/ClassContact'
import Footer from './Komponen/ClassFooter'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('Navbar')
);

ReactDOM.render(
  <React.StrictMode>
    <Hero />
  </React.StrictMode>,
  document.getElementById('Hero')
);

ReactDOM.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
  document.getElementById('About')
);

ReactDOM.render(
  <React.StrictMode>
    <Skills />
  </React.StrictMode>,
  document.getElementById('Skills')
);

ReactDOM.render(
  <React.StrictMode>
    <Projects />
  </React.StrictMode>,
  document.getElementById('Projects')
);

ReactDOM.render(
  <React.StrictMode>
    <Testi />
  </React.StrictMode>,
  document.getElementById('Testi')
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('Contact')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('Footer')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
