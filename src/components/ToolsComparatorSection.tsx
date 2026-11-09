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
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B4B82] uppercase font-mono mb-1">
            <Scale className="w-3.5 h-3.5 text-[#0B4B82]" />
            <span>Quadro Comparativo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#08203E] tracking-tight font-serif-display">
            Comparação Funcional
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Quadro comparativo para apoiar a seleção fundamentada de ferramentas com base nas funcionalidades descritas pelos fornecedores e em cenários de utilização pedagógica pelo docente.
          </p>
        </div>

        {/* Quick Filter Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterPromptVideo(!filterPromptVideo)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterPromptVideo
                ? 'bg-[#FACC15] text-[#071526] border-transparent font-bold shadow-xs'
                : 'bg-white text-[#08203E] border-[#DCE8F6] hover:bg-[#F0F5FA]'
            }`}
          >
            {filterPromptVideo ? '✓ Texto-para-Vídeo' : '+ Texto-para-Vídeo'}
          </button>

          <button
            onClick={() => setFilterAvatar(!filterAvatar)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterAvatar
                ? 'bg-[#FACC15] text-[#071526] border-transparent font-bold shadow-xs'
                : 'bg-white text-[#08203E] border-[#DCE8F6] hover:bg-[#F0F5FA]'
            }`}
          >
            {filterAvatar ? '✓ Com Avatares' : '+ Com Avatares'}
          </button>

          <button
            onClick={() => setFilterEditing(!filterEditing)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              filterEditing
                ? 'bg-[#FACC15] text-[#071526] border-transparent font-bold shadow-xs'
                : 'bg-white text-[#08203E] border-[#DCE8F6] hover:bg-[#F0F5FA]'
            }`}
          >
            {filterEditing ? '✓ Edição / Legendas' : '+ Edição / Legendas'}
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl border border-[#DCE8F6] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#EAF3FD] text-[#0B4B82] font-semibold border-b border-[#DCE8F6] text-[11px] font-mono uppercase tracking-wider">
                <th className="p-4 sm:p-5 min-w-[180px] text-[#08203E]">Ferramenta</th>
                <th className="p-4 sm:p-5 min-w-[150px]">Categoria</th>
                <th className="p-4 sm:p-5 min-w-[280px]">Funcionalidades descritas</th>
                <th className="p-4 sm:p-5 min-w-[280px]">Utilização pedagógica possível</th>
                <th className="p-4 sm:p-5 text-center min-w-[80px]">Endereço oficial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EEF2F6]">
              {filtered.map((tool, idx) => (
                <tr 
                  key={tool.id} 
                  className={`hover:bg-[#F0F5FA] transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
                  }`}
                >
                  <td className="p-4 sm:p-5 font-bold text-[#08203E] align-top">
                    <div className="text-sm font-serif-display text-[#08203E]">{tool.name}</div>
                    {tool.badge && (
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#FEF8E7] text-[#92400E] border border-[#FDE5B5]">
                        {tool.badge}
                      </span>
                    )}
                  </td>

                  <td className="p-4 sm:p-5 text-[#475569] align-top font-medium">
                    {tool.category}
                  </td>

                  <td className="p-4 sm:p-5 text-[#334155] align-top leading-relaxed">
                    <ul className="space-y-1">
                      {tool.keyFeatures.map((feat, fi) => (
                        <li key={fi} className="flex items-start gap-1.5">
                          <span className="text-[#0284C7] font-bold shrink-0">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td className="p-4 sm:p-5 text-[#334155] align-top leading-relaxed">
                    <ul className="space-y-1">
                      {tool.pedagogicalUseCases.map((useCase, ui) => (
                        <li key={ui} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold shrink-0">•</span>
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
                      className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#F0F5FA] hover:bg-[#FACC15] text-[#08203E] hover:text-[#071526] transition-colors border border-[#DCE8F6]"
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
