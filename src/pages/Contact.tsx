import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useApp } from '../context/AppContext';

export const Contact: React.FC = () => {

  const { dark, lang } = useApp();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // 🌍 LANG
  const t = {
    uz: {
      title: "Get In Touch",
      desc: "Loyiha takliflari, hamkorlik yoki shunchaki salom berish uchun quyidagi formani to'ldiring yoki to'g'ridan-to'g'ri bog'laning.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      name: "Name",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Xabaringiz yuborildi!",
      successDesc: "Tez orada siz bilan bog'lanaman.",
      again: "Yana xabar yuborish",
      error: "Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.",
      phName: "Ismingizni yozing",
      phEmail: "Email manzilingiz",
      phMsg: "Xabaringizni yozing..."
    },
    en: {
      title: "Get In Touch",
      desc: "Send a message for collaboration or project ideas.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      name: "Name",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent!",
      successDesc: "I will contact you soon.",
      again: "Send again",
      error: "Something went wrong. Try again.",
      phName: "Enter your name",
      phEmail: "Your email",
      phMsg: "Write your message..."
    },
    ru: {
      title: "Связаться",
      desc: "Отправьте сообщение для сотрудничества.",
      email: "Email",
      phone: "Телефон",
      location: "Локация",
      name: "Имя",
      message: "Сообщение",
      send: "Отправить",
      sending: "Отправка...",
      success: "Сообщение отправлено!",
      successDesc: "Я скоро свяжусь с вами.",
      again: "Отправить снова",
      error: "Ошибка. Попробуйте снова.",
      phName: "Ваше имя",
      phEmail: "Ваш email",
      phMsg: "Напишите сообщение..."
    },
    de: {
      title: "Kontakt",
      desc: "Senden Sie eine Nachricht für Zusammenarbeit.",
      email: "Email",
      phone: "Telefon",
      location: "Standort",
      name: "Name",
      message: "Nachricht",
      send: "Senden",
      sending: "Senden...",
      success: "Nachricht gesendet!",
      successDesc: "Ich melde mich bald.",
      again: "Nochmal senden",
      error: "Fehler. Versuche erneut.",
      phName: "Ihr Name",
      phEmail: "Ihre Email",
      phMsg: "Nachricht schreiben..."
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
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

        {/* TITLE */}
        <h2 className={`text-4xl font-bold mb-12 mt-10 ${dark ? 'text-emerald-400' : 'text-emerald-500 text-shadow-2xs text-shadow-black'}`}>
          {t[lang].title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT TEXT */}
          <div className="space-y-8">
            <p className={`text-lg leading-relaxed ${dark ? 'text-neutral-400' : 'text-black'}`}>
              {t[lang].desc}
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl h-fit ${dark ? 'bg-emerald-500/10' : 'bg-emerald-300 border-2 border-black'}`}>
                  <Mail className={`${dark ? 'text-emerald-400' : 'text-black'}`} size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500">
                    {t[lang].email}
                  </div>
                  <div className={`${dark ? 'text-white' : 'text-emerald-600 text-shadow-2xs text-shadow-black'}`}>
                    muxmammad@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl h-fit ${dark ? 'bg-emerald-500/10' : 'bg-emerald-300 border-2 border-black'}`}>
                  <Phone className={`${dark ? 'text-emerald-400' : 'text-black'}`} size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500">
                    {t[lang].phone}
                  </div>
                  <div className={`${dark ? 'text-white' : 'text-emerald-600 text-shadow-2xs text-shadow-black'}`}>
                    93-571-26-02
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl h-fit ${dark ? 'bg-emerald-500/10' : 'bg-emerald-300 border-2 border-black'}`}>
                  <MapPin className={`${dark ? 'text-emerald-400' : 'text-black'}`} size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-500">
                    {t[lang].location}
                  </div>
                  <div className={`${dark ? 'text-white' : 'text-emerald-600 text-shadow-2xs text-shadow-black'}`}>
                    Andijon, Uzbekistan
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* FORM (UNCHANGED) */}
          <div className={`p-8 rounded-3xl ${dark?'glass':'border-4 border-black shadow-2xl shadow-black'}`}>

            {status === 'success' ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle className="text-emerald-400 mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">{t[lang].success}</h3>
                <p className="text-neutral-400 mb-6">{t[lang].successDesc}</p>
                <button onClick={() => setStatus('idle')} className="text-emerald-400 font-semibold hover:underline">
                  {t[lang].again}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  placeholder={t[lang].phName}
                  className={`w-full rounded-xl px-4 py-3 border-2  ${dark?'text-white':' text-black shadow-xl shadow-black bg-emerald-500'}`}
                />

                <input
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  placeholder={t[lang].phEmail}
                  className={`w-full rounded-xl px-4 py-3 border-2  ${dark?'text-white':' text-black shadow-xl shadow-black bg-emerald-500'}`}
                />

                <textarea
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  placeholder={t[lang].phMsg}
                  className={`w-full rounded-xl px-4 py-3 border-2 ${dark?'text-white':'shadow-xl shadow-black bg-emerald-500 text-black'}`}
                />

                <button
                  disabled={status === 'loading'}
                  className={`w-full bg-emerald-500 py-4 rounded-xl flex items-center justify-center gap-2 ${dark?'':'shadow-xl shadow-black text-black'}`}
                >
                  {status === 'loading' ? t[lang].sending : t[lang].send}
                  {!status.includes('loading') && <Send size={20} />}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    {t[lang].error}
                  </p>
                )}

              </form>
            )}

          </div>

        </div>
      </div>
    </motion.div>
  );
};