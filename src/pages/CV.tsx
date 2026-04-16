import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CV: React.FC = () => {
  const {dark}=useApp()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className={`text-4xl font-bold  mt-10 ${dark?'text-gradient':'text-emerald-500 text-shadow-2xs text-shadow-black'}`}>Curriculum Vitae</h2>
            <p className={` mt-2 ${dark?'text-neutral-400':'text-black'}`}>Mening professional tajribam va ma'lumotlarim.</p>
          </div>
          <a href="./Muxammadaziz_Raximjonov_CV.pdf" target="_blank" rel="noopener noreferrer">
            <button className={`bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all ${dark?'':'shadow-xl shadow-black'}`}>
            <Download size={20} /> Download PDF
          </button>
          </a>
          
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileText className={`${dark?'text-emerald-400 ':'text-emerald-500 text-shadow-2xs text-shadow-black'}`} size={20} /> <h3 className={`${dark?'text-white':'text-black'}`}>Experience</h3>
              </h3>
              <div className={`space-y-8 border-l-2  ml-2 pl-6 ${dark?'border-white/10':'border-black/20'}`}>
                <div className="relative">
                  <div className="absolute -left-[31px]  w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className={`text-sm  font-mono mb-1 ${dark?'text-emerald-400':'text-emerald-500 text-shadow-2xs text-shadow-black'}`}>2025 - Present</div>
                  <h4 className={`text-lg font-bold ${dark?'text-white':'text-black'}`}>Junior Frontend Developer</h4>
                  <p className={` mt-2 text-sm leading-relaxed ${dark?'text-neutral-400':'text-black/70'}`}>
                    Firebase va React texnologiyalari yordamida 5 tadan ortiq real loyihalarni muvaffaqiyatli yakunlaganman. Backend qismi uchun faqat Firebase xizmatlaridan foydalanaman.
                  </p>
                </div>

                <div className="relative">
                  <div className={`absolute -left-[31px] top-1 w-3 h-3 rounded-full  ${dark?'bg-white/20':'bg-black/20'}`} />
                  <div className={`text-sm  font-mono mb-1 ${dark?'text-neutral-500':'text-black'}`}>2022 - 2024</div>
                  <h4 className="text-lg font-bold">Frontend Developer Intern</h4>
                  <p className={` mt-2 text-sm leading-relaxed ${dark?'text-neutral-400':'text-black/70'}`}>
                    Jamoa bilan birgalikda yirik loyihalarning frontend qismini ishlab chiqishda ishtirok etish. UI/UX dizaynlarni kodga o'tkazish va optimallashtirish.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className={` ${dark?'text-emerald-400':'text-emerald-700 text-shadow-2xs text-shadow-black'}`} size={20} /> <h3 className={`${dark?'text-white':'text-black'}`}>Key Achievements</h3>
              </h3>
              <ul className="space-y-4">
                {[
                  "Optimized application performance by 40% using Next.js SSR.",
                  "Integrated real-time features using Firebase Firestore.",
                  "Developed a custom UI library with Tailwind CSS.",
                  "Automated deployment processes using GitHub Actions."
                ].map((item, i) => (
                  <li key={i} className={` mt-2 text-sm leading-relaxed ${dark?'text-neutral-400':'text-black/70'}`}>
                    <span className={`text-emerald-400 text-2xl ${dark?'':'text-emerald-700'}`}>•</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className={` p-6 rounded-2xl ${dark?'glass':'bg-black/40 border-2 border-black shadow-xl shadow-black'}`}>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className={` ${dark?'text-neutral-500':''}`}>Email:</span>
                  <span className={`${dark?'text-neutral-500':'text-black'}`}>muxmammad@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className={` ${dark?'text-neutral-500':''}`}>Phone:</span>
                  <span className={`${dark?'text-neutral-500':'text-black'}`}>93-571-26-02</span>
                </div>
                <div className="flex justify-between">
                  <span className={` ${dark?'text-neutral-500':''}`}>Location:</span>
                  <span className={`${dark?'text-neutral-500':'text-black'}`}>Andijon, UZ</span>
                </div>
              </div>
            </div>

            <div  className={` p-6 rounded-2xl ${dark?'glass':'bg-black/40 border-2 border-black shadow-xl shadow-black'}`}>
              <h4 className="font-bold mb-4">Languages</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Uzbek</span>
                    <span>Native</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-emerald-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>English</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <div className="w-[70%] h-full bg-emerald-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Russian</span>
                    <span>Native</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
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
