import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Code, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { getFastResponse } from '../services/gemini';

export const About: React.FC = () => {
  const [aiBio, setAiBio] = useState<string>('');
  const [isAiLoading, setIsAiLoading] = useState(false);

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
        <h2 className="text-4xl font-bold mb-12 text-gradient">About Me</h2>
        
        {/* AI Insight Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 rounded-2xl mb-12 border-emerald-500/20 bg-emerald-500/5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="text-emerald-400" size={18} />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">AI Insight</span>
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
            <p className="text-neutral-400 leading-relaxed text-lg">
              Assalomu alaykum! Ismim Muxammadaziz Raximjonov. Men zamonaviy web texnologiyalar orqali foydalanuvchilar uchun qulay va samarali yechimlar yaratishga qiziqaman.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Dasturlash olamiga qadam qo'yganimdan beri doimiy ravishda yangi bilimlarni o'zlashtirish va tajribamni oshirish ustida ishlayman. Men uchun har bir loyiha - bu yangi muammo va uni hal qilishning kreativ yo'li.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="glass p-4 rounded-2xl">
                <div className="text-emerald-400 font-bold text-2xl">1</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Year Experience</div>
              </div>
              <div className="glass p-4 rounded-2xl">
                <div className="text-emerald-400 font-bold text-2xl">5+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Real Projects</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-emerald-500/10 p-3 rounded-xl h-fit">
                <Code className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Development</h3>
                <p className="text-sm text-neutral-500">Clean, scalable and maintainable code is my priority.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-emerald-500/10 p-3 rounded-xl h-fit">
                <Briefcase className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Experience</h3>
                <p className="text-sm text-neutral-500">Worked on various freelance projects and startups.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-emerald-500/10 p-3 rounded-xl h-fit">
                <GraduationCap className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Education</h3>
                <p className="text-sm text-neutral-500">Self-taught developer with a strong foundation in CS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
