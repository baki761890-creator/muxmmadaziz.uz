import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useApp } from '../context/AppContext';

export const Contact: React.FC = () => {

  const { dark } = useApp()

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {


      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12  mt-10 ${dark ? 'text-emerald-400' : 'text-emerald-500 text-shadow-2xs text-shadow-black'}`}>Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className={`text-lg leading-relaxed ${dark ? 'text-neutral-400' : 'text-black'}`}>
              Loyiha takliflari, hamkorlik yoki shunchaki salom berish uchun quyidagi formani to'ldiring yoki to'g'ridan-to'g'ri bog'laning.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={` p-3 rounded-xl h-fit ${dark ? 'bg-emerald-500/10' : 'bg-emerald-300 border-2 border-black'}`}>
                  <Mail className={` ${dark ? 'text-emerald-400' : 'text-black'}`} size={24} />
                </div>
                <div>
                  <div className={`text-xs uppercase tracking-wider ${dark ? ' text-neutral-500' : 'text-black'}`}>Email</div>
                  <div className={`${dark ? 'text-white' : 'text-emerald-600 text-shadow-2xs text-shadow-black'}`}>muxmammad@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={` p-3 rounded-xl h-fit ${dark ? 'bg-emerald-500/10' : 'bg-emerald-300 border-2 border-black'}`}>
                  <Phone className={` ${dark ? 'text-emerald-400' : 'text-black'}`} size={24} />
                </div>
                <div>
                  <div className={`text-xs uppercase tracking-wider ${dark ? ' text-neutral-500' : 'text-black'}`}>Phone</div>
                  <div className={`${dark ? 'text-white' : 'text-emerald-600 text-shadow-2xs text-shadow-black'}`}>93-571-26-02</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={` p-3 rounded-xl h-fit ${dark ? 'bg-emerald-500/10' : 'bg-emerald-300 border-2 border-black'}`}>
                  <MapPin className={` ${dark ? 'text-emerald-400' : 'text-black'}`} size={24} />
                </div>
                <div>
                  <div className={`text-xs uppercase tracking-wider ${dark ? ' text-neutral-500' : 'text-black'}`}>Location</div>
                  <div className={`${dark ? 'text-white' : 'text-emerald-600 text-shadow-2xs text-shadow-black'}`}>Andijon, Uzbekistan</div>
                </div>
              </div>
            </div>
          </div>

          <div className={` p-8 rounded-3xl ${dark?'glass':'border-4 border-black shadow-2xl shadow-black'}`}>
            {status === 'success' ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle className="text-emerald-400 mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">Xabaringiz yuborildi!</h3>
                <p className="text-neutral-400 mb-6">Tez orada siz bilan bog'lanaman.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  Yana xabar yuborish
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2  ${dark ? 'text-neutral-400' : 'text-black'}`}>Name</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors ${dark ? ' bg-white/5 border border-white/10' : 'bg-emerald-500/10 border-2 border-black text-black shadow-xl shadow-black'}`}
                    placeholder="Ismingizni yozing"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2  ${dark ? 'text-neutral-400' : 'text-black'}`}>Email</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors ${dark ? ' bg-white/5 border border-white/10' : 'bg-emerald-500/10 border-2 border-black text-black shadow-xl shadow-black'}`} placeholder="Email manzilingiz"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2  ${dark ? 'text-neutral-400' : 'text-black'}`}>Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors ${dark ? ' bg-white/5 border border-white/10' : 'bg-emerald-500/10 border-2 border-black text-black shadow-xl shadow-black'}`} placeholder="Xabaringizni yozing..."
                  />
                </div>
                <button
                  disabled={status === 'loading'}
                  className={`w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-neutral-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${dark?'':'shadow-xl shadow-black '}`}
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
