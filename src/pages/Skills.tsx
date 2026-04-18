import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

const skills = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'ReactJS', category: 'Frontend' },
  { name: 'NextJS', category: 'Frontend' },
  { name: 'Tailwind', category: 'Styling' },
  { name: 'SCSS/Sass', category: 'Styling' },
  { name: 'Bootstrap', category: 'Styling' },
  { name: 'Redux', category: 'State' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
];

export const Skills: React.FC = () => {
  const { dark, lang } = useApp();

  // 🌍 TRANSLATIONS
  const t = {
    uz: {
      title: "Skills & Tajriba",
      desc: "Texnologiyalar bo'yicha mening bilim va ko'nikmalarim.",
      path: "O‘rganish yo‘li",
      frontend: "Frontend Development",
      backend: "Backend (Firebase)",
    },
    en: {
      title: "Skills & Expertise",
      desc: "My knowledge and experience in different technologies.",
      path: "Learning Path",
      frontend: "Frontend Development",
      backend: "Backend (Firebase)",
    },
    ru: {
      title: "Навыки и опыт",
      desc: "Мои знания и навыки в технологиях.",
      path: "Путь обучения",
      frontend: "Frontend разработка",
      backend: "Backend (Firebase)",
    },
    de: {
      title: "Fähigkeiten & Erfahrung",
      desc: "Meine Kenntnisse in verschiedenen Technologien.",
      path: "Lernweg",
      frontend: "Frontend Entwicklung",
      backend: "Backend (Firebase)",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition box-border"
    >
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-4 text-emerald-400 mt-10 text-shadow-2xs text-shadow-black">
          {t[lang].title}
        </h2>

        {/* DESCRIPTION */}
        <p className={`mt-5 mb-7 ${dark ? 'text-neutral-500' : 'text-black'}`}>
          {t[lang].desc}
        </p>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.01 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl flex flex-col items-center justify-center text-center group transition-all hover:bg-emerald-500/5 hover:cursor-pointer ${
                dark
                  ? 'glass'
                  : 'bg-emerald-500 border-2 border-black hover:border-emerald-500'
              }`}
            >
              <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">
                {skill.category}
              </div>
              <div className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* LEARNING PATH */}
        <div className={`mt-20 p-8 rounded-3xl ${dark ? 'glass' : 'bg-emerald-500 border-2 border-black'}`}>
          
          <h3 className="text-2xl font-bold mb-6">
            {t[lang].path}
          </h3>

          <div className="space-y-4">

            {/* FRONTEND */}
            <div className="flex justify-between items-center">
              <span className={`${dark ? 'text-emerald-500' : 'text-white'}`}>
                {t[lang].frontend}
              </span>
              <span className={`${dark ? 'text-emerald-500' : 'text-white'}`}>
                95%
              </span>
            </div>

            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '95%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-full ${dark ? 'bg-emerald-500' : 'bg-white'}`}
              />
            </div>

            {/* BACKEND */}
            <div className="flex justify-between items-center pt-4">
              <span className={`${dark ? 'text-emerald-500' : 'text-white'}`}>
                {t[lang].backend}
              </span>
              <span className={`${dark ? 'text-emerald-500' : 'text-white'}`}>
                75%
              </span>
            </div>

            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1, delay: 0.7 }}
                className={`h-full ${dark ? 'bg-emerald-500' : 'bg-white'}`}
              />
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};