import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CV: React.FC = () => {
  const { dark, lang } = useApp();

  // 🌍 LANG TEXTS
  const t = {
    uz: {
      title: "Curriculum Vitae",
      desc: "Mening professional tajribam va ma'lumotlarim.",
      download: "Download PDF",
      experience: "Tajriba",
      achievements: "Yutuqlar",
      contact: "Aloqa",
      languages: "Tillar",
      role1: "Junior Frontend Developer",
      role1desc: "React va Firebase yordamida 5+ real loyiha yaratganman.",
      role2: "Frontend Developer Intern",
      role2desc: "UI/UX dizaynlarni kodga aylantirish va jamoa bilan ishlash.",
    },
    en: {
      title: "Curriculum Vitae",
      desc: "My professional experience and information.",
      download: "Download PDF",
      experience: "Experience",
      achievements: "Key Achievements",
      contact: "Contact Info",
      languages: "Languages",
      role1: "Junior Frontend Developer",
      role1desc: "Built 5+ real projects using React and Firebase.",
      role2: "Frontend Developer Intern",
      role2desc: "Worked with UI/UX design and team collaboration.",
    },
    ru: {
      title: "Резюме",
      desc: "Мой профессиональный опыт и информация.",
      download: "Скачать PDF",
      experience: "Опыт",
      achievements: "Достижения",
      contact: "Контакты",
      languages: "Языки",
      role1: "Junior Frontend Developer",
      role1desc: "Создал 5+ проектов с React и Firebase.",
      role2: "Frontend стажёр",
      role2desc: "Работа с UI/UX и командой.",
    },
    de: {
      title: "Lebenslauf",
      desc: "Meine berufliche Erfahrung und Informationen.",
      download: "PDF herunterladen",
      experience: "Erfahrung",
      achievements: "Erfolge",
      contact: "Kontakt",
      languages: "Sprachen",
      role1: "Junior Frontend Entwickler",
      role1desc: "5+ Projekte mit React und Firebase gebaut.",
      role2: "Frontend Praktikant",
      role2desc: "UI/UX und Teamarbeit.",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className={`text-4xl font-bold mt-10 ${dark ? 'text-gradient' : 'text-emerald-500 text-shadow-2xs text-shadow-black'}`}>
              {t[lang].title}
            </h2>
            <p className={`mt-2 ${dark ? 'text-neutral-400' : 'text-black'}`}>
              {t[lang].desc}
            </p>
          </div>

          <a href="./Muxammadaziz_Raximjonov_CV.pdf" target="_blank" rel="noopener noreferrer">
            <button className={`bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all ${dark ? '' : 'shadow-xl shadow-black'}`}>
              <Download size={20} /> {t[lang].download}
            </button>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-12">

            {/* EXPERIENCE */}
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileText className={`${dark ? 'text-emerald-400' : 'text-emerald-500 text-shadow-2xs text-shadow-black'}`} size={20} />
                <span className={`${dark ? 'text-white' : 'text-black'}`}>
                  {t[lang].experience}
                </span>
              </h3>

              <div className={`space-y-8 border-l-2 ml-2 pl-6 ${dark ? 'border-white/10' : 'border-black/20'}`}>

                <div className="relative">
                  <div className="absolute -left-[31px] w-3 h-3 rounded-full bg-emerald-500" />
                  <div className="text-sm font-mono mb-1 text-emerald-400">2025 - Present</div>
                  <h4 className={`text-lg font-bold ${dark ? 'text-white' : 'text-black'}`}>
                    {t[lang].role1}
                  </h4>
                  <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-neutral-400' : 'text-black/70'}`}>
                    {t[lang].role1desc}
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] w-3 h-3 rounded-full bg-white/20" />
                  <div className="text-sm font-mono mb-1 text-neutral-500">2022 - 2024</div>
                  <h4 className={`text-lg font-bold ${dark ? 'text-white' : 'text-black'}`}>
                    {t[lang].role2}
                  </h4>
                  <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-neutral-400' : 'text-black/70'}`}>
                    {t[lang].role2desc}
                  </p>
                </div>

              </div>
            </section>

            {/* ACHIEVEMENTS */}
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={20} />
                <span className={`${dark ? 'text-white' : 'text-black'}`}>
                  {t[lang].achievements}
                </span>
              </h3>

              <ul className="space-y-4 text-sm">
                {[
                  "Optimized performance by 40% using Next.js SSR.",
                  "Integrated Firebase Firestore real-time features.",
                  "Built custom UI library with Tailwind CSS.",
                  "Automated deployment using GitHub Actions."
                ].map((item, i) => (
                  <li key={i} className={`${dark ? 'text-neutral-400' : 'text-black/70'}`}>
                    <span className="text-emerald-400 text-2xl">•</span> {item}
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            {/* CONTACT */}
            <div className={`p-6 rounded-2xl ${dark ? 'glass' : 'bg-black/40 border-2 border-black shadow-xl shadow-black'}`}>
              <h4 className="font-bold mb-4">{t[lang].contact}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span>muxmammad@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span>93-571-26-02</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span>Andijon, UZ</span>
                </div>
              </div>
            </div>

            {/* LANGUAGES */}
            <div className={`p-6 rounded-2xl ${dark ? 'glass' : 'bg-black/40 border-2 border-black shadow-xl shadow-black'}`}>
              <h4 className="font-bold mb-4">{t[lang].languages}</h4>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Uzbek</span><span>Native</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full">
                    <div className="w-full h-full bg-emerald-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>English</span><span>Intermediate</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full">
                    <div className="w-[70%] h-full bg-emerald-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Russian</span><span>Native</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full">
                    <div className="w-full h-full bg-emerald-500" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};