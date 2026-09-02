import React, { useState } from 'react';
import { X, Layers, BookOpen, History, Sparkles, Search, ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';
import { OVERARCHING_ANALYSIS, LITERARY_TERMS } from '../data/lamentData';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarAnalysisProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarAnalysis: React.FC<SidebarAnalysisProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredGlossary = LITERARY_TERMS.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm">
          
          {/* Backdrop Overlay Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-xl bg-[#161b22] border-l border-slate-700/80 shadow-2xl h-full flex flex-col z-10 text-slate-200"
          >
            {/* Drawer Header */}
            <div className="p-5 bg-[#0d1117] border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-teal-950 border border-teal-600/40 text-teal-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100 font-serif">
                    Overarching Poetic Analysis
                  </h2>
                  <p className="text-xs text-slate-400">
                    Form, Elegy, History & Literary Terms Glossary
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                id="sidebar-close-button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Analysis Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              
              {/* 1. Form & Elegy Section */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-teal-300 font-serif font-bold text-base">
                  <BookOpen className="w-4 h-4 text-teal-400" />
                  <span>{OVERARCHING_ANALYSIS.formAndElegy.heading}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {OVERARCHING_ANALYSIS.formAndElegy.content}
                </p>
              </div>

              {/* 2. Litany & Anaphora */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{OVERARCHING_ANALYSIS.litanyStructure.heading}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {OVERARCHING_ANALYSIS.litanyStructure.content}
                </p>
              </div>

              {/* 3. Historical Gulf War Context */}
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-serif font-bold text-base">
                  <History className="w-4 h-4 text-cyan-400" />
                  <span>{OVERARCHING_ANALYSIS.gulfWarContext.heading}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {OVERARCHING_ANALYSIS.gulfWarContext.content}
                </p>
              </div>

              {/* 4. Zone Progression Breakdown */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-slate-200 font-serif font-bold text-base">
                  <Layers className="w-4 h-4 text-teal-400" />
                  <span>{OVERARCHING_ANALYSIS.thematicProgression.heading}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {OVERARCHING_ANALYSIS.thematicProgression.content}
                </p>
              </div>

              {/* 5. Key Literary Terms Glossary */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-100 font-serif flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-teal-400" />
                    Key Literary Terms Glossary
                  </h3>
                  <span className="text-xs text-slate-400">
                    {filteredGlossary.length} terms
                  </span>
                </div>

                {/* Glossary Search Box */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search literary terms (e.g., Elegy, Anaphora, Oxymoron)..."
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-teal-500"
                    id="glossary-search-input"
                  />
                </div>

                {/* Glossary Cards */}
                <div className="space-y-2">
                  {filteredGlossary.map((item) => {
                    const isExpanded = expandedTerm === item.term;
                    return (
                      <div
                        key={item.term}
                        className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setExpandedTerm(isExpanded ? null : item.term)}
                          className="w-full p-3 flex items-center justify-between text-left hover:bg-slate-800/60 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-teal-300 font-mono">
                              {item.term}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                              {item.category}
                            </span>
                          </div>
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="p-3 pt-0 border-t border-slate-800/60 text-xs text-slate-300 space-y-2 bg-slate-950/50">
                            <p className="mt-2">{item.definition}</p>
                            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-amber-200 font-serif italic">
                              Example: {item.exampleFromPoem}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-[#0d1117] border-t border-slate-800 text-center">
              <p className="text-xs text-slate-400">
                Secondary English Literature Revision • Gillian Clarke's *Lament*
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
