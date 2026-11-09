import React, { useState } from 'react';
import { 
  ExternalLink, 
  Scale
} from 'lucide-react';
import { TOOLS_CATALOG } from '../data/presentationData';

export const ToolsComparatorSection: React.FC = () => {
  const [filterAvatar, setFilterAvatar] = useState(false);
  const [filterPromptVideo, setFilterPromptVideo] = useState(false);
  const [filterEditing, setFilterEditing] = useState(false);

  const filtered = TOOLS_CATALOG.filter(tool => {
    if (filterAvatar && !tool.category.toLowerCase().includes('avatar') && !tool.keyFeatures.some(f => f.toLowerCase().includes('avatar'))) {
      return false;
    }
    if (filterPromptVideo && !tool.inputTypes.includes('Prompt de Texto') && !tool.keyFeatures.some(f => f.toLowerCase().includes('prompt'))) {
      return false;
    }
    if (filterEditing && !tool.category.toLowerCase().includes('edição') && !tool.keyFeatures.some(f => f.toLowerCase().includes('legend'))) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-cyan-400 uppercase font-mono mb-1">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            <span>Quadro Comparativo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-serif-display">
            Comparação Funcional
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Quadro comparativo para apoiar a seleção fundamentada de ferramentas com base nas funcionalidades descritas pelos fornecedores e em cenários de utilização pedagógica pelo docente.
          </p>
        </div>

        {/* Quick Filter Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterPromptVideo(!filterPromptVideo)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterPromptVideo
                ? 'bg-[#FACC15] text-[#071526] border-transparent font-bold shadow-md shadow-amber-400/20'
                : 'bg-[#07172A] text-slate-300 border-[#143657] hover:border-cyan-500/40 hover:text-white'
            }`}
          >
            {filterPromptVideo ? '✓ Texto-para-Vídeo' : '+ Texto-para-Vídeo'}
          </button>

          <button
            onClick={() => setFilterAvatar(!filterAvatar)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterAvatar
                ? 'bg-[#FACC15] text-[#071526] border-transparent font-bold shadow-md shadow-amber-400/20'
                : 'bg-[#07172A] text-slate-300 border-[#143657] hover:border-cyan-500/40 hover:text-white'
            }`}
          >
            {filterAvatar ? '✓ Com Avatares' : '+ Com Avatares'}
          </button>

          <button
            onClick={() => setFilterEditing(!filterEditing)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterEditing
                ? 'bg-[#FACC15] text-[#071526] border-transparent font-bold shadow-md shadow-amber-400/20'
                : 'bg-[#07172A] text-slate-300 border-[#143657] hover:border-cyan-500/40 hover:text-white'
            }`}
          >
            {filterEditing ? '✓ Edição / Legendas' : '+ Edição / Legendas'}
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-[#0B1E33] rounded-3xl border border-[#143657] shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#07172A] text-cyan-300 font-semibold border-b border-[#143657] text-[11px] font-mono uppercase tracking-wider">
                <th className="p-4 sm:p-5 min-w-[180px] text-white">Ferramenta</th>
                <th className="p-4 sm:p-5 min-w-[150px]">Categoria</th>
                <th className="p-4 sm:p-5 min-w-[280px]">Funcionalidades descritas</th>
                <th className="p-4 sm:p-5 min-w-[280px]">Utilização pedagógica possível</th>
                <th className="p-4 sm:p-5 text-center min-w-[80px]">Endereço oficial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#143657]">
              {filtered.map((tool, idx) => (
                <tr 
                  key={tool.id} 
                  className={`hover:bg-[#0E243A] transition-colors ${
                    idx % 2 === 0 ? 'bg-[#0B1E33]' : 'bg-[#07172A]/50'
                  }`}
                >
                  <td className="p-4 sm:p-5 font-bold text-white align-top">
                    <div className="text-sm font-serif-display text-white">{tool.name}</div>
                    {tool.badge && (
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#07172A] text-amber-300 border border-amber-500/30">
                        {tool.badge}
                      </span>
                    )}
                  </td>

                  <td className="p-4 sm:p-5 text-slate-300 align-top font-medium">
                    {tool.category}
                  </td>

                  <td className="p-4 sm:p-5 text-slate-200 align-top leading-relaxed">
                    <ul className="space-y-1">
                      {tool.keyFeatures.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-1.5">
                          <span className="text-cyan-400 font-bold shrink-0">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td className="p-4 sm:p-5 text-slate-200 align-top leading-relaxed">
                    <ul className="space-y-1">
                      {tool.pedagogicalUseCases.map((useCase, ui) => (
                        <li key={ui} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold shrink-0">•</span>
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td className="p-4 sm:p-5 text-center align-top">
                    <a
                      href={tool.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#07172A] hover:bg-[#FACC15] text-cyan-400 hover:text-[#071526] transition-colors border border-[#143657]"
                      title={`Aceder a ${tool.name}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
