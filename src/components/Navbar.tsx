import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Github, Mail, Phone } from 'lucide-react';
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {dark ,setDark}=useApp()
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'CV', path: '/cv' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40  border-b-0 m-4 rounded-2xl ${dark?`glass`:`bg-white text-black shadow-2xl shadow-black`}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="text-3xl font-bold tracking-tighter">
          M<span className="text-emerald-400">A</span>
        </NavLink>
      
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
            className={({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-emerald-400 ${
    isActive
      ? 'text-emerald-400'
      : dark
      ? 'text-neutral-400'
      : 'text-black'
  }`
}
            >
              {item.name}
            </NavLink>
          ))}
           
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

            {
              dark?(
                 <MdOutlineDarkMode className='text-yellow-300 text-2xl'  onClick={()=>setDark(!dark)} />
                ):<CiLight className='text-yellow-300 text-2xl' onClick={()=>setDark(!dark)}/>
              }
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors ${
                      isActive ? 'text-emerald-400' : 'text-neutral-400'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
        
          </motion.div>
        )}
      </AnimatePresence>
       
    </nav>
    
  );
};

import { AnimatePresence } from 'motion/react';import { useApp } from '../context/AppContext';

