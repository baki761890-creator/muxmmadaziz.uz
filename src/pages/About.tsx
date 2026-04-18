import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Code, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { getFastResponse } from '../services/gemini';
import { useApp } from '../context/AppContext';

export const About: React.FC = () => {
  const [aiBio, setAiBio] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const { dark, lang } = useApp();

  // 🌍 LANG TEXT
  const t = {
    uz: {
      title: "Men haqimda",
      ai: "AI Tavsifi",
      bio1: "Assalomu alaykum! Ismim Muxammadaziz Raximjonov. Men zamonaviy web texnologiyalar orqali foydalanuvchilar uchun qulay va samarali yechimlar yaratishga qiziqaman.",
      bio2: "Dasturlash olamiga qadam qo'yganimdan beri doimiy ravishda yangi bilimlarni o'zlashtirish va tajribamni oshirish ustida ishlayman. Men uchun har bir loyiha - bu yangi muammo va uni hal qilishning kreativ yo'li.",
      exp: "Year Experience",
      projects: "Real Projects",
      dev: "Dasturlash",
      devDesc: "Toza, scalable va maintainable kod yozish ustuvor.",
      experience: "Tajriba",
      expDesc: "Freelance va startup loyihalarda ishlaganman.",
      edu: "Ta'lim",
      eduDesc: "Self-taught developer.",
      prompt: "Muxammadaziz Raximjonov haqida qisqa va qiziqarli bio yozib ber. U Andijonlik Junior dasturchi, 1 yillik tajribaga ega va 5 tadan ortiq real loyihalar yaratgan. (Maksimal 2 ta gap)"
    },
    en: {
      title: "About Me",
      ai: "AI Insight",
      bio1: "Hello! I'm Muxammadaziz Raximjonov. I build modern and user-friendly web applications.",
      bio2: "I constantly learn new technologies and approach every project creatively.",
      exp: "Year Experience",
      projects: "Real Projects",
      dev: "Development",
      devDesc: "Clean, scalable and maintainable code is my priority.",
      experience: "Experience",
      expDesc: "Worked on freelance projects and startups.",
      edu: "Education",
      eduDesc: "Self-taught developer.",
      prompt: "Write a short and interesting 2 sentence bio about Muxammadaziz Raximjonov, a junior developer from Andijan with 1 year experience and 5+ projects."
    },
    ru: {
      title: "Обо мне",
      ai: "AI описание",
      bio1: "Привет! Меня зовут Мухаммадазиз Рахимжонов. Я создаю современные веб-приложения.",
      bio2: "Постоянно изучаю новые технологии и подхожу к проектам креативно.",
      exp: "Опыт",
      projects: "Проекты",
      dev: "Разработка",
      devDesc: "Чистый и масштабируемый код — приоритет.",
      experience: "Опыт",
      expDesc: "Работал на фрилансе и стартапах.",
      edu: "Образование",
      eduDesc: "Самоучка.",
      prompt: "Напиши короткое био (2 предложения) о junior разработчике из Андижана с 1 годом опыта и 5+ проектами."
    },
    de: {
      title: "Über mich",
      ai: "AI Einblick",
      bio1: "Hallo! Ich bin Muxammadaziz Raximjonov. Ich entwickle moderne Webanwendungen.",
      bio2: "Ich lerne ständig neue Technologien und arbeite kreativ.",
      exp: "Erfahrung",
      projects: "Projekte",
      dev: "Entwicklung",
      devDesc: "Sauberer und skalierbarer Code ist wichtig.",
      experience: "Erfahrung",
      expDesc: "Freelance und Startup Projekte.",
      edu: "Ausbildung",
      eduDesc: "Autodidakt.",
      prompt: "Schreibe eine kurze 2-Satz-Bio über einen Junior Entwickler aus Andijan mit 1 Jahr Erfahrung und 5+ Projekten."
    }
  };

  useEffect(() => {
    const fetchAiBio = async () => {
      setIsAiLoading(true);
      try {
        const response = await getFastResponse(t[lang].prompt);
        setAiBio(response || '');
      } catch (error) {
        console.error(error);
      } finally {
        setIsAiLoading(false);
      }
    };
    fetchAiBio();
  }, [lang]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 mt-4 ${dark?'text-emerald-400':'text-emerald-400 text-shadow-2xs text-shadow-black'} hover:cursor-col-resize select-all selection:bg-black`} >
          {t[lang].title}
        </h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-2xl mb-12 bg-emerald-300 ${dark?'glass':'border-2 border-black'}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className={`${dark?'text-emerald-400':'text-black'}`} size={18} />
            <span className={`text-xs font-bold uppercase tracking-widest ${dark?'text-emerald-400':' text-black '}`}>
              {t[lang].ai}
            </span>
          </div>
          {isAiLoading ? (
            <div className="h-4 w-3/4 bg-white/5 animate-pulse rounded" />
          ) : (
            <p className="text-neutral-300 italic text-sm">
              "{aiBio}"
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className={`leading-relaxed text-lg ${dark?'text-neutral-400':'text-black'}`}>
              {t[lang].bio1}
            </p>
            <p className={`leading-relaxed ${dark?'text-neutral-400':'text-black'}`}>
              {t[lang].bio2}
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className={`p-4 rounded-2xl ${dark?'glass':'bg-emerald-500 border-2 border-neutral-950'}`}>
                <div className={`font-bold text-2xl ${dark?'text-emerald-500':'text-black'}`}>1</div>
                <div className={`text-xs uppercase tracking-wider ${dark?'text-neutral-500':'text-black'}`}>
                  {t[lang].exp}
                </div>
              </div>
              <div className={`p-4 rounded-2xl ${dark?'glass':'bg-emerald-500 border-2 border-neutral-950'}`}> 
                <div className={`font-bold text-2xl ${dark?'text-emerald-500':'text-black'}`}>5+</div>
                <div className={`text-xs uppercase tracking-wider ${dark?'text-neutral-500':'text-black'}`}>
                  {t[lang].projects}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className={`p-3 rounded-xl h-fit ${dark?'bg-emerald-500/10':'bg-emerald-300 border-2 border-black'}`}>
                <Code className={`${dark?'text-emerald-400':'text-black'}`} size={24} />
              </div>
              <div>
                <h3 className={`text-lg mb-1 ${dark?'text-neutral-500':'text-emerald-500 text-shadow-2xs text-shadow-black'}`}>
                  {t[lang].dev}
                </h3>
                <p className="text-sm text-neutral-500">{t[lang].devDesc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className={`p-3 rounded-xl h-fit ${dark?'bg-emerald-500/10':'bg-emerald-300 border-2 border-black'}`}>
                <Briefcase className={`${dark?'text-emerald-400':'text-black'}`} size={24} />
              </div>
              <div>
                <h3 className={`text-lg mb-1 ${dark?'text-neutral-500':'text-emerald-500 text-shadow-2xs text-shadow-black'}`}>
                  {t[lang].experience}
                </h3>
                <p className="text-sm text-neutral-500">{t[lang].expDesc}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className={`p-3 rounded-xl h-fit ${dark?'bg-emerald-500/10':'bg-emerald-300 border-2 border-black'}`}>
                <GraduationCap className={`${dark?'text-emerald-400':'text-black'}`} size={24} />
              </div>
              <div>
                <h3 className={`text-lg mb-1 ${dark?'text-neutral-500':'text-emerald-500 text-shadow-2xs text-shadow-black'}`}>
                  {t[lang].edu}
                </h3>
                <p className="text-sm text-neutral-500">{t[lang].eduDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};