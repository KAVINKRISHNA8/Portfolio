import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d11] text-[#f8fafc] font-sans selection:bg-[#f59e0b] selection:text-[#0d0d11] relative">
      {/* Background ambient titanium & sunset amber lighting */}
      <div className="fixed inset-0 bg-grid-pattern opacity-25 pointer-events-none -z-10" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#f59e0b]/8 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-[#d97706]/6 rounded-full blur-[170px] pointer-events-none -z-10" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
