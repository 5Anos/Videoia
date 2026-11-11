import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Sparkle,
  ShieldAlert,
  Search
} from 'lucide-react';
import { EDUCATIONAL_PROMPTS, EducationalPrompt } from '../data/presentationData';
import { matchesSearch } from '../utils/pedagogyLogic';

interface PromptsBankSectionProps {
  searchQuery?: string;
}

export const PromptsBankSection: React.FC<PromptsBankSectionProps> = ({ 
  searchQuery: externalSearchQuery = ''
}) => {
  const [internalSearch, setInternalSearch] = useState<string>('');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copyErrorId, setCopyErrorId] = useState<number | null>(null);

  const activeSearch = externalSearchQuery || internalSearch;

  const disciplines = [
    { id: 'all', label: 'Todas as Disciplinas' },
    { id: 'ciencias', label: 'Ciências & Biologia' },
    { id: 'historia', label: 'História & Cidadania' },
    { id: 'matematica', label: 'Matemática' },
    { id: 'portugues', label: 'Português' },
  ];

  const handleCopy = async (prompt: EducationalPrompt) => {
    try {
      await navigator.clipboard.writeText(prompt.promptText);
      setCopyErrorId(null);
      setCopiedId(prompt.id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch {
      setCopiedId(null);
      setCopyErrorId(prompt.id);
      setTimeout(() => {
        setCopyErrorId(null);
      }, 2500);
    }
  };

  const filteredPrompts = EDUCATIONAL_PROMPTS.filter(p => {
    const matches = matchesSearch(activeSearch, [
      p.title,
      p.discipline,
      p.gradeLevel,
      p.recommendedTool,
      p.requiredInput || '',
      p.toolSetup || '',
      p.promptText,
      p.validationNote || '',
      p.creationType,
      p.pedagogicalObjective
    ]);
    if (!matches) return false;

    if (selectedDiscipline === 'ciencias') {
      return (
        p.discipline.toLowerCase().includes('ciência') || 
        p.discipline.toLowerCase().includes('biologia') ||
        p.discipline.toLowerCase().includes('geologia') ||
        p.discipline.toLowerCase().includes('físico-química')
      );
    }
    if (selectedDiscipline === 'historia') {
      return (
        p.discipline.toLowerCase().includes('história') || 
        p.discipline.toLowerCase().includes('cidadania')
      );
    }
    if (selectedDiscipline === 'matematica') {
      return p.discipline.toLowerCase().includes('matemática');
    }
    if (selectedDiscipline === 'portugues') {
      return p.discipline.toLowerCase().includes('português');
    }

    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Cabeçalho / Introdução */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE8F6] shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B4B82] uppercase font-mono">
          <Sparkle className="w-3.5 h-3.5 text-[#0B4B82]" />
          <span>Recursos Pedagógicos Prontos a Utilizar</span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08203E] tracking-tight font-serif-display">
            Banco de Prompts para Vídeos com IA
          </h1>
          <p className="text-sm text-[#475569] mt-2 leading-relaxed max-w-4xl">
            Encontra prompts simples e prontos a utilizar para criar vídeos com Inteligência Artificial. Escolhe a proposta, utiliza a ferramenta indicada e copia o texto. Cada exemplo identifica o material necessário e inclui notas de validação quando importante.
          </p>
        </div>
      </div>

      {/* 2. Filtros e Campo de Pesquisa */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Filtros de Disciplina */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 shrink-0">
          {disciplines.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedDiscipline(d.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedDiscipline === d.id
                  ? 'bg-[#FACC15] text-[#071526] font-bold shadow-xs'
                  : 'bg-white border border-[#DCE8F6] text-[#475569] hover:text-[#08203E] hover:bg-[#F0F5FA]'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Barra de Pesquisa Rápida */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={internalSearch}
            onChange={(e) => setInternalSearch(e.target.value)}
            placeholder="Pesquisar nos 11 prompts..."
            className="w-full pl-9 pr-3.5 py-1.5 text-xs rounded-xl bg-white border border-[#DCE8F6] focus:outline-hidden focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] text-[#08203E] placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* 3. Grelha dos 11 Cartões */}
      {filteredPrompts.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-3xl border border-[#DCE8F6] text-xs text-slate-500">
          Nenhum prompt encontrado para a pesquisa ou disciplina selecionada.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-7 shadow-xs hover:border-[#38BDF8] hover:shadow-sm transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3.5">
                {/* 1. Título da proposta */}
                <div>
                  <h3 className="text-lg font-bold text-[#08203E] leading-snug font-serif-display group-hover:text-[#0284C7] transition-colors">
                    {prompt.title}
                  </h3>

                  {/* 2. Disciplina | Ano de escolaridade */}
                  <p className="text-xs text-[#64748B] font-medium mt-1">
                    {prompt.discipline} | {prompt.gradeLevel}
                  </p>
                </div>

                {/* 3. Ferramenta */}
                <div className="text-xs text-[#334155] leading-relaxed">
                  <strong>Ferramenta:</strong> {prompt.recommendedTool}
                </div>

                {/* 4. Material necessário (quando aplicável) */}
                {prompt.requiredInput && (
                  <div className="text-xs text-[#334155] leading-relaxed">
                    <strong>Material necessário:</strong> {prompt.requiredInput}
                  </div>
                )}

                {/* Preparação (quando aplicável) */}
                {prompt.toolSetup && (
                  <div className="text-xs text-[#334155] leading-relaxed">
                    <strong>Preparação:</strong> {prompt.toolSetup}
                  </div>
                )}

                {/* 5. Prompt / Texto para o campo Script */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs font-bold text-[#08203E] font-serif-display">
                    {prompt.promptLabel || 'Prompt'}
                  </h4>
                  <div className="p-4 rounded-2xl bg-[#041D3A] text-cyan-100 font-mono text-xs sm:text-sm leading-relaxed border border-[#0E2C52] whitespace-pre-wrap selection:bg-[#FACC15] selection:text-[#041D3A]">
                    {prompt.promptText}
                  </div>
                </div>

                {/* 6. Nota de validação (apenas quando necessária) */}
                {prompt.validationNote && (
                  <div className="p-3.5 rounded-2xl bg-[#FEF8E7] border border-[#FDE5B5] text-xs space-y-1">
                    <span className="font-bold text-[#92400E] font-mono text-[11px] uppercase block">
                      Nota:
                    </span>
                    <p className="text-[#78350F] leading-relaxed">
                      {prompt.validationNote}
                    </p>
                  </div>
                )}
              </div>

              {/* 7. Botão Copiar */}
              <div className="pt-3 border-t border-[#EEF2F6] flex items-center justify-end">
                <button
                  onClick={() => handleCopy(prompt)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    copiedId === prompt.id
                      ? 'bg-emerald-600 text-white font-bold'
                      : copyErrorId === prompt.id
                      ? 'bg-rose-600 text-white font-bold'
                      : 'bg-[#FACC15] hover:bg-amber-300 text-[#041D3A] font-bold'
                  }`}
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copiado!</span>
                    </>
                  ) : copyErrorId === prompt.id ? (
                    <>
                      <ShieldAlert className="w-3.5 h-3.5 text-white" />
                      <span>Não foi possível copiar</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#041D3A]" />
                      <span>{prompt.copyButtonLabel || 'Copiar prompt'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
