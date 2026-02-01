
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-br from-slate-950 via-purple-950/20 to-rose-950/30"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mb-8"
      >
        <Heart size={80} className="text-rose-500 fill-rose-500/20 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-5xl font-romantic text-rose-200 mb-4"
      >
        A Journey to You
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-rose-100/70 mb-12 max-w-xs font-light tracking-wide leading-relaxed"
      >
        A little adventure crafted with every piece of my heart, just for you.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-10 py-4 bg-rose-600 hover:bg-rose-500 rounded-full text-white font-semibold shadow-lg shadow-rose-900/40 transition-colors flex items-center gap-2"
      >
        Begin Our Story
      </motion.button>
    </motion.div>
  );
};

export default StartScreen;
