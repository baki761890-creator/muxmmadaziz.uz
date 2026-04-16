import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Code, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { getFastResponse } from '../services/gemini';
import { useApp } from '../context/AppContext';

export const About: React.FC = () => {
  const [aiBio, setAiBio] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const {dark}=useApp()

  useEffect(() => {
    const fetchAiBio = async () => {
      setIsAiLoading(true);
      try {
        const prompt = "Muxammadaziz Raximjonov haqida qisqa va qiziqarli bio yozib ber. U Andijonlik Junior dasturchi, 1 yillik tajribaga ega va 5 tadan ortiq real loyihalar yaratgan. (Maksimal 2 ta gap)";
        const response = await getFastResponse(prompt);
        setAiBio(response || '');
      } catch (error) {
        console.error(error);
      } finally {
        setIsAiLoading(false);
      }
    };
    fetchAiBio();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12  mt-4 ${dark?'text-emerald-400':'text-emerald-400 text-shadow-2xs text-shadow-black'} hover:cursor-col-resize select-all selection:bg-black`} >About Me</h2>
        
        {/* AI Insight Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className= {`p-6 rounded-2xl mb-12  bg-emerald-300 ${dark?'glass':'border-2 border-black'}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className={` ${dark?'text-emerald-400':'text-black'}`} size={18} />
            <span className={`text-xs font-bold uppercase tracking-widest ${dark?'text-emerald-400':' text-black '}`}>AI Insight</span>
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
            <p className={` leading-relaxed text-lg ${dark?'text-neutral-400':'text-black'}`}>
              Assalomu alaykum! Ismim Muxammadaziz Raximjonov. Men zamonaviy web texnologiyalar orqali foydalanuvchilar uchun qulay va samarali yechimlar yaratishga qiziqaman.
            </p>
            <p className={` leading-relaxed  ${dark?'text-neutral-400':'text-black'}`}>
              Dasturlash olamiga qadam qo'yganimdan beri doimiy ravishda yangi bilimlarni o'zlashtirish va tajribamni oshirish ustida ishlayman. Men uchun har bir loyiha - bu yangi muammo va uni hal qilishning kreativ yo'li.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className={`p-4 rounded-2xl ${dark?'glass':'bg-emerald-500 border-2 border-neutral-950'}`}>
                <div className={` font-bold text-2xl ${dark?'text-emerald-500':'text-black'}`}>1</div>
                <div className={`text-xs uppercase tracking-wider ${dark?'text-neutral-500':'text-black'}`}>Year Experience</div>
              </div>
              <div  className={`p-4 rounded-2xl ${dark?'glass':'bg-emerald-500 border-2 border-neutral-950'}`}> 
                <div className={` font-bold text-2xl ${dark?'text-emerald-500':'text-black'}`}>5+</div>
                <div className={`text-xs uppercase tracking-wider ${dark?'text-neutral-500':'text-black'}`}>Real Projects</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className={` p-3 rounded-xl h-fit ${dark?'bg-emerald-500/10':'bg-emerald-300 border-2 border-black'}`}>
                <Code className={`${dark?'text-emerald-400':'text-black'}`} size={24} />
              </div>
              <div>
                <h3 className=  {`text-lg mb-1 ${dark?'text-neutral-500':'text-emerald-500 text-shadow-2xs text-shadow-black'}` }>Development</h3>
                <p className="text-sm text-neutral-500">Clean, scalable and maintainable code is my priority.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className={` p-3 rounded-xl h-fit ${dark?'bg-emerald-500/10':'bg-emerald-300 border-2 border-black'}`}>
                <Briefcase className={`${dark?'text-emerald-400':'text-black'}`} size={24} />
              </div>
              <div>
                <h3 className=  {`text-lg mb-1 ${dark?'text-neutral-500':'text-emerald-500 text-shadow-2xs text-shadow-black'}` }>Experience</h3>
                <p className="text-sm text-neutral-500">Worked on various freelance projects and startups.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className={` p-3 rounded-xl h-fit ${dark?'bg-emerald-500/10':'bg-emerald-300 border-2 border-black'}`}>
                <GraduationCap className={`${dark?'text-emerald-400':'text-black'}`} size={24} />
              </div>
              <div>
                <h3 className=  {`text-lg mb-1 ${dark?'text-neutral-500':'text-emerald-500 text-shadow-2xs text-shadow-black'}` }>Education</h3>
                <p className="text-sm text-neutral-500">Self-taught developer with a strong foundation in CS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
