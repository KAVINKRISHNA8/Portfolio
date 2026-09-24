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
    <div className="min-h-screen bg-[#fbf9f5] text-[#1f1c19] font-sans selection:bg-[#dfd3c3] selection:text-[#1f1c19] relative">
      {/* Background ambient warm oatmeal & linen lighting */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#ede5dc]/80 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-[#dfd5c8]/60 rounded-full blur-[160px] pointer-events-none -z-10" />

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
