import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Compass, 
  Layers, 
  FileText, 
  CheckSquare, 
  Wand2, 
  SlidersHorizontal,
  Printer,
  ShieldCheck,
  Search
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenPromptGenerator: () => void;
  onPrintGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenPromptGenerator,
  onPrintGuide
}) => {
  const tabs = [
    { id: 'overview', label: 'Visão Pedagógica', icon: Compass },
    { id: 'advantages', label: '5 Vantagens Pedagógicas', icon: Layers },
    { id: 'tools', label: 'Catálogo de Ferramentas IA', icon: Sparkles },
    { id: 'prompts', label: 'Banco de Prompts Didáticos', icon: BookOpen },
    { id: 'activities', label: 'Atividades em Sala de Aula', icon: CheckSquare },
    { id: 'comparator', label: 'Comparador & RGPD', icon: SlidersHorizontal },
    { id: 'bibliography', label: 'Bibliografia & Limites da Ciência', icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs">
      {/* Top Academic & Professional Context Strip */}
      <div className="bg-[#181513] text-stone-300 py-2 px-4 sm:px-6 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-stone-100 tracking-wide font-mono text-[11px] uppercase text-amber-300">
              Formação de Professores · Módulo 3
            </span>
            <span className="text-stone-600">/</span>
            <span className="text-stone-300 hidden md:inline font-medium">
              Carla Oliveira (2026)
            </span>
            <span className="text-stone-600 hidden md:inline">/</span>
            <span className="text-stone-400 hidden sm:inline text-[11px]">
              Recursos Práticos para o Ensino Básico e Secundário
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onPrintGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition-all text-xs cursor-pointer border border-stone-700 font-medium"
              title="Imprimir ou exportar guia formatado em PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Imprimir Ficha Pedagógica (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar with Brand Wordmark, Search & Generator Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-3.5 w-full md:w-auto">
          <div className="w-10 h-10 rounded-xl bg-[#C05638] text-white flex items-center justify-center font-serif-display font-bold text-lg shadow-sm shrink-0">
            IA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight font-serif-display leading-none">
                Vídeo com Inteligência Artificial
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-200/70 text-stone-700 font-semibold">
                Educação
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-1 font-normal">
              Rigor pedagógico, Teoria de Mayer e salvaguardas éticas para a sala de aula
            </p>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <input
              type="text"
              placeholder="Pesquisar ferramentas, prompts, atividades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-stone-200 rounded-xl text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-[#C05638]/20 focus:border-[#C05638] transition-all placeholder:text-stone-400 shadow-2xs"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-xs text-stone-400 hover:text-stone-700 font-bold px-1"
                title="Limpar pesquisa"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={onOpenPromptGenerator}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-xl bg-[#C05638] hover:bg-[#A8492E] text-white shadow-md shadow-[#C05638]/20 transition-all shrink-0 cursor-pointer"
          >
            <Wand2 className="w-4 h-4 text-amber-200" />
            <span>Gerador de Prompts</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav aria-label="Navegação da plataforma" className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto scrollbar-none flex gap-1 border-t border-stone-200/60">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                isActive
                  ? 'border-[#C05638] text-[#C05638] bg-[#C05638]/5'
                  : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#C05638]' : 'text-stone-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};
