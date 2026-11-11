import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Sparkle,
  Target,
  Video,
  Info,
  ShieldCheck,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';
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
      setCopiedId(prompt.id);
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.85 }
      });
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch {
      // Fallback
      setCopiedId(prompt.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filteredPrompts = EDUCATIONAL_PROMPTS.filter(p => {
    const matches = matchesSearch(activeSearch, [
      p.title,
      p.discipline,
      p.gradeLevel,
      p.creationType,
      p.recommendedTool,
      p.pedagogicalObjective,
      p.promptText,
      p.validationNote || ''
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
            Explore exemplos de prompts prontos a utilizar para criar vídeos com Inteligência Artificial em diferentes disciplinas e níveis de ensino. Escolha um exemplo, selecione a ferramenta indicada e copie o prompt para experimentar.
          </p>
        </div>

        {/* Nota breve sobre as ferramentas gratuitas */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#DCE8F6] text-xs text-[#334155] leading-relaxed space-y-2.5">
          <div className="flex items-center gap-2 font-bold text-[#08203E] uppercase font-mono text-[11px]">
            <Info className="w-4 h-4 text-[#0284C7] shrink-0" />
            <span>Nota breve sobre as ferramentas gratuitas (para experimentar sem subscrição):</span>
          </div>

          <ul className="space-y-1.5 pl-1 text-[#475569]">
            <li>
              • <strong>PixVerse:</strong> plano Basic gratuito, com 60 créditos iniciais e 30 créditos diários para utilizadores não subscritores. Cada geração consome 20, 40 ou 60 créditos, conforme as definições. A exportação gratuita tem marca de água e resolução máxima de 540p.
            </li>
            <li>
              • <strong>Kling AI:</strong> disponibiliza créditos promocionais gratuitos a novos utilizadores; quantidade e validade variáveis.
            </li>
            <li>
              • <strong>Vidu:</strong> disponibiliza créditos de experimentação no registo e créditos adicionais por acesso diário; quantidades não garantidas.
            </li>
            <li>
              • <strong>Hailuo AI:</strong> disponibiliza um pacote único de créditos de boas-vindas, com validade de três dias. As exportações gratuitas incluem marca de água.
            </li>
            <li>
              • <strong>HeyGen:</strong> plano gratuito com uma quota de 1 a 3 vídeos, conforme a região, até um minuto e 720p. Não utiliza créditos no plano gratuito.
            </li>
          </ul>

          <p className="text-[11px] text-[#64748B] pt-1 border-t border-[#E2E8F0] italic">
            Estas condições devem ser apresentadas como informação sujeita a alteração, confirmada em 10/11/2026. Não recomendar Google Veo como ferramenta de experimentação gratuita sem subscrição.
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
              className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-7 shadow-xs hover:border-[#38BDF8] hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                {/* 1. Título do Prompt */}
                <div>
                  <h3 className="text-lg font-bold text-[#08203E] leading-snug font-serif-display group-hover:text-[#0284C7] transition-colors">
                    {prompt.title}
                  </h3>

                  {/* 2. Disciplina e Ano de Escolaridade */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] font-medium mt-1.5">
                    <span className="font-semibold text-[#0B4B82] bg-[#EAF3FD] px-2.5 py-0.5 rounded-md border border-[#CEE2F7]">
                      {prompt.discipline}
                    </span>
                    <span className="text-slate-600 font-medium">
                      Ano: {prompt.gradeLevel}
                    </span>
                  </div>
                </div>

                {/* 3. Tipo de Criação e Ferramenta Recomendada */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 text-xs">
                  <div className="text-[#334155] leading-relaxed">
                    <strong>Tipo de criação:</strong> {prompt.creationType}
                  </div>
                  <div className="text-[#0B4B82] font-medium flex items-start gap-1.5 pt-0.5">
                    <Video className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                    <span><strong>Ferramenta recomendada:</strong> {prompt.recommendedTool}</span>
                  </div>
                </div>

                {/* 4. Objetivo (numa única frase) */}
                <div className="p-3.5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-xs space-y-1">
                  <div className="font-bold text-[#1E3A8A] flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <Target className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span>Objetivo:</span>
                  </div>
                  <p className="text-[#1E40AF] leading-relaxed font-medium">
                    {prompt.pedagogicalObjective}
                  </p>
                </div>

                {/* 5. Prompt Integral para Copiar */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-[#64748B] uppercase font-mono tracking-wider">
                    Prompt Integral:
                  </span>
                  <div className="p-4 rounded-2xl bg-[#041D3A] text-cyan-100 font-mono text-xs leading-relaxed border border-[#0E2C52] whitespace-pre-wrap selection:bg-[#FACC15] selection:text-[#041D3A]">
                    {prompt.promptText}
                  </div>
                </div>

                {/* 6. Nota de Validação (apenas quando necessária) */}
                {prompt.validationNote && (
                  <div className="p-3.5 rounded-2xl bg-[#FEF8E7] border border-[#FDE5B5] text-xs space-y-1">
                    <div className="font-bold text-[#92400E] flex items-center gap-1.5 font-mono text-[11px] uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
                      <span>Nota de Validação:</span>
                    </div>
                    <p className="text-[#78350F] leading-relaxed">
                      {prompt.validationNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Botão Copiar Prompt */}
              <div className="pt-3 border-t border-[#EEF2F6] flex items-center justify-end">
                <button
                  onClick={() => handleCopy(prompt)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    copiedId === prompt.id
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'bg-[#FACC15] hover:bg-amber-300 text-[#041D3A] font-bold'
                  }`}
                >
                  {copiedId === prompt.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#041D3A]" />
                      <span>Copiar Prompt</span>
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
