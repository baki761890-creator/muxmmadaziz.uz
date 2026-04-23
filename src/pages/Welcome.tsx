  import { motion } from 'motion/react';
  import { useEffect, useState } from 'react';

  const text = "Welcome";

  export const Welcome = () => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 150); // tezlik (kamroq = tezroq)

      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div
        className="flex items-center justify-center h-screen bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-5xl font-serif tracking-widest">
          {displayedText}
          <span className="animate-pulse">|</span>
        </h1>
      </motion.div>
    );
  };