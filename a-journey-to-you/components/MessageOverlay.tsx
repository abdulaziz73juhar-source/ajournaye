
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';

interface MessageOverlayProps {
  message: string;
  onClose: () => void;
}

const MessageOverlay: React.FC<MessageOverlayProps> = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-slate-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-sm w-full bg-slate-900 border border-rose-500/30 rounded-[2.5rem] p-10 text-center shadow-[0_0_50px_rgba(244,63,94,0.2)]"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-rose-500 blur-xl rounded-full opacity-30"
            />
            <Heart size={48} className="text-rose-500 fill-rose-500 relative z-10" />
          </div>
        </div>

        <p className="text-2xl font-romantic text-rose-100 leading-relaxed italic">
          "{message}"
        </p>

        <div className="mt-10 h-1 w-12 bg-rose-500/30 mx-auto rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default MessageOverlay;
