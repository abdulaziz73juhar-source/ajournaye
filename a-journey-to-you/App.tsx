
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Stars, Mail, Gift, Sparkles, Navigation, Lock } from 'lucide-react';
import { GameState } from './types';
import StartScreen from './components/StartScreen';
import GameLevel from './components/GameLevel';
import MessageOverlay from './components/MessageOverlay';
import DailySurprise from './components/DailySurprise';
import FinalLetter from './components/FinalLetter';
import EndScreen from './components/EndScreen';
import HeartBackground from './components/HeartBackground';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  const [discoveredMessages, setDiscoveredMessages] = useState<Set<string>>(new Set());

  const handleLevelComplete = useCallback((next: GameState) => {
    setGameState(next);
  }, []);

  const showMessage = useCallback((msg: string) => {
    setActiveMessage(msg);
    setDiscoveredMessages(prev => new Set(prev).add(msg));
  }, []);

  const closeMessage = () => setActiveMessage(null);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950 text-white">
      <HeartBackground />

      <AnimatePresence mode="wait">
        {gameState === GameState.START && (
          <StartScreen key="start" onStart={() => setGameState(GameState.LEVEL_1)} />
        )}

        {gameState === GameState.LEVEL_1 && (
          <GameLevel 
            key="lv1"
            title="The Whispering Woods"
            description="Tread softly... hidden words are waiting for you among the blossoms."
            levelType="collect"
            targetCount={5}
            nextState={GameState.LEVEL_2}
            onComplete={handleLevelComplete}
            onMessage={showMessage}
          />
        )}

        {gameState === GameState.LEVEL_2 && (
          <GameLevel 
            key="lv2"
            title="Moonlight Path"
            description="The stars are bright tonight, each one carrying a memory of us."
            levelType="search"
            targetCount={3}
            nextState={GameState.LEVEL_3}
            onComplete={handleLevelComplete}
            onMessage={showMessage}
          />
        )}

        {gameState === GameState.LEVEL_3 && (
          <GameLevel 
            key="lv3"
            title="The Eternal Chamber"
            description="We've come so far. Open the final treasures of my heart."
            levelType="final"
            targetCount={1}
            nextState={GameState.DAILY_SURPRISE}
            onComplete={handleLevelComplete}
            onMessage={showMessage}
          />
        )}

        {gameState === GameState.DAILY_SURPRISE && (
          <DailySurprise 
            key="daily" 
            onNext={() => setGameState(GameState.FINAL_LETTER)} 
          />
        )}

        {gameState === GameState.FINAL_LETTER && (
          <FinalLetter 
            key="final" 
            onFinish={() => setGameState(GameState.END)} 
          />
        )}

        {gameState === GameState.END && (
          <EndScreen key="end" />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeMessage && (
          <MessageOverlay message={activeMessage} onClose={closeMessage} />
        )}
      </AnimatePresence>

      {/* Progress Footer */}
      {gameState !== GameState.START && gameState !== GameState.END && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 pointer-events-none">
          <div className={`w-2 h-2 rounded-full transition-all ${gameState === GameState.LEVEL_1 ? 'bg-pink-400 w-4' : 'bg-slate-700'}`} />
          <div className={`w-2 h-2 rounded-full transition-all ${gameState === GameState.LEVEL_2 ? 'bg-pink-400 w-4' : 'bg-slate-700'}`} />
          <div className={`w-2 h-2 rounded-full transition-all ${gameState === GameState.LEVEL_3 ? 'bg-pink-400 w-4' : 'bg-slate-700'}`} />
          <div className={`w-2 h-2 rounded-full transition-all ${gameState === GameState.DAILY_SURPRISE ? 'bg-pink-400 w-4' : 'bg-slate-700'}`} />
          <div className={`w-2 h-2 rounded-full transition-all ${gameState === GameState.FINAL_LETTER ? 'bg-pink-400 w-4' : 'bg-slate-700'}`} />
        </div>
      )}
    </div>
  );
};

export default App;
