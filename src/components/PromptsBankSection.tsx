import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Sparkles, 
  Film, 
  Target,
  Sparkle,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EDUCATIONAL_PROMPTS, EducationalPrompt } from '../data/presentationData';
import { matchesSearch } from '../utils/pedagogyLogic';

interface PromptsBankSectionProps {
  searchQuery?: string;
}

export const PromptsBankSection: React.FC<PromptsBankSectionProps> = ({ 
  searchQuery = ''
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copyErrorId, setCopyErrorId] = useState<number | null>(null);

  const disciplines = [
    { id: 'all', label: 'Todas as Disciplinas' },
    { id: 'ciencias', label: 'Ciências & Biologia' },
    { id: 'matematica', label: 'Matemática' },
    { id: 'historia', label: 'História & Cidadania' },
    { id: 'geografia', label: 'Geografia & Meio Ambiente' },
    { id: 'artes', label: 'Educação Visual & Artes' },
  ];

  const handleCopy = async (prompt: EducationalPrompt) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(prompt.promptText);
        setCopyErrorId(null);
        setCopiedId(prompt.id);
        confetti({
          particleCount: 30,
          spread: 55,
          origin: { y: 0.85 }
        });
        setTimeout(() => {
          setCopiedId(null);
        }, 2200);
      } else {
        throw new Error('Clipboard API não disponível');
      }
    } catch {
      setCopyErrorId(prompt.id);
      setTimeout(() => {
        setCopyErrorId(null);
      }, 5000);
    }
  };

  const filteredPrompts = EDUCATIONAL_PROMPTS.filter(p => {
    const matches = matchesSearch(searchQuery, [
      p.title,
      p.discipline,
      p.category,
      p.promptText,
      p.pedagogicalObjective,
      p.recommendedTool
    ]);
    if (!matches) return false;

    if (selectedDiscipline === 'ciencias') {
      return p.discipline.toLowerCase().includes('ciência') || p.discipline.toLowerCase().includes('biologia');
    }
    if (selectedDiscipline === 'matematica') {
      return p.discipline.toLowerCase().includes('matemática');
    }
    if (selectedDiscipline === 'historia') {
      return p.discipline.toLowerCase().includes('história') || p.discipline.toLowerCase().includes('cidadania');
    }
    if (selectedDiscipline === 'geografia') {
      return p.discipline.toLowerCase().includes('geografia') || p.discipline.toLowerCase().includes('natureza') || p.discipline.toLowerCase().includes('meio');
    }
    if (selectedDiscipline === 'artes') {
      return p.discipline.toLowerCase().includes('visual') || p.discipline.toLowerCase().includes('arte');
    }

    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0B4B82] uppercase font-mono mb-1">
              <Sparkle className="w-3.5 h-3.5 text-[#0B4B82]" />
              <span>Banco de Prompts Didáticos · Para adaptação pelo docente</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08203E] tracking-tight font-serif-display">
              Prompts Estruturados para Recursos Visuais
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
              Explora onze propostas de criação audiovisual para diferentes áreas disciplinares. Cada prompt foi estruturado para apoiar a preparação de recursos educativos, mas deve ser adaptado à ferramenta escolhida e validado pelo professor antes da sua utilização.
            </p>
          </div>

          {/* Filter Tabs */}
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
        </div>

        {/* Important Warning Note Required by Work Order Section 2 */}
        <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3 shadow-xs">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Importante: </span>
            <span>
              os resultados gerados por Inteligência Artificial podem conter erros científicos, históricos, matemáticos ou visuais. Os prompts não garantem a exatidão do resultado. Sempre que possível, utiliza imagens, diagramas ou fontes de referência previamente validados e compara o vídeo gerado com esses materiais.
            </span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="bg-white rounded-3xl border border-[#DCE8F6] p-6 sm:p-7 shadow-sm hover:border-[#38BDF8] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] font-medium mb-1">
                    <span className="font-bold text-[#0B4B82]">{prompt.discipline}</span>
                    <span>·</span>
                    <span className="font-mono text-[11px] text-[#92400E] bg-[#FEF8E7] px-2 py-0.5 rounded border border-[#FDE5B5]">{prompt.gradeLevel}</span>
                    <span>·</span>
                    <span className="text-[#475569] font-medium">{prompt.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#08203E] leading-snug font-serif-display">
                    {prompt.title}
                  </h3>
                </div>

                <span className="w-8 h-8 rounded-xl bg-[#EAF3FD] text-[#0B4B82] text-xs font-mono font-bold flex items-center justify-center shrink-0 border border-[#CEE2F7]">
                  {prompt.id}
                </span>
              </div>

              {/* Pedagogical Objective, Curriculum Competence & Visual Style */}
              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155] space-y-1">
                  <div className="font-bold text-[#08203E] flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <Target className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    <span>Objetivo de Aprendizagem:</span>
                  </div>
                  <p className="leading-relaxed text-[#475569]">{prompt.pedagogicalObjective}</p>
                </div>

                {prompt.curriculumCompetence && (
                  <div className="text-[11px] text-[#334155] pl-1 leading-normal">
                    <strong className="text-[#0B4B82]">Competência Curricular:</strong> {prompt.curriculumCompetence}
                  </div>
                )}

                <div className="flex items-center gap-2 text-[#475569] text-[11px] pl-1">
                  <Film className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
                  <span><strong>Estilo Visual:</strong> {prompt.visualStyle}</span>
                </div>

                <div className="flex items-center gap-2 text-[#475569] text-[11px] pl-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Ferramentas sugeridas para exploração:</strong> {prompt.recommendedTool}</span>
                </div>

                {prompt.ethicalConsideration && (
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed">
                    <strong>Atenção Didática:</strong> {prompt.ethicalConsideration}
                  </div>
                )}
              </div>

              {/* The Prompt Box */}
              <div className="relative group pt-1">
                <div className="p-4 rounded-2xl bg-[#041D3A] text-[#FDE68A] font-mono text-xs leading-relaxed border border-[#041D3A] selection:bg-cyan-500/30 whitespace-pre-line">
                  {prompt.promptText}
                </div>
              </div>

              {copyErrorId === prompt.id && (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-[11px] text-amber-900 leading-snug">
                  Não foi possível copiar automaticamente. Selecione o texto e utilize a opção de copiar do navegador.
                </div>
              )}
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-[#EEF2F6] flex items-center justify-end">
              <button
                onClick={() => handleCopy(prompt)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  copiedId === prompt.id
                    ? 'bg-emerald-600 text-white font-bold shadow-xs'
                    : 'bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] font-bold shadow-xs'
                }`}
              >
                {copiedId === prompt.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Prompt</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
