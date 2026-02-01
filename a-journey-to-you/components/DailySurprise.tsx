
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Calendar, Heart, ArrowRight } from 'lucide-react';
import { DAILY_MESSAGES } from '../constants';

interface DailySurpriseProps {
  onNext: () => void;
}

const DailySurprise: React.FC<DailySurpriseProps> = ({ onNext }) => {
  const [opened, setOpened] = useState(false);
  const dayIndex = new Date().getDay();
  const todayMessage = DAILY_MESSAGES[dayIndex.toString()] || "You are loved.";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full p-8 text-center relative z-10"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-4 flex items-center gap-2 text-rose-300/60 uppercase tracking-widest text-xs font-bold"
      >
        <Calendar size={14} />
        Your Daily Heartbeat
      </motion.div>

      <h2 className="text-3xl font-romantic text-rose-200 mb-12 italic">
        A little something for today...
      </h2>

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.button
            key="closed"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpened(true)}
            className="group relative"
          >
            <div className="absolute inset-0 bg-rose-500/20 blur-3xl group-hover:bg-rose-500/40 transition-colors rounded-full" />
            <div className="relative w-48 h-48 bg-slate-900 border-2 border-dashed border-rose-500/30 rounded-3xl flex flex-col items-center justify-center gap-4">
              <Gift size={64} className="text-rose-500" />
              <span className="text-rose-200 text-sm font-semibold tracking-wider">TAP TO UNWRAP</span>
            </div>
          </motion.button>
        ) : (
          <motion.div
            key="opened"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="w-64 h-64 bg-rose-500/10 backdrop-blur-sm border border-rose-500/20 rounded-full flex items-center justify-center p-8 mb-12 shadow-[0_0_40px_rgba(244,63,94,0.15)]"
            >
              <p className="text-xl font-romantic text-rose-100 italic leading-relaxed">
                "{todayMessage}"
              </p>
            </motion.div>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={onNext}
              className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-rose-200 hover:bg-white/10 transition-colors"
            >
              The journey continues <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DailySurprise;
