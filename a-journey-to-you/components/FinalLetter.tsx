
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface FinalLetterProps {
  onFinish: () => void;
}

const FinalLetter: React.FC<FinalLetterProps> = ({ onFinish }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full w-full overflow-y-auto bg-slate-950 p-8 pt-20 pb-32"
    >
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md mx-auto space-y-12 text-center"
      >
        <motion.div variants={item} className="flex justify-center">
          <Heart className="text-rose-500 fill-rose-500/20" size={40} />
        </motion.div>

        <motion.h2 variants={item} className="text-4xl font-romantic text-rose-200">
          My Dearest,
        </motion.h2>

        <motion.div variants={item} className="space-y-8 text-rose-100/80 leading-loose text-lg font-light">
          <p>
            I made this journey for you because sometimes words alone aren't enough to capture how I feel.
          </p>
          <p>
            Every level you passed, every heart you collected, represents a moment where you've touched my soul. 
            You are the quiet magic in my everyday life.
          </p>
          <p>
            Loving you isn't just something I do; it's who I am now. You've made my world softer, brighter, and infinitely more beautiful.
          </p>
          <p>
            I choose you today, tomorrow, and every day that follows. You are my home, my adventure, and my greatest love.
          </p>
        </motion.div>

        <motion.div variants={item} className="pt-12">
          <p className="font-romantic text-3xl text-rose-300">Always Yours,</p>
          <p className="mt-2 text-rose-200 font-semibold tracking-widest uppercase text-sm">Me</p>
        </motion.div>

        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onFinish}
          className="mt-16 px-12 py-4 bg-gradient-to-r from-rose-600 to-purple-600 rounded-full text-white font-bold shadow-xl flex items-center justify-center gap-2 mx-auto"
        >
          <Sparkles size={18} /> Seal with a Kiss
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FinalLetter;
