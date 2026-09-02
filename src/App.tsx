import React, { useState, useMemo } from 'react';
import { STANZA_NODES } from './data/lamentData';
import { StanzaNode } from './types';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { StanzaMapCanvas } from './components/StanzaMapCanvas';
import { NodeDetailModal } from './components/NodeDetailModal';
import { SidebarAnalysis } from './components/SidebarAnalysis';
import { FullPoemReader } from './components/FullPoemReader';
import { RevisionQuiz } from './components/RevisionQuiz';
import { FlashcardStudy } from './components/FlashcardStudy';
import { toggleAmbientAudio, isAudioPlaying as getIsAudioPlaying } from './utils/audioSynth';

export default function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'poem' | 'analysis' | 'quiz' | 'flashcards'>('map');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedTechnique, setSelectedTechnique] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [selectedNodeModal, setSelectedNodeModal] = useState<StanzaNode | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [exploredStanzas, setExploredStanzas] = useState<number[]>([]);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  // Extract unique techniques across all nodes
  const allTechniques = useMemo(() => {
    const set = new Set<string>();
    STANZA_NODES.forEach((n) => {
      n.techniques.forEach((t) => set.add(t));
      n.literaryDevices.forEach((d) => set.add(d.name));
    });
    return Array.from(set).sort();
  }, []);

  const handleSelectNode = (node: StanzaNode) => {
    setSelectedNodeModal(node);
    if (!exploredStanzas.includes(node.id)) {
      setExploredStanzas((prev) => [...prev, node.id]);
    }
  };

  const handleNavigateModalNode = (direction: 'next' | 'prev') => {
    if (!selectedNodeModal) return;
    const currentIdx = STANZA_NODES.findIndex((n) => n.id === selectedNodeModal.id);
    let nextIdx = direction === 'next' ? currentIdx + 1 : currentIdx - 1;

    if (nextIdx < 0) nextIdx = STANZA_NODES.length - 1;
    if (nextIdx >= STANZA_NODES.length) nextIdx = 0;

    const nextNode = STANZA_NODES[nextIdx];
    setSelectedNodeModal(nextNode);
    if (!exploredStanzas.includes(nextNode.id)) {
      setExploredStanzas((prev) => [...prev, nextNode.id]);
    }
  };

  const handleToggleAudio = () => {
    toggleAmbientAudio((playing) => setIsAudioPlaying(playing));
  };

  const handleResetFilters = () => {
    setSelectedCategory('ALL');
    setSelectedTechnique('ALL');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950">
      
      {/* Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        exploredStanzas={exploredStanzas}
        totalStanzas={STANZA_NODES.length}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={handleToggleAudio}
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 pb-16">
        {activeTab === 'map' && (
          <div>
            <FilterBar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedTechnique={selectedTechnique}
              setSelectedTechnique={setSelectedTechnique}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onReset={handleResetFilters}
              allTechniques={allTechniques}
            />

            <StanzaMapCanvas
              nodes={STANZA_NODES}
              onSelectNode={handleSelectNode}
              exploredStanzas={exploredStanzas}
              selectedCategory={selectedCategory}
              selectedTechnique={selectedTechnique}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {activeTab === 'poem' && (
          <FullPoemReader
            nodes={STANZA_NODES}
            onSelectNode={handleSelectNode}
          />
        )}

        {activeTab === 'quiz' && (
          <RevisionQuiz />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardStudy />
        )}
      </main>

      {/* Node Detail Deep Analysis Modal */}
      <NodeDetailModal
        node={selectedNodeModal}
        onClose={() => setSelectedNodeModal(null)}
        onNavigateNode={handleNavigateModalNode}
        totalNodes={STANZA_NODES.length}
      />

      {/* Overarching Analysis Sidebar Drawer */}
      <SidebarAnalysis
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-[#090c10] border-t border-slate-800/80 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            The Interactive Stanza Map for Gillian Clarke's poem <em className="text-slate-300">Lament</em> (1991).
          </p>
          <p className="text-[11px] text-slate-600">
            Educational revision tool for Secondary English Literature students.
          </p>
        </div>
      </footer>
    </div>
  );
}
