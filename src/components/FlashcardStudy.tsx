import React, { useState } from 'react';
import { FLASHCARDS } from '../data/lamentData';
import { Layers, RotateCcw, ChevronLeft, ChevronRight, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FlashcardStudy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState<number[]>([]);

  const card = FLASHCARDS[currentIndex];
  const isMastered = masteredCards.includes(card.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  const toggleMastered = () => {
    if (isMastered) {
      setMasteredCards(masteredCards.filter((id) => id !== card.id));
    } else {
      setMasteredCards([...masteredCards, card.id]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-6 px-4 sm:px-6">
      <div className="bg-[#161b22] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-950 border border-teal-500/40 text-teal-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-100">
                Poetic Technique Flashcards
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Click card to flip between quotes, literary techniques, and analytical breakdowns
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
            Mastered: <strong className="text-teal-400">{masteredCards.length}</strong>/{FLASHCARDS.length}
          </div>
        </div>

        {/* Card Counter & Category Badge */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
          <span>Card {currentIndex + 1} of {FLASHCARDS.length} (Stanza {card.stanzaNumber})</span>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-teal-300 border border-slate-700">
            {card.category}
          </span>
        </div>

        {/* Interactive Flip Card */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative min-h-[260px] sm:min-h-[300px] rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950/20 to-slate-900 border border-teal-500/40 p-6 sm:p-8 cursor-pointer shadow-2xl flex flex-col items-center justify-center text-center transition-all hover:border-teal-400/80 group"
          id="flashcard-flip-container"
        >
          <AnimatePresence mode="wait">
            {!isFlipped ? (
              <motion.div
                key="front"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Front (Quote & Question):
                </span>
                <p className="text-lg sm:text-xl font-serif italic text-amber-100 whitespace-pre-line leading-relaxed">
                  {card.front}
                </p>
                <span className="text-xs text-slate-400 italic block pt-2 group-hover:text-teal-300">
                  (Click card to flip for technique analysis)
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="back"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Back (Technique Breakdown):
                </span>
                <p className="text-base sm:text-lg font-serif text-slate-200 leading-relaxed">
                  {card.back}
                </p>
                <span className="text-xs text-slate-400 italic block pt-2">
                  (Click card to flip back)
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            onClick={toggleMastered}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              isMastered
                ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            id="flashcard-mastered-toggle"
          >
            <Check className="w-4 h-4" />
            <span>{isMastered ? 'Marked as Mastered' : 'Mark as Mastered'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300"
              id="flashcard-prev-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300"
              id="flashcard-next-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
