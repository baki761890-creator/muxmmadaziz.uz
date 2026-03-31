import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { getChatResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Salom! Men AI yordamchiman. Sizga qanday yordam bera olaman?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ✅ scroll fix
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ✅ CACHE (limitni kamaytiradi)
  const cache = useRef<Map<string, string>>(new Map());

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();

    // ✅ cache check
    if (cache.current.has(userMessage)) {
      setMessages(prev => [
        ...prev,
        { role: 'user', text: userMessage },
        { role: 'model', text: cache.current.get(userMessage)! }
      ]);
      setInput('');
      return;
    }

    setInput('');
    setIsLoading(true);

    // ✅ yangi message bilan history
    const newMessages: Message[] = [
      ...messages,
      { role: 'user', text: userMessage }
    ];

    setMessages(newMessages);

    try {
      const history = newMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await getChatResponse(userMessage, history);

      // ✅ cache save
      cache.current.set(userMessage, response);

      setMessages(prev => [
        ...prev,
        {
          role: 'model',
          text: response || "Xatolik yuz berdi"
        }
      ]);
    } catch (error: any) {
      let errorMsg = "Xatolik yuz berdi";

      if (error?.status === 429) {
        errorMsg = "Developer limiti tugagan, biroz kuting...";
      }

      setMessages(prev => [
        ...prev,
        { role: 'model', text: errorMsg }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass w-80 sm:w-96 h-[500px] rounded-2xl flex flex-col overflow-hidden mb-4 shadow-2xl"
          >
            {/* HEADER */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-emerald-500/10">
              <div className="flex items-center gap-2">
                <Bot className="text-emerald-400" size={20} />
                <span className="font-semibold">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* CHAT */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-emerald-500 text-white rounded-tr-none'
                        : 'bg-white/10 text-neutral-100 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <Loader2 className="animate-spin text-emerald-400" size={16} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()} // ✅ FIX
                placeholder="Savolingizni yozing..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none"
              />

              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 p-2 rounded-xl"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOAT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};
