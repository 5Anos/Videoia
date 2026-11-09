import React from 'react';
import { Search, Menu, User, Sparkles } from 'lucide-react';

interface TopNavProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenMobileMenu: () => void;
  onOpenPromptGenerator: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenMobileMenu,
  onOpenPromptGenerator
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#071526]/90 backdrop-blur-md border-b border-[#102a45]/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Left: Mobile Menu Toggle & Title preview */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 lg:hidden cursor-pointer"
          title="Abrir navegação"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:block lg:hidden">
          <span className="font-bold text-white text-sm font-serif-display">
            IA na Educação
          </span>
        </div>
      </div>

      {/* Center: Clean Pill Search Input (As in Reference Mockup) */}
      <div className="flex-1 max-w-md relative">
        <input
          type="text"
          placeholder="Pesquisar ferramentas e prompts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-white/95 text-stone-900 placeholder:text-stone-400 rounded-full border-0 focus:outline-hidden focus:ring-2 focus:ring-cyan-400 shadow-md transition-all"
        />
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-2.5 pointer-events-none" />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-700 font-bold px-1 cursor-pointer"
            title="Limpar pesquisa"
          >
            ✕
          </button>
        )}
      </div>

      {/* Right: Quick Actions & Profile */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onOpenPromptGenerator}
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs shadow-md shadow-amber-400/20 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Assistente IA</span>
        </button>

        <div className="w-9 h-9 rounded-full bg-[#0D243B] border border-cyan-500/40 flex items-center justify-center text-cyan-300 text-xs font-bold font-mono shadow-xs" title="Carla Oliveira (2026)">
          CO
        </div>
      </div>
    </header>
  );
};
