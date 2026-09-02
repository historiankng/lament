import React, { useState } from 'react';
import { StanzaNode } from '../types';
import { Waves, Flame, CloudOff, Eye, CheckCircle2, ChevronRight, Info, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import bgZone1 from '../assets/images/zone_1_sea_1788319067721.jpg';
import bgZone2 from '../assets/images/zone_2_shore_1788319078924.jpg';
import bgZone3 from '../assets/images/zone_3_desert_1788319090522.jpg';

interface StanzaMapCanvasProps {
  nodes: StanzaNode[];
  onSelectNode: (node: StanzaNode) => void;
  exploredStanzas: number[];
  selectedCategory: string;
  selectedTechnique: string;
  searchQuery: string;
}

export const StanzaMapCanvas: React.FC<StanzaMapCanvasProps> = ({
  nodes,
  onSelectNode,
  exploredStanzas,
  selectedCategory,
  selectedTechnique,
  searchQuery,
}) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);

  // Helper to check if a node matches current filter
  const isNodeMatching = (node: StanzaNode): boolean => {
    // 1. Category check
    if (selectedCategory !== 'ALL') {
      if (selectedCategory === 'Marine' && node.category !== 'Marine') return false;
      if (selectedCategory === 'Shoreline' && !['Marine', 'Shoreline'].includes(node.category)) return false;
      if (selectedCategory === 'Environmental Trauma' && node.category !== 'Environmental Trauma') return false;
      if (selectedCategory === 'Human Cost / War' && node.category !== 'Human Cost / War') return false;
    }

    // 2. Technique check
    if (selectedTechnique !== 'ALL') {
      const hasTech = node.techniques.some((t) => t.toLowerCase() === selectedTechnique.toLowerCase()) ||
        node.literaryDevices.some((d) => d.name.toLowerCase() === selectedTechnique.toLowerCase());
      if (!hasTech) return false;
    }

    // 3. Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchQuote = node.quote.toLowerCase().includes(q);
      const matchFullText = node.fullStanzaText.toLowerCase().includes(q);
      const matchAnalysis = node.analysis.toLowerCase().includes(q);
      const matchContext = node.context.toLowerCase().includes(q);
      const matchTech = node.techniques.some((t) => t.toLowerCase().includes(q));
      if (!matchQuote && !matchFullText && !matchAnalysis && !matchContext && !matchTech) return false;
    }

    return true;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto my-6 px-4 sm:px-6">
      
      {/* Container Frame with moody atmospheric dark styling */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1117] shadow-2xl min-h-[720px] lg:min-h-[800px] flex flex-col justify-between select-none">
        
        {/* Background Atmospheric Layering */}
        <div className="absolute inset-0 pointer-events-none z-0">
          
          {/* Subtle SVG Oil Slick Waves Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="oilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#0d9488" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M 0 150 Q 350 220 700 130 T 1400 180 V 0 H 0 Z" fill="url(#oilGradient)" />
            <path d="M 0 420 Q 400 350 800 450 T 1400 390 V 800 H 0 Z" fill="#0d1117" opacity="0.6" />
          </svg>

          {/* Ambient Glow Orbs */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* --- ZONE 1: THE SEA & MARINE LIFE (Stanzas 1–3) --- */}
        <div className="relative z-10 flex-1 border-b border-teal-900/40 p-6 sm:p-8 overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: `url(${bgZone1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09151e]/80 via-[#0d1b26]/90 to-[#0e1722]/95 pointer-events-none" />
          
          {/* Zone Header Badge */}
          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-widest shadow-lg">
              <Waves className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span>Zone 1: The Sea & Marine Life</span>
              <span className="text-teal-500 font-mono text-[10px] ml-1">(Stanzas 1–3)</span>
            </div>
            <span className="text-xs text-teal-400/70 italic hidden sm:inline">
              "nest of silk" • "mantle of green" • "scalding boy"
            </span>
          </div>

          {/* Zone Background Motif Visual */}
          <div className="absolute right-8 top-12 opacity-10 pointer-events-none text-teal-300 hidden md:block">
            <svg className="w-48 h-48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
        </div>

        {/* --- ZONE 2: THE SHORELINE & HUMAN IMPACT (Stanzas 4–5) --- */}
        <div className="relative z-10 flex-1 border-b border-amber-900/30 p-6 sm:p-8 overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: `url(${bgZone2})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1722]/95 via-[#141b24]/90 to-[#1a1c24]/95 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-widest shadow-lg">
              <CloudOff className="w-3.5 h-3.5 text-cyan-400" />
              <span>Zone 2: Shoreline & Human Impact</span>
              <span className="text-cyan-500 font-mono text-[10px] ml-1">(Stanzas 4–5)</span>
            </div>
            <span className="text-xs text-amber-400/70 italic hidden sm:inline">
              "burden of the sea" • "uniform of fire" • "sun humbled"
            </span>
          </div>
        </div>

        {/* --- ZONE 3: WAR, DESERT & HORIZON (Stanzas 6–7) --- */}
        <div className="relative z-10 flex-1 p-6 sm:p-8 overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: `url(${bgZone3})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1c24]/95 via-[#1c171e]/90 to-[#161318]/95 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-widest shadow-lg">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              <span>Zone 3: War, Desert & Horizon</span>
              <span className="text-amber-500 font-mono text-[10px] ml-1">(Stanzas 6–7)</span>
            </div>
            <span className="text-xs text-amber-400/70 italic hidden sm:inline">
              "veil of oil" • "blazing eye of the dragon" • "world's last breath"
            </span>
          </div>
        </div>

        {/* --- ABSOLUTE OVERLAY POSITIONED NODES --- */}
        <div className="absolute inset-0 z-20 pointer-events-auto">
          {nodes.map((node) => {
            const isMatching = isNodeMatching(node);
            const isExplored = exploredStanzas.includes(node.id);
            const isHovered = hoveredNodeId === node.id;
            const isWarCategory = node.category === 'Human Cost / War' || node.category === 'Environmental Trauma';

            return (
              <div
                key={node.id}
                style={{ left: `${node.xPos}%`, top: `${node.yPos}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isHovered ? 'z-[60]' : isMatching ? 'opacity-100 scale-100 z-30' : 'opacity-30 scale-90 pointer-events-none z-10 grayscale'
                }`}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
              >
                {/* Node Hotspot Container */}
                <div className="relative group cursor-pointer" onClick={() => onSelectNode(node)}>
                  
                  {/* Outer Pulsing Aura */}
                  <div
                    className={`absolute -inset-3 rounded-full opacity-75 blur-md transition-all duration-500 ${
                      isWarCategory
                        ? 'bg-gradient-to-r from-amber-500 to-rose-600 group-hover:scale-125'
                        : 'bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:scale-125'
                    } ${isHovered ? 'scale-150 animate-none opacity-100' : 'animate-pulse'}`}
                  />

                  {/* Node Circle */}
                  <div
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-xl ${
                      isWarCategory
                        ? 'bg-slate-950 border-amber-400/80 text-amber-300 group-hover:bg-amber-950 group-hover:border-amber-300'
                        : 'bg-slate-950 border-teal-400/80 text-teal-300 group-hover:bg-teal-950 group-hover:border-teal-300'
                    }`}
                    id={`stanza-node-button-${node.stanzaNumber}`}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-none">
                        S{node.stanzaNumber}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold font-serif">
                        {node.stanzaNumber}
                      </span>
                    </div>

                    {/* Explored Checkmark Badge */}
                    {isExplored && (
                      <div className="absolute -top-1 -right-1 bg-emerald-500 text-slate-950 rounded-full p-0.5 border border-slate-900 shadow">
                        <CheckCircle2 className="w-3.5 h-3.5 font-bold" />
                      </div>
                    )}
                  </div>

                  {/* Node Title Label Tag */}
                  <div className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-40 ${
                    node.yPos > 80 ? 'bottom-full mb-2' : 'top-full mt-2'
                  }`}>
                    <div className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-700/80 text-[11px] font-medium text-slate-200 shadow-xl backdrop-blur-md flex items-center gap-1.5 group-hover:border-teal-500/60 transition-colors">
                      <span className="truncate max-w-[150px] sm:max-w-[200px]">{node.title}</span>
                      <ChevronRight className="w-3 h-3 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* --- HOVER TOOLTIP OVERLAY --- */}
                <AnimatePresence>
                  {isHovered && isMatching && (
                    <motion.div
                      initial={{ opacity: 0, y: node.yPos < 35 ? -10 : 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: node.yPos < 35 ? -5 : 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute left-1/2 -translate-x-1/2 w-72 sm:w-80 p-4 rounded-xl bg-slate-950/95 border border-teal-500/40 text-slate-100 shadow-2xl backdrop-blur-xl z-50 pointer-events-none ${
                        node.yPos < 35 ? 'top-full mt-8' : 'bottom-full mb-3'
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                        <span className="text-xs font-bold text-teal-300 font-serif">
                          Stanza {node.stanzaNumber} Highlight
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-teal-950 text-teal-400 border border-teal-800">
                          {node.category}
                        </span>
                      </div>

                      <blockquote className="text-xs italic text-amber-200/90 font-serif mb-2 leading-relaxed">
                        "{node.quote}"
                      </blockquote>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {node.techniques.map((tech) => (
                          <span key={tech} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="text-[11px] text-slate-400 line-clamp-2">
                        {node.analysis}
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-teal-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" /> Click for Deep Analysis & History
                        </span>
                        <span>Stanza {node.stanzaNumber}/7</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Map Canvas Footer Info Banner */}
        <div className="relative z-10 px-6 py-3 bg-[#0a0d12]/90 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-teal-400 shrink-0" />
            <span>Click any glowing node to open deep analysis, literary technique notes & 1991 Gulf War historical context.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium shrink-0">
            <span className="flex items-center gap-1.5 text-teal-400">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" /> Marine Nodes
            </span>
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" /> War & Smoke Nodes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
