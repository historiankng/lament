export type NodeCategory = 'Marine' | 'Shoreline' | 'Environmental Trauma' | 'Human Cost / War';

export interface LiteraryDevice {
  name: string;
  quotePhrase: string;
  explanation: string;
}

export interface StanzaNode {
  id: number;
  stanzaNumber: number;
  title: string;
  quote: string;
  fullStanzaText: string;
  category: NodeCategory;
  zoneId: 1 | 2 | 3; // 1: Sea & Marine, 2: Shoreline & Human Impact, 3: War, Desert & Horizon
  xPos: number; // percentage for node positioning in map
  yPos: number; // percentage for node positioning in map
  techniques: string[];
  literaryDevices: LiteraryDevice[];
  analysis: string;
  context: string;
  symbolism: string[];
  keyVocabulary: { word: string; definition: string }[];
  essayPrompt: string;
}

export interface LiteraryTerm {
  term: string;
  category: 'Structure' | 'Device' | 'Theme' | 'Tone';
  definition: string;
  exampleFromPoem: string;
}

export interface QuizQuestion {
  id: number;
  stanzaNumber?: number;
  question: string;
  options: string[];
  correctAnswer: number; // index 0-3
  explanation: string;
  techniqueTested: string;
}

export interface Flashcard {
  id: number;
  front: string;
  back: string;
  category: string;
  stanzaNumber: number;
}
