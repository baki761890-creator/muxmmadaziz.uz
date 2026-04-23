import React, { useEffect, useState } from 'react';
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


// 🔹 Welcome (CALLIGRAPHY + TYPING)
const Welcome = () => {
  const text = "Welcome to my portfolio";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1
        className="text-5xl md:text-6xl text-white text-center"
        style={{ fontFamily: 'Dancing Script, cursive' }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </h1>
    </motion.div>
  );
};


// 🔹 Routes animatsiya bilan
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
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


// 🔹 Main App
export default function App() {
  const { dark } = useApp();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // ⏱ 4 sekund (typing bilan mos)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${dark ? 'dark bg-neutral-950 text-white' : 'bg-white text-black'}`}>

        {loading ? (
          <Welcome />
        ) : (
          <>
            <Navbar />
            <AnimatedRoutes />
            <ChatBot />
          </>
        )}

      </div>
    </Router>
  );
}