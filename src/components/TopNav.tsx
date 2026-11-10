import React from 'react';
import { Search, Menu } from 'lucide-react';

interface TopNavProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenMobileMenu: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenMobileMenu
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#F0F5FA]/95 backdrop-blur-md border-b border-[#DCE8F6] px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
      {/* Left: Mobile Menu Toggle & Title preview */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="p-2 rounded-xl text-slate-700 hover:text-[#041D3A] hover:bg-white lg:hidden cursor-pointer shadow-xs border border-slate-200"
          title="Abrir navegação"
          aria-label="Abrir menu lateral"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:block lg:hidden">
          <span className="font-bold text-[#041D3A] text-sm font-serif-display">
            IA na Educação
          </span>
        </div>
      </div>

      {/* Center: Clean Pill Search Input (As in Reference Mockup) */}
      <div className="flex-1 max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="Pesquisar ferramentas e prompts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white text-slate-800 placeholder:text-slate-400 rounded-full border border-[#DCE8F6] shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#0966C2] transition-all"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-2.5 text-xs text-slate-400 hover:text-slate-700 font-bold p-1 cursor-pointer"
            title="Limpar pesquisa"
            aria-label="Limpar pesquisa"
          >
            ✕
          </button>
        )}
      </div>

      {/* Right: Profile Avatar */}
      <div className="flex items-center gap-3 shrink-0">
        <div 
          className="w-9 h-9 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[#041D3A] text-xs font-bold font-mono shadow-xs" 
          title="Carla Oliveira (2026)"
        >
          CO
        </div>
      </div>
    </header>
  );
};
