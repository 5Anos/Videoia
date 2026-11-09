import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Sparkles, 
  Film, 
  Wand2, 
  Target,
  Sparkle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { EDUCATIONAL_PROMPTS, EducationalPrompt } from '../data/presentationData';
import { matchesSearch } from '../utils/pedagogyLogic';

interface PromptsBankSectionProps {
  searchQuery?: string;
  onUsePromptInGenerator?: (prompt: EducationalPrompt) => void;
}

export const PromptsBankSection: React.FC<PromptsBankSectionProps> = ({ 
  searchQuery = '',
  onUsePromptInGenerator
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-cyan-400 uppercase font-mono mb-1">
            <Sparkle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Banco de Prompts Didáticos · Para adaptação pelo docente</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-serif-display">
            Prompts Estruturados para Recursos Visuais
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Instruções estruturadas para apoio à criação de recursos visuais pelo docente. Devem ser adaptadas ao contexto pedagógico e revistas criticamente quanto à sua exatidão científica e histórica.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
          {disciplines.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedDiscipline(d.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedDiscipline === d.id
                  ? 'bg-[#FACC15] text-[#071526] font-bold shadow-md shadow-amber-400/20'
                  : 'bg-[#07172A] border border-[#143657] text-slate-300 hover:text-white hover:border-cyan-500/40'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredPrompts.map((prompt) => (
          <div
            key={prompt.id}
            className="bg-[#0B1E33] rounded-3xl border border-[#143657] p-6 sm:p-7 shadow-xl hover:border-cyan-500/50 hover:shadow-2xl transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                    <span className="font-bold text-cyan-400">{prompt.discipline}</span>
                    <span>·</span>
                    <span className="font-mono text-[11px] text-amber-300">{prompt.gradeLevel}</span>
                    <span>·</span>
                    <span className="text-slate-300 font-medium">{prompt.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug font-serif-display">
                    {prompt.title}
                  </h3>
                </div>

                <span className="w-8 h-8 rounded-xl bg-[#07172A] text-amber-300 text-xs font-mono font-bold flex items-center justify-center shrink-0 border border-[#143657]">
                  {prompt.id}
                </span>
              </div>

              {/* Pedagogical Objective, Curriculum Competence & Visual Style */}
              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#07172A] border border-[#143657] text-slate-200 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <Target className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Objetivo de Aprendizagem:</span>
                  </div>
                  <p className="leading-relaxed text-slate-300">{prompt.pedagogicalObjective}</p>
                </div>

                {prompt.curriculumCompetence && (
                  <div className="text-[11px] text-slate-300 pl-1 leading-normal">
                    <strong className="text-cyan-400">Competência Curricular:</strong> {prompt.curriculumCompetence}
                  </div>
                )}

                <div className="flex items-center gap-2 text-slate-300 text-[11px] pl-1">
                  <Film className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span><strong>Estilo Visual:</strong> {prompt.visualStyle}</span>
                </div>

                <div className="flex items-center gap-2 text-slate-300 text-[11px] pl-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Ferramentas sugeridas para exploração:</strong> {prompt.recommendedTool}</span>
                </div>

                {prompt.ethicalConsideration && (
                  <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-[11px] text-amber-300 leading-relaxed">
                    <strong>Atenção Didática:</strong> {prompt.ethicalConsideration}
                  </div>
                )}
              </div>

              {/* The Prompt Box */}
              <div className="relative group pt-1">
                <div className="p-4 rounded-2xl bg-[#071321] text-amber-200 font-mono text-xs leading-relaxed border border-[#143657] selection:bg-cyan-500/30">
                  {prompt.promptText}
                </div>
              </div>

              {copyErrorId === prompt.id && (
                <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-700 text-[11px] text-amber-200 leading-snug">
                  Não foi possível copiar automaticamente. Selecione o texto e utilize a opção de copiar do navegador.
                </div>
              )}
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-[#143657] flex items-center justify-between gap-3">
              {onUsePromptInGenerator && (
                <button
                  onClick={() => onUsePromptInGenerator(prompt)}
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Personalizar no Gerador</span>
                </button>
              )}

              <button
                onClick={() => handleCopy(prompt)}
                className={`ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  copiedId === prompt.id
                    ? 'bg-emerald-500 text-[#071526] font-bold shadow-md'
                    : 'bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] font-bold shadow-md shadow-amber-400/20'
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
