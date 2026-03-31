import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
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
      // Note: In a real app, you'd use your actual Service ID, Template ID, and Public Key
      // For this demo, we'll simulate the success if keys aren't provided
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formState, 'YOUR_PUBLIC_KEY');
      
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
        <h2 className="text-4xl font-bold mb-12 text-gradient">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-neutral-400 text-lg leading-relaxed">
              Loyiha takliflari, hamkorlik yoki shunchaki salom berish uchun quyidagi formani to'ldiring yoki to'g'ridan-to'g'ri bog'laning.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-4 rounded-2xl">
                  <Mail className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Email</div>
                  <div className="font-medium">muxmammad@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-4 rounded-2xl">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Phone</div>
                  <div className="font-medium">93-571-26-02</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-emerald-500/10 p-4 rounded-2xl">
                  <MapPin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Location</div>
                  <div className="font-medium">Andijon, Uzbekistan</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
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
                  <label className="block text-sm font-medium mb-2 text-neutral-400">Name</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="Ismingizni yozing"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-400">Email</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="Email manzilingiz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-400">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    placeholder="Xabaringizni yozing..."
                  />
                </div>
                <button
                  disabled={status === 'loading'}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-neutral-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
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
