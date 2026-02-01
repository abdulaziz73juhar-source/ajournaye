
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Added Navigation to the lucide-react imports
import { Heart, Star, Gift, Flower2, Lamp, Cloud, MailOpen, Coffee, Sparkles, Navigation } from 'lucide-react';
import { GameState, GameItem } from '../types';
import { LOVE_MESSAGES } from '../constants';

interface GameLevelProps {
  title: string;
  description: string;
  levelType: 'collect' | 'search' | 'final';
  targetCount: number;
  nextState: GameState;
  onComplete: (next: GameState) => void;
  onMessage: (msg: string) => void;
}

const GameLevel: React.FC<GameLevelProps> = ({ 
  title, description, levelType, targetCount, nextState, onComplete, onMessage 
}) => {
  const [collectedCount, setCollectedCount] = useState(0);
  const [items, setItems] = useState<GameItem[]>([]);
  const [isIntro, setIsIntro] = useState(true);

  // Initialize random items for the level
  useEffect(() => {
    const newItems: GameItem[] = [];
    const types: GameItem['type'][] = levelType === 'collect' 
      ? ['heart', 'flower', 'coffee'] 
      : levelType === 'search' 
        ? ['star', 'cloud', 'lamp'] 
        : ['chest', 'letter'];

    for (let i = 0; i < 8; i++) {
      newItems.push({
        id: `item-${i}`,
        type: types[Math.floor(Math.random() * types.length)],
        x: 10 + Math.random() * 80,
        y: 20 + Math.random() * 60,
        messageId: LOVE_MESSAGES[Math.floor(Math.random() * LOVE_MESSAGES.length)].id
      });
    }
    setItems(newItems);
    
    const timer = setTimeout(() => setIsIntro(false), 3000);
    return () => clearTimeout(timer);
  }, [levelType]);

  const handleItemClick = (item: GameItem) => {
    const msg = LOVE_MESSAGES.find(m => m.id === item.messageId)?.text || "I love you!";
    onMessage(msg);
    
    setItems(prev => prev.filter(i => i.id !== item.id));
    setCollectedCount(prev => {
      const newVal = prev + 1;
      if (newVal >= targetCount) {
        setTimeout(() => onComplete(nextState), 2000);
      }
      return newVal;
    });
  };

  const renderIcon = (type: GameItem['type']) => {
    const props = { className: "w-full h-full p-2" };
    switch (type) {
      case 'heart': return <Heart {...props} className={`${props.className} text-rose-400 fill-rose-400/20`} />;
      case 'star': return <Star {...props} className={`${props.className} text-yellow-300 fill-yellow-300/20`} />;
      case 'chest': return <Gift {...props} className={`${props.className} text-amber-500`} />;
      case 'flower': return <Flower2 {...props} className={`${props.className} text-pink-300`} />;
      case 'lamp': return <Lamp {...props} className={`${props.className} text-blue-300`} />;
      case 'cloud': return <Cloud {...props} className={`${props.className} text-slate-300`} />;
      case 'letter': return <MailOpen {...props} className={`${props.className} text-rose-200`} />;
      case 'coffee': return <Coffee {...props} className={`${props.className} text-emerald-300`} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="relative w-full h-full bg-slate-950 flex flex-col items-center overflow-hidden">
      <AnimatePresence>
        {isIntro && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 p-8 text-center"
          >
            <h2 className="text-4xl font-romantic text-rose-300 mb-4">{title}</h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xs">{description}</p>
            <motion.div 
              animate={{ x: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-8 text-rose-500"
            >
              <Navigation className="rotate-90" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full flex justify-between p-6 items-center z-10">
        <div>
          <h3 className="text-rose-200/50 uppercase tracking-widest text-xs font-bold">Location</h3>
          <p className="font-romantic text-xl text-rose-200">{title}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 flex items-center gap-2">
          <Heart size={16} className="text-rose-500 fill-rose-500" />
          <span className="text-rose-100 font-bold">{collectedCount} / {targetCount}</span>
        </div>
      </div>

      <div className="relative flex-grow w-full">
        {items.map((item) => (
          <motion.button
            key={item.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -10, 0]
            }}
            transition={{
              scale: { type: 'spring', damping: 10, stiffness: 100 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
            }}
            whileTap={{ scale: 0.8 }}
            onClick={() => handleItemClick(item)}
            className="absolute w-14 h-14 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-xl flex items-center justify-center group"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            <div className="group-hover:scale-125 transition-transform duration-300">
              {renderIcon(item.type)}
            </div>
            <div className="absolute inset-0 bg-rose-400/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
          </motion.button>
        ))}

        {collectedCount >= targetCount && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-rose-500/20 backdrop-blur-xl border border-rose-500/30 px-8 py-4 rounded-3xl text-center">
              <Sparkles className="mx-auto text-rose-400 mb-2" />
              <p className="text-rose-100 font-romantic text-2xl">Path Unlocked</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Decorative environment */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </div>
  );
};

export default GameLevel;
