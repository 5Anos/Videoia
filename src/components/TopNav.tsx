import React from 'react';
import { Menu } from 'lucide-react';

interface TopNavProps {
  onOpenMobileMenu: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onOpenMobileMenu
}) => {
  return (
    <header className="lg:hidden sticky top-0 z-30 bg-[#F0F5FA]/95 backdrop-blur-md border-b border-[#DCE8F6] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="p-2 rounded-xl text-slate-700 hover:text-[#041D3A] hover:bg-white cursor-pointer shadow-xs border border-slate-200"
          title="Abrir navegação"
          aria-label="Abrir menu lateral"
        >
          <Menu className="w-5 h-5" />
        </button>

        <span className="font-bold text-[#041D3A] text-sm font-serif-display">
          IA na Educação · Vídeo Pedagógico
        </span>
      </div>
    </header>
  );
};
