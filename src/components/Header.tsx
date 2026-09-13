import React from 'react';
import { HelpCircle, Map, CheckCircle, Flame, Waves } from 'lucide-react';

interface HeaderProps {
  activeTab: 'map' | 'quiz';
  setActiveTab: (tab: 'map' | 'quiz') => void;
  exploredStanzas: number[];
  totalStanzas: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  exploredStanzas,
  totalStanzas,
}) => {
  const progressPercent = Math.round((exploredStanzas.length / totalStanzas) * 100);

  return (
    <header className="sticky top-0 z-30 bg-[#0d1117]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* App Branding */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-950 to-slate-900 border border-teal-500/30 text-teal-400 shadow-lg shadow-teal-950/50 flex-shrink-0 mt-0.5">
              <Waves className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 font-serif">
                  Lament: <span className="text-teal-400 font-sans font-normal">Interactive Stanza Map</span>
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-950/70 border border-amber-500/40 text-amber-300">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Gillian Clarke (1991)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                An Elegiac Exploration of Environmental & Human Casualty in the Persian Gulf War
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto flex-wrap">
            {/* Revision Progress Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 text-xs">
              <CheckCircle className={`w-4 h-4 ${progressPercent === 100 ? 'text-emerald-400' : 'text-teal-400'}`} />
              <span className="text-slate-300 font-medium">
                Explored: <strong className="text-slate-100">{exploredStanzas.length}</strong>/{totalStanzas} Stanzas
              </span>
              <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block ml-1">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-amber-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'map'
                  ? 'bg-teal-950 border border-teal-500/50 text-teal-200 shadow-lg shadow-teal-950/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              id="tab-map-button"
            >
              <Map className="w-4 h-4 text-teal-400" />
              <span>Interactive Stanza Map</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'quiz'
                  ? 'bg-amber-950 border border-amber-500/50 text-amber-200 shadow-lg shadow-amber-950/50'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
              id="tab-quiz-button"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Revision Quiz</span>
            </button>
          </div>

          {/* Instruction Note */}
          <div className="hidden lg:flex items-center text-xs text-slate-400 italic bg-slate-900/40 px-3 py-1 rounded border border-slate-800">
            Hover or click nodes on the visual canvas to analyze quotes, techniques & history
          </div>
        </div>
      </div>
    </header>
  );
};
