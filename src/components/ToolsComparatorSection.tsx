import React, { useState } from 'react';
import { 
  ExternalLink, 
  Scale, 
  AlertTriangle, 
  Check, 
  X,
  Info,
  Calendar,
  ShieldAlert
} from 'lucide-react';
import { TOOLS_CATALOG, FreeAccessType } from '../data/presentationData';
import { ToolLogo } from './ToolLogos';

export const ToolsComparatorSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'Todas as 16 Ferramentas' },
    { id: 'text-to-video', label: 'Texto / Imagem para Vídeo' },
    { id: 'video-editing', label: 'Edição de Vídeo' },
    { id: 'avatars', label: 'Avatares Virtuais' },
    { id: 'subtitles', label: 'Legendagem' },
    { id: 'screen-recording', label: 'Gravação de Ecrã' },
  ];

  const filteredTools = TOOLS_CATALOG.filter(tool => {
    if (activeFilter === 'text-to-video') {
      return tool.capabilityTags?.some(tag => tag === 'text-to-video' || tag === 'image-to-video');
    }
    if (activeFilter === 'video-editing') {
      return tool.capabilityTags?.includes('video-editing');
    }
    if (activeFilter === 'avatars') {
      return tool.capabilityTags?.includes('avatars');
    }
    if (activeFilter === 'subtitles') {
      return tool.capabilityTags?.includes('subtitles');
    }
    if (activeFilter === 'screen-recording') {
      return tool.capabilityTags?.includes('screen-recording');
    }
    return true;
  });

  const getAccessBadge = (accessType?: string) => {
    switch (accessType) {
      case 'free-editor':
      case 'completely-free':
        return { label: 'Editor Gratuito', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' };
      case 'education-eligibility':
        return { label: 'Gratuito para Educação', color: 'bg-blue-50 text-blue-800 border-blue-300' };
      case 'recurring-free-credits':
        return { label: 'Créditos Periódicos', color: 'bg-amber-50 text-amber-800 border-amber-300' };
      case 'limited-free-plan':
      case 'freemium':
        return { label: 'Plano Gratuito Limitado', color: 'bg-amber-50 text-amber-800 border-amber-300' };
      case 'one-time-free-trial':
      case 'free-trial':
        return { label: 'Período Experimental', color: 'bg-indigo-50 text-indigo-800 border-indigo-300' };
      case 'community-experimental':
        return { label: 'Comunitário / Aberto', color: 'bg-purple-50 text-purple-800 border-purple-300' };
      case 'paid-or-unconfirmed':
      case 'paid-only':
        return { label: 'Pago / Não Confirmado', color: 'bg-slate-100 text-slate-800 border-slate-300' };
      default:
        return { label: 'Gratuito com Limitações', color: 'bg-amber-50 text-amber-800 border-amber-300' };
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B4B82] uppercase font-mono mb-1">
            <Scale className="w-3.5 h-3.5 text-[#0B4B82]" />
            <span>Quadro Comparativo Factual · 16 Ferramentas de IA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#08203E] tracking-tight font-serif-display">
            Comparação Funcional de Ferramentas
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Quadro comparativo para apoiar a seleção fundamentada de ferramentas com base nas especificações verificadas, modalidades de acesso gratuito, limitações conhecidas e requisitos etários.
          </p>
        </div>

        {/* Structured Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                activeFilter === opt.id
                  ? 'bg-[#FACC15] text-[#071526] border-transparent font-bold shadow-xs'
                  : 'bg-white text-[#08203E] border-[#DCE8F6] hover:bg-[#F0F5FA]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mandatory Caution Notice Box (Section 7 & Section 6.3) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 flex items-start gap-3.5 shadow-xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <span className="font-bold font-mono text-xs uppercase tracking-wider text-amber-800 block">
            Aviso aos Professores sobre Modelos Comerciais e Preços
          </span>
          <p className="text-xs text-amber-900 leading-relaxed font-medium">
            Os limites, créditos, preços e funcionalidades podem mudar. Consulte sempre a informação oficial antes de preparar uma atividade. A presença de uma opção gratuita não significa que todas as funcionalidades estejam incluídas.
          </p>
          <p className="text-[11px] text-amber-800 leading-relaxed">
            Nota: este quadro não constitui uma avaliação jurídica ou técnica de conformidade com o RGPD. A utilização de cada ferramenta exige a consulta da política de privacidade, dos termos do serviço, das condições de tratamento de dados e das regras institucionais aplicáveis. A idade indicada corresponde às condições do fornecedor e deve ser confirmada na documentação oficial.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl border border-[#DCE8F6] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#EAF3FD] text-[#0B4B82] font-semibold border-b border-[#DCE8F6] text-[11px] font-mono uppercase tracking-wider">
                <th className="p-4 sm:p-5 min-w-[200px] text-[#08203E]">Ferramenta</th>
                <th className="p-4 sm:p-5 min-w-[170px]">Categoria & Funcionalidades</th>
                <th className="p-4 sm:p-5 min-w-[210px]">Tipo de Acesso & Quota</th>
                <th className="p-4 sm:p-5 min-w-[240px]">Limitações Conhecidas</th>
                <th className="p-4 sm:p-5 min-w-[150px]">Idade mínima indicada pelo fornecedor</th>
                <th className="p-4 sm:p-5 text-center min-w-[90px]">Página Oficial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EEF2F6]">
              {filteredTools.map((tool, idx) => {
                const accessBadge = getAccessBadge(tool.accessType);

                return (
                  <tr 
                    key={tool.id} 
                    className={`hover:bg-[#F0F5FA] transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'
                    }`}
                  >
                    {/* Tool Name & Logo */}
                    <td className="p-4 sm:p-5 align-top">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl shadow-2xs overflow-hidden shrink-0 ring-1 ring-[#DCE8F6] bg-slate-900 flex items-center justify-center">
                          <ToolLogo toolId={tool.id} size="sm" className="w-full h-full" />
                        </div>
                        <div>
                          <div className="font-bold text-sm font-serif-display text-[#08203E] leading-snug">
                            {tool.name}
                          </div>
                          {tool.badge && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#FEF8E7] text-[#92400E] border border-[#FDE5B5]">
                              {tool.badge}
                            </span>
                          )}
                          <div className="text-[10px] text-slate-500 font-mono mt-1">
                            Verificado: {tool.lastVerified || '09/11/2026'}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category & Key Features */}
                    <td className="p-4 sm:p-5 align-top">
                      <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-semibold mb-2">
                        {tool.category}
                      </span>
                      <ul className="space-y-1 text-[#334155] text-[11px]">
                        {tool.keyFeatures.slice(0, 3).map((feat, fi) => (
                          <li key={fi} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-[#0966C2] font-bold shrink-0">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* Access Type & Free Tier */}
                    <td className="p-4 sm:p-5 align-top space-y-2">
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${accessBadge.color}`}>
                        {accessBadge.label}
                      </span>
                      <p className="text-[#475569] text-xs leading-relaxed font-medium">
                        {tool.freeTierDetails}
                      </p>
                    </td>

                    {/* Limitations */}
                    <td className="p-4 sm:p-5 align-top text-[#475569]">
                      <ul className="space-y-1 text-[11px]">
                        {tool.limitations.map((lim, li) => (
                          <li key={li} className="flex items-start gap-1.5 text-slate-700 leading-snug">
                            <span className="text-amber-600 font-bold shrink-0">!</span>
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    {/* Idade mínima indicada pelo fornecedor */}
                    <td className="p-4 sm:p-5 align-top">
                      <div className="font-semibold text-[#08203E] text-xs">
                        {tool.factCheckStatus.minimumAge}
                      </div>
                    </td>

                    {/* Official External Links */}
                    <td className="p-4 sm:p-5 text-center align-top">
                      <div className="flex flex-col items-center gap-1.5">
                        <a
                          href={tool.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#F0F5FA] hover:bg-[#FACC15] text-[#08203E] hover:text-[#071526] transition-colors border border-[#DCE8F6] shadow-2xs"
                          title={`Aceder a ${tool.name}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        {tool.officialSources && tool.officialSources.length > 0 && (
                          <div className="flex flex-col items-center gap-0.5">
                            {tool.officialSources.slice(0, 2).map((source, sIdx) => (
                              <a
                                key={sIdx}
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-[#0966C2] hover:underline"
                              >
                                {source.label} ↗
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
