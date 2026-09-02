import React, { useState } from 'react';
import { StanzaNode } from '../types';
import { X, BookOpen, Feather, History, Sparkles, Copy, Check, ChevronLeft, ChevronRight, HelpCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NodeDetailModalProps {
  node: StanzaNode | null;
  onClose: () => void;
  onNavigateNode: (direction: 'next' | 'prev') => void;
  totalNodes: number;
}

export const NodeDetailModal: React.FC<NodeDetailModalProps> = ({
  node,
  onClose,
  onNavigateNode,
  totalNodes,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'analysis' | 'devices' | 'history' | 'essay'>('analysis');

  if (!node) return null;

  const handleCopyAnalysis = () => {
    const textToCopy = `Gillian Clarke - Lament (Stanza ${node.stanzaNumber})\nQuote: "${node.quote}"\n\nLiterary Devices:\n${node.literaryDevices.map(d => `- ${d.name} (${d.quotePhrase}): ${d.explanation}`).join('\n')}\n\nDeep Analysis:\n${node.analysis}\n\nHistorical Context (1991 Gulf War):\n${node.context}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        
        {/* Modal Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#161b22] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 bg-[#0d1117]/95 border-b border-slate-800 p-5 flex items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-500/40 text-teal-300 font-serif font-bold text-lg flex items-center justify-center shadow-inner">
                S{node.stanzaNumber}
              </span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-100 font-serif">
                    {node.title}
                  </h2>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-950/80 text-teal-300 border border-teal-700/50">
                    {node.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Zone {node.zoneId} • Gillian Clarke's *Lament*
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Stanza Navigator */}
              <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5">
                <button
                  onClick={() => onNavigateNode('prev')}
                  className="p-1.5 hover:bg-slate-800 text-slate-300 rounded transition-colors"
                  title="Previous Stanza"
                  id="modal-prev-stanza-button"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 px-2 font-mono">
                  {node.stanzaNumber}/{totalNodes}
                </span>
                <button
                  onClick={() => onNavigateNode('next')}
                  className="p-1.5 hover:bg-slate-800 text-slate-300 rounded transition-colors"
                  title="Next Stanza"
                  id="modal-next-stanza-button"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Close Modal Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                id="modal-close-button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Scroll Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
            
            {/* Key Quote & Full Stanza Block */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 via-teal-950/30 to-slate-900 border border-teal-500/30 shadow-inner">
              <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Feather className="w-3.5 h-3.5" /> Full Stanza Text & Core Quote:
              </span>
              <blockquote className="text-base sm:text-lg font-serif italic text-amber-100 leading-relaxed whitespace-pre-line pl-4 border-l-2 border-amber-400/80">
                {node.fullStanzaText}
              </blockquote>
            </div>

            {/* Modal Internal Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('analysis')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'analysis'
                    ? 'bg-teal-950 border border-teal-500/50 text-teal-200 shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
                id="modal-tab-analysis"
              >
                <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                <span>Deep Analysis</span>
              </button>

              <button
                onClick={() => setActiveTab('devices')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'devices'
                    ? 'bg-teal-950 border border-teal-500/50 text-teal-200 shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
                id="modal-tab-devices"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Literary Devices ({node.literaryDevices.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'history'
                    ? 'bg-teal-950 border border-teal-500/50 text-teal-200 shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
                id="modal-tab-history"
              >
                <History className="w-3.5 h-3.5 text-cyan-400" />
                <span>1991 Gulf War Context</span>
              </button>

              <button
                onClick={() => setActiveTab('essay')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'essay'
                    ? 'bg-amber-950 border border-amber-500/50 text-amber-200 shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
                id="modal-tab-essay"
              >
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>Essay Revision Prompt</span>
              </button>
            </div>

            {/* TAB CONTENT: DEEP ANALYSIS */}
            {activeTab === 'analysis' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <h3 className="text-sm font-bold text-teal-300 font-serif mb-2">
                    Critical Analysis Breakdown
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {node.analysis}
                  </p>
                </div>

                {/* Symbolism & Key Vocabulary Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Symbolism */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Key Symbolism:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {node.symbolism.map((sym, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vocabulary */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> Key Vocabulary:
                    </h4>
                    <dl className="space-y-2 text-xs">
                      {node.keyVocabulary.map((vocab, idx) => (
                        <div key={idx} className="border-b border-slate-800/60 pb-1.5 last:border-none">
                          <dt className="font-bold text-slate-100 font-mono">{vocab.word}:</dt>
                          <dd className="text-slate-400 mt-0.5">{vocab.definition}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: LITERARY DEVICES */}
            {activeTab === 'devices' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {node.literaryDevices.map((device, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-teal-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-teal-300 px-2.5 py-0.5 rounded bg-teal-950 border border-teal-800">
                          {device.name}
                        </span>
                        <span className="text-xs font-serif italic text-amber-300">
                          "{device.quotePhrase}"
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {device.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: 1991 GULF WAR CONTEXT */}
            {activeTab === 'history' && (
              <div className="p-5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-3">
                <div className="flex items-center gap-2 text-cyan-300 font-serif font-bold text-base">
                  <History className="w-5 h-5 text-cyan-400" />
                  <span>Historical Context: 1991 Persian Gulf Conflict</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {node.context}
                </p>
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>GCSE Revision Tip:</strong> Linking poetic technique directly to the 1991 Gulf War oil slick & oil fires demonstrates top-tier contextual understanding (AO3) in English Literature essays.
                  </span>
                </div>
              </div>
            )}

            {/* TAB CONTENT: ESSAY PROMPT */}
            {activeTab === 'essay' && (
              <div className="p-5 rounded-xl bg-amber-950/30 border border-amber-800/40 space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-base">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span>Sample Essay Question & Annotation Guide</span>
                </div>
                <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-sm font-serif italic text-amber-200">
                  "{node.essayPrompt}"
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To write a band 6 response, construct your paragraph by referencing the quote <em className="text-amber-300 font-serif">"{node.quote}"</em>, identifying key techniques ({node.techniques.join(', ')}), analyzing the sensory contrast, and contextualizing with the 1991 Gulf War environment.
                </p>
              </div>
            )}

          </div>

          {/* Modal Footer with Copy for Essay Tool */}
          <div className="p-4 bg-[#0d1117] border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              onClick={handleCopyAnalysis}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-950 hover:bg-teal-900 text-teal-200 border border-teal-600/50 text-xs font-semibold transition-all"
              id="copy-analysis-button"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied Citation to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-teal-400" />
                  <span>Copy Quote & Analysis for Essay Notes</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              id="modal-footer-close-button"
            >
              Close Analysis
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
