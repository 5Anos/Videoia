import React from 'react';
import { 
  Home,
  Compass, 
  Layers, 
  Video, 
  MessageSquare, 
  CheckSquare, 
  FileText, 
  Film,
  X
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen
}) => {
  const navItems = [
    { id: 'home', label: 'Página Inicial', icon: Home },
    { id: 'overview', label: 'Visão Pedagógica', icon: Compass },
    { id: 'advantages', label: 'Aplicações', icon: Layers },
    { id: 'tools', label: 'Ferramentas de Vídeo', icon: Video },
    { id: 'prompts', label: 'Banco de Prompts', icon: MessageSquare },
    { id: 'activities', label: 'Atividades na Aula', icon: CheckSquare },
    { id: 'bibliography', label: 'Bibliografia', icon: FileText },
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
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#041D3A] border-r border-[#0E2C52] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top: Brand Header */}
        <div className="p-5 border-b border-[#0E2C52]/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-amber-400 p-0.5 shadow-md shadow-cyan-900/40 shrink-0">
              <div className="w-full h-full bg-[#041D3A] rounded-[10px] flex items-center justify-center">
                <Film className="w-5 h-5 text-amber-300" />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-white text-base tracking-tight leading-tight font-serif-display">
                IA na Educação
              </h1>
              <span className="text-[11px] font-mono font-bold text-cyan-400 tracking-wider uppercase block mt-0.5">
                VÍDEO PEDAGÓGICO
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 lg:hidden cursor-pointer"
            aria-label="Fechar menu lateral"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Middle: Navigation Items */}
        <nav aria-label="Navegação Principal" className="flex-1 px-3 py-5 space-y-1.5 overflow-y-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                  isActive
                    ? 'bg-[#FACC15] text-[#071526] font-bold shadow-md shadow-amber-400/20'
                    : 'text-slate-300 hover:text-white hover:bg-[#09284D]'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#071526]' : 'text-cyan-400'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Accent */}
        <div className="p-4 relative overflow-hidden bg-gradient-to-t from-[#021326] to-transparent">
          {/* Curved Cyan Wave / Film Strip Ambient Graphic */}
          <div className="absolute -bottom-10 -right-6 w-36 h-36 rounded-full bg-cyan-500/15 blur-xl pointer-events-none" />

          {/* Film Strip Border Accent */}
          <div className="pt-2 flex items-center justify-center gap-1 opacity-40 text-cyan-400">
            <span className="w-2 h-1 bg-cyan-400 rounded-xs" />
            <span className="w-2 h-1 bg-cyan-400 rounded-xs" />
            <span className="w-2 h-1 bg-cyan-400 rounded-xs" />
            <span className="w-2 h-1 bg-cyan-400 rounded-xs" />
            <span className="w-2 h-1 bg-cyan-400 rounded-xs" />
            <span className="w-2 h-1 bg-cyan-400 rounded-xs" />
          </div>
        </div>
      </aside>
    </>
  );
};
