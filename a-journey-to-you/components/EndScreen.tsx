
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const EndScreen: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-950"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-rose-500/5 rounded-full blur-[120px]"
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', damping: 20 }}
        className="mb-12 relative"
      >
        <Heart size={64} className="text-rose-600 fill-rose-600/10" />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-rose-500/50 rounded-full blur-xl"
        />
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="text-2xl font-romantic text-rose-100 italic max-w-xs leading-relaxed"
      >
        “This game ends here, but my love for you never does.”
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 4 }}
        className="mt-20 text-[10px] uppercase tracking-[0.3em] text-rose-300 font-bold"
      >
        Until Forever
      </motion.div>
    </motion.div>
  );
};

export default EndScreen;
