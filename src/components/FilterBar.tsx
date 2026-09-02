import React from 'react';
import { Filter, Search, RotateCcw, Tag } from 'lucide-react';
import { NodeCategory } from '../types';

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedTechnique: string;
  setSelectedTechnique: (tech: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onReset: () => void;
  allTechniques: string[];
}

const CATEGORIES: { label: string; value: string; color: string }[] = [
  { label: 'All Stanzas', value: 'ALL', color: 'border-slate-600 bg-slate-800 text-slate-200' },
  { label: 'Marine Life (Stanzas 1-3)', value: 'Marine', color: 'border-teal-500/40 bg-teal-950/60 text-teal-300' },
  { label: 'Shoreline & Human Impact (Stanzas 3-4)', value: 'Shoreline', color: 'border-cyan-500/40 bg-cyan-950/60 text-cyan-300' },
  { label: 'Environmental Trauma (Stanzas 4 & 6)', value: 'Environmental Trauma', color: 'border-emerald-500/40 bg-emerald-950/60 text-emerald-300' },
  { label: 'Human Cost / War (Stanzas 5 & 7)', value: 'Human Cost / War', color: 'border-amber-500/40 bg-amber-950/60 text-amber-300' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedTechnique,
  setSelectedTechnique,
  searchQuery,
  setSearchQuery,
  onReset,
  allTechniques,
}) => {
  const isFiltered = selectedCategory !== 'ALL' || selectedTechnique !== 'ALL' || searchQuery.trim() !== '';

  return (
    <div className="bg-[#161b22]/90 backdrop-blur-md border-b border-slate-800 p-4 sm:px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5 text-teal-400" /> Filter Theme:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'ring-2 ring-teal-400/80 bg-teal-950 border-teal-400 text-teal-200 shadow-md shadow-teal-950/80'
                    : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
                id={`filter-category-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Technique Dropdown & Search Bar */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Technique Select */}
          <div className="relative flex-1 sm:flex-initial min-w-[170px]">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
              <Tag className="w-3.5 h-3.5 text-teal-400" />
            </div>
            <select
              value={selectedTechnique}
              onChange={(e) => setSelectedTechnique(e.target.value)}
              className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 appearance-none cursor-pointer"
              id="technique-filter-select"
            >
              <option value="ALL">All Poetic Devices</option>
              {allTechniques.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 sm:flex-initial min-w-[200px]">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search quotes, terms, analysis..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
              id="search-input"
            />
          </div>

          {/* Reset Filters */}
          {isFiltered && (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 border border-rose-700/50 text-rose-300 text-xs font-medium transition-colors"
              title="Reset all search & filters"
              id="reset-filter-button"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
