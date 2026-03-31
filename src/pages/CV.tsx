import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export const CV: React.FC = () => {
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
            <h2 className="text-4xl font-bold text-gradient">Curriculum Vitae</h2>
            <p className="text-neutral-400 mt-2">Mening professional tajribam va ma'lumotlarim.</p>
          </div>
          <a href="./Muxammadaziz_Raximjonov_CV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all">
            <Download size={20} /> Download PDF
          </button>
          </a>
          
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileText className="text-emerald-400" size={20} /> Experience
              </h3>
              <div className="space-y-8 border-l border-white/10 ml-2 pl-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className="text-sm text-emerald-400 font-mono mb-1">2024 - Present</div>
                  <h4 className="text-lg font-bold">Junior Frontend Developer</h4>
                  <p className="text-neutral-400 mt-2 text-sm leading-relaxed">
                    Firebase va React texnologiyalari yordamida 5 tadan ortiq real loyihalarni muvaffaqiyatli yakunlaganman. Backend qismi uchun faqat Firebase xizmatlaridan foydalanaman.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-white/20" />
                  <div className="text-sm text-neutral-500 font-mono mb-1">2022 - 2023</div>
                  <h4 className="text-lg font-bold">Frontend Developer Intern</h4>
                  <p className="text-neutral-400 mt-2 text-sm leading-relaxed">
                    Jamoa bilan birgalikda yirik loyihalarning frontend qismini ishlab chiqishda ishtirok etish. UI/UX dizaynlarni kodga o'tkazish va optimallashtirish.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={20} /> Key Achievements
              </h3>
              <ul className="space-y-4">
                {[
                  "Optimized application performance by 40% using Next.js SSR.",
                  "Integrated real-time features using Firebase Firestore.",
                  "Developed a custom UI library with Tailwind CSS.",
                  "Automated deployment processes using GitHub Actions."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-neutral-400 text-sm">
                    <span className="text-emerald-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass p-6 rounded-2xl">
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Email:</span>
                  <span className="text-neutral-300">muxmammad@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Phone:</span>
                  <span className="text-neutral-300">93-571-26-02</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Location:</span>
                  <span className="text-neutral-300">Andijon, UZ</span>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
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
