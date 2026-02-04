
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
          <Stats />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="resume" className="py-20 bg-[#080808]">
          <Resume />
        </section>
        <section id="service" className="py-20">
          <Services />
        </section>
        <section id="skills" className="py-20 bg-[#080808]">
          <Skills />
        </section>
        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>
        <section id="pricing" className="py-20 bg-[#080808]">
          <Pricing />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
