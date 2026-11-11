import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkle
} from 'lucide-react';
import { BIBLIOGRAPHY } from '../data/presentationData';

export const BibliographySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Referências' },
    { id: 'Teoria Cognitiva & Multimédia', label: 'Teoria Cognitiva & Multimédia' },
    { id: 'Políticas & Ética de IA', label: 'Políticas & Regulamentação de IA' },
    { id: 'Taxonomia de Aprendizagem', label: 'Taxonomia & Didática' },
    { id: 'Documentação Técnica Oficial', label: 'Documentação Técnica Oficial' }
  ];

  const filteredBibliography = BIBLIOGRAPHY.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B4B82] uppercase font-mono mb-1">
            <Sparkle className="w-3.5 h-3.5 text-[#0B4B82]" />
            <span>Fundamentação Científica & Rigor Académico</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08203E] tracking-tight font-serif-display">
            Bibliografia APA (7.ª edição)
          </h1>
          <p className="text-[#475569] text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Fontes científicas em formato APA (7.ª edição) que sustentam as orientações pedagógicas desta formação, 
            diretrizes da UNESCO e OCDE e legislação europeia (RGPD e AI Act).
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 border-b border-[#DCE8F6]">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#FACC15] text-[#071526] font-bold shadow-xs'
                : 'bg-white text-[#475569] hover:text-[#08203E] border border-[#DCE8F6] hover:bg-[#F0F5FA]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Bibliography Cards (APA 7th Format) */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredBibliography.map((bib, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-[#DCE8F6] shadow-sm hover:border-[#38BDF8] hover:shadow-md transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#0B4B82] uppercase tracking-wider font-mono">
                  {bib.category}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FEF8E7] text-[#92400E] border border-[#FDE5B5]">
                  {bib.author} ({bib.year})
                </span>
              </div>

              {/* APA 7th Formal Citation */}
              <div className="text-xs sm:text-sm font-semibold text-[#08203E] leading-snug font-sans pl-3 border-l-2 border-[#0284C7]">
                {bib.citation}
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] leading-relaxed space-y-1">
                <div className="font-bold text-[#08203E] flex items-center gap-1.5 font-mono text-[11px] uppercase">
                  <GraduationCap className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  <span>Relevância Pedagógica:</span>
                </div>
                <p className="text-[#475569]">{bib.relevanceToEducation}</p>
              </div>

              {bib.criticalAnalysis && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 leading-relaxed">
                  <strong>Análise do Especialista:</strong> {bib.criticalAnalysis}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
