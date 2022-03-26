import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Komponen/ClassNavbar";
import Hero from "./Komponen/ClassHero";
import About from "./Komponen/ClassAbout";
import Skills from "./Komponen/ClassSkills";
import Projects from "./Komponen/ClassProjects";
import Testi from "./Komponen/ClassTesti";
import Contact from "./Komponen/ClassContact";
import Footer from "./Komponen/ClassFooter";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Testi />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("news")
);
