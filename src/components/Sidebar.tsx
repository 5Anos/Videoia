import React from 'react';
import { 
  Compass, 
  Layers, 
  Sparkles, 
  BookOpen, 
  CheckSquare, 
  Scale, 
  FileText, 
  Wand2, 
  Film,
  Video,
  X
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPromptGenerator: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onOpenPromptGenerator,
  isMobileOpen,
  setIsMobileOpen
}) => {
  const navItems = [
    { id: 'overview', label: 'Visão Pedagógica', icon: Compass },
    { id: 'advantages', label: '5 Vantagens', icon: Layers },
    { id: 'tools', label: 'Ferramentas de Vídeo', icon: Video },
    { id: 'prompts', label: 'Banco de Prompts', icon: BookOpen },
    { id: 'activities', label: 'Atividades na Aula', icon: CheckSquare },
    { id: 'comparator', label: 'Comparador Funcional', icon: Scale },
    { id: 'bibliography', label: 'Bibliografia & Limites', icon: FileText },
  ];

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#071526] border-r border-[#102a45] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top: Brand Header */}
        <div className="p-5 border-b border-[#102a45]/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-400 to-amber-400 p-0.5 shadow-lg shadow-cyan-500/20 shrink-0">
              <div className="w-full h-full bg-[#071526] rounded-[10px] flex items-center justify-center">
                <Film className="w-5 h-5 text-amber-300" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-white text-base tracking-tight font-serif-display leading-tight">
                IA na Educação
              </h1>
              <span className="text-[11px] font-mono font-semibold text-cyan-400 tracking-wide uppercase">
                Vídeo Pedagógico
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 lg:hidden cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Middle: Navigation Items */}
        <nav aria-label="Navegação Principal" className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                  isActive
                    ? 'bg-[#FACC15] text-[#071526] font-bold shadow-lg shadow-[#FACC15]/20'
                    : 'text-stone-300 hover:text-white hover:bg-[#0E243A]'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#071526]' : 'text-cyan-400'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom: Quick Assistant Button & Ambient Cyan Waves */}
        <div className="p-4 border-t border-[#102a45]/60 relative overflow-hidden bg-gradient-to-t from-[#050e18] to-transparent">
          {/* Decorative Cyan Wave Graphic */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-cyan-500/10 blur-xl pointer-events-none" />

          <button
            onClick={onOpenPromptGenerator}
            className="w-full relative z-10 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#0B3B48] hover:bg-[#0E4B5C] border border-cyan-400/40 text-cyan-200 hover:text-white text-xs font-bold transition-all shadow-md shadow-cyan-950/50 cursor-pointer"
          >
            <Wand2 className="w-4 h-4 text-amber-300" />
            <span>Gerador de Prompts</span>
          </button>
        </div>
      </aside>
    </>
  );
};
