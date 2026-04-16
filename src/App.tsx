import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ChatBot } from './components/ChatBot';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { CV } from './pages/CV';
import { Contact } from './pages/Contact';
import { useApp } from './context/AppContext';
import Projects from './pages/Projects';

const AnimatedRoutes = () => {
  const location = useLocation();



  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};


export default function App() {
  const { dark } = useApp();

  return (
    <Router>
      <div className={`min-h-screen bg-white text-black dark:text-white transition-colors duration-300 ${!dark?'':'dark:bg-neutral-950'}`} >
        
        <div className={`min-h-screen bg-white text-black dark:text-white transition-colors duration-300 ${!dark?'':'dark:bg-neutral-950'}`}>

          <Navbar />
          <AnimatedRoutes />
          <ChatBot />

        </div>
      </div>
    </Router>
  )}
