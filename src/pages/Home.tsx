import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Home: React.FC = () => {
  const { dark, lang } = useApp();

  // 🌍 TRANSLATIONS
  const t = {
    uz: {
      available: "Mavjud",
      desc: "React, Next.js va zamonaviy texnologiyalar yordamida yuqori samarali web ilovalar yaratishga qiziqaman.",
      contact: "Bog‘lanish",
      skills: "Ko‘nikmalarni ko‘rish",
    },
    en: {
      available: "Available",
      desc: "Full-stack Developer passionate about building high-performance web applications with React, Next.js, and modern technologies.",
      contact: "Contact Me",
      skills: "View Skills",
    },
    ru: {
      available: "Доступен",
      desc: "Full-stack разработчик, увлечён созданием высокопроизводительных веб-приложений с использованием React, Next.js и современных технологий.",
      contact: "Связаться",
      skills: "Посмотреть навыки",
    },
    de: {
      available: "Verfügbar",
      desc: "Full-stack-Entwickler mit Leidenschaft für die Entwicklung leistungsstarker Webanwendungen mit React, Next.js und modernen Technologien.",
      contact: "Kontakt",
      skills: "Fähigkeiten ansehen",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-transition flex flex-col w-screen items-center justify-center text-center"
    >
      {/* AVATAR */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 relative"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 p-1">
          <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center overflow-hidden">
            <img
              src="https://picsum.photos/seed/dev/200/200"
              alt="Profile"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-neutral-950 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          {t[lang].available}
        </div>
      </motion.div>

      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${!dark ? 'text-black' : ''}`}
      >
        Muxammadaziz <br />
        <span className="text-gradient">Raximjonov</span>
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ${
          dark ? 'text-neutral-400' : 'text-black'
        }`}
      >
        {t[lang].desc}
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link
          to="/contact"
          className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-semibold px-8 py-3 rounded-full flex items-center gap-2 transition-all hover:gap-4"
        >
          {t[lang].contact} <ArrowRight size={20} />
        </Link>

        <Link
          to="/skills"
          className={`px-8 py-3 rounded-full font-semibold transition-all ${
            dark ? 'glass hover:bg-white/10' : 'bg-black text-white hover:bg-gray-900'
          }`}
        >
          {t[lang].skills}
        </Link>
      </motion.div>

      {/* SOCIALS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 flex gap-6 text-neutral-500"
      >
        <a
          href="https://github.com/baki761890-creator/muxmmadaziz.uz"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-400 transition-colors"
        >
          <Github size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/muxmammad-raximjonov-b4bb14401"
          target="_blank"
          className="hover:text-emerald-400 transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </motion.div>
    </motion.div>
  );
};