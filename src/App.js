import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Aboutme from "./components/aboutme/aboutme"; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Define la ruta para la página principal */}
          <Route path="/" element={
            <div className="content">
              <Hero />
              <Projects />
            </div>
          } />
          {/* Define la ruta para la página de Contact */}
          <Route path="/contact" element={
            <div className="contact-page">
              <Aboutme />
              <Contact />
            </div>} 
            />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
