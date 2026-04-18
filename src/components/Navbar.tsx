import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { dark, setDark, lang, changeLang } = useApp();

  // 🌍 LANGUAGE BASED NAV ITEMS
  const navItems = {
    uz: [
      { name: 'Bosh sahifa', path: '/' },
      { name: 'Haqida', path: '/about' },
      { name: 'Ko‘nikmalar', path: '/skills' },
      { name: 'CV', path: '/cv' },
      { name: 'Aloqa', path: '/contact' },
      { name: 'Loyihalar', path: '/projects' },
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Skills', path: '/skills' },
      { name: 'CV', path: '/cv' },
      { name: 'Contact', path: '/contact' },
      { name: 'Projects', path: '/projects' },
    ],
    ru: [
      { name: 'Главная', path: '/' },
      { name: 'Обо мне', path: '/about' },
      { name: 'Навыки', path: '/skills' },
      { name: 'Резюме', path: '/cv' },
      { name: 'Контакты', path: '/contact' },
      { name: 'Проекты', path: '/projects' },
    ],
    de: [
      { name: 'Startseite', path: '/' },
      { name: 'Über mich', path: '/about' },
      { name: 'Fähigkeiten', path: '/skills' },
      { name: 'Lebenslauf', path: '/cv' },
      { name: 'Kontakt', path: '/contact' },
      { name: 'Projekte', path: '/projects' },
    ],
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 m-4 rounded-2xl ${
      dark ? 'glass' : 'bg-white text-black shadow-2xl shadow-black'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="text-3xl font-bold tracking-tighter">
          M<span className="text-emerald-400">A</span>
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navItems[lang].map((item) => (
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

        {/* RIGHT SIDE */}
        <div className="flex gap-4 items-center">
          
          {/* DARK MODE */}
          {dark ? (
            <CiLight
              className="text-yellow-300 text-2xl cursor-pointer"
              onClick={() => setDark(!dark)}
            />
          ) : (
            <MdOutlineDarkMode
              className="text-yellow-300 text-2xl cursor-pointer"
              onClick={() => setDark(!dark)}
            />
          )}

          {/* LANGUAGE */}
          <select
            value={lang}
            onChange={(e) => changeLang(e.target.value as any)}
            className={`border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm  ${
              dark ? 'bg-black' : 'bg-transparent'
            }`}
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="de">DE</option>
            <option value="en">ENG</option>
          </select>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems[lang].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
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