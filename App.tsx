import React, { useEffect, useState } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/ui/Cursor';
export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <div className="bg-black text-white w-full min-h-screen overflow-hidden">
      <Cursor />
      <AnimatePresence mode="wait">
        {loading ? <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="text-4xl font-bold relative">
              <span className="inline-block animate-pulse">Portfolio</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 animate-[loading_2s_ease-in-out]"></span>
            </div>
          </div> : <>
            <Navbar />
            <main className="w-full">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
          </>}
      </AnimatePresence>
    </div>;
}
export default App;