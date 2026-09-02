import React, { useState } from 'react';
import { StanzaNode } from '../types';
import { BookOpen, Sparkles, Feather, ChevronRight, Eye } from 'lucide-react';

interface FullPoemReaderProps {
  nodes: StanzaNode[];
  onSelectNode: (node: StanzaNode) => void;
}

export const FullPoemReader: React.FC<FullPoemReaderProps> = ({ nodes, onSelectNode }) => {
  const [selectedStanzaId, setSelectedStanzaId] = useState<number>(1);
  const activeNode = nodes.find((n) => n.id === selectedStanzaId) || nodes[0];

  return (
    <div className="max-w-7xl mx-auto my-6 px-4 sm:px-6">
      <div className="bg-[#161b22] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8">
        
        {/* View Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-6 border-b border-slate-800 gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-100 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-teal-400" />
              Gillian Clarke — *Lament* (Full Annotated Text)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Read the full 7-stanza poem line-by-line. Select any stanza to view live annotations and techniques.
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {nodes.map((node) => (
              <button
                key={node.id}
                onClick={() => setSelectedStanzaId(node.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
                  selectedStanzaId === node.id
                    ? 'bg-teal-950 border border-teal-500 text-teal-200 shadow'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
                id={`poem-reader-stanza-btn-${node.stanzaNumber}`}
              >
                Stanza {node.stanzaNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Two-Column Reader & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Full Poem Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Complete Poem Text (Click Stanza to Inspect):
            </span>

            {nodes.map((node) => {
              const isSelected = selectedStanzaId === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedStanzaId(node.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-teal-950/60 to-slate-900 border-teal-500/60 shadow-xl ring-1 ring-teal-500/30'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                  id={`full-poem-stanza-card-${node.stanzaNumber}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-teal-400 font-mono">
                      Stanza {node.stanzaNumber}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {node.category}
                    </span>
                  </div>

                  <blockquote className="text-base sm:text-lg font-serif italic text-amber-100 leading-relaxed whitespace-pre-line pl-3 border-l-2 border-amber-400/80">
                    {node.fullStanzaText}
                  </blockquote>

                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex flex-wrap gap-1">
                      {node.techniques.map((t) => (
                        <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-teal-400 text-[11px] font-medium flex items-center gap-1">
                      Inspect <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Stanza Annotator */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 self-start space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900 border border-teal-500/40 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-teal-950 border border-teal-600/50 text-teal-300 font-serif font-bold text-sm flex items-center justify-center">
                    S{activeNode.stanzaNumber}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 font-serif">
                      {activeNode.title}
                    </h3>
                    <span className="text-xs text-slate-400">{activeNode.category}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectNode(activeNode)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-950 hover:bg-teal-900 border border-teal-600/50 text-teal-200 text-xs font-semibold transition-colors"
                  id="open-modal-from-reader-button"
                >
                  <Eye className="w-3.5 h-3.5" /> Full Modal
                </button>
              </div>

              {/* Highlight Quote */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Feather className="w-3 h-3" /> Core Stanza Quote:
                </span>
                <p className="text-base font-serif italic text-amber-100">
                  "{activeNode.quote}"
                </p>
              </div>

              {/* Literary Devices Cards */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Poetic Technique Breakdown:
                </span>

                {activeNode.literaryDevices.map((dev, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-teal-300">{dev.name}</span>
                      <span className="font-serif italic text-amber-300">"{dev.quotePhrase}"</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {dev.explanation}
                    </p>
                  </div>
                ))}
              </div>

              {/* Analysis */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-xs">
                <span className="font-bold text-slate-100 font-serif block text-sm">
                  Literary Commentary:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {activeNode.analysis}
                </p>
              </div>

              {/* History Context */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs space-y-1">
                <span className="font-bold text-cyan-300 font-serif block">
                  1991 Gulf War Connection:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {activeNode.context}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
