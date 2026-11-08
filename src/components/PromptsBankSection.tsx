import React, { useState } from 'react';
import { 
  BookOpen, 
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

  const disciplines = [
    { id: 'all', label: 'Todas as Disciplinas' },
    { id: 'ciencias', label: 'Ciências & Biologia' },
    { id: 'matematica', label: 'Matemática' },
    { id: 'historia', label: 'História & Cidadania' },
    { id: 'geografia', label: 'Geografia & Meio Ambiente' },
    { id: 'artes', label: 'Educação Visual & Artes' },
  ];

  const handleCopy = (prompt: EducationalPrompt) => {
    navigator.clipboard.writeText(prompt.promptText);
    setCopiedId(prompt.id);
    confetti({
      particleCount: 30,
      spread: 55,
      origin: { y: 0.85 }
    });
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
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
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C05638] uppercase font-mono mb-1">
            <Sparkle className="w-3.5 h-3.5 text-[#C05638]" />
            <span>Banco de Prompts Didáticos · Testados em Sala de Aula</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-serif-display">
            Prompts Estruturados para Gerar Vídeos que Ensinam
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Instruções redigidas com intencionalidade pedagógica para produzir animações científicas, reconstituições 
            históricas e demonstrações visuais sem ambiguidades ou alucinações. Copie diretamente ou refine com o assistente.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
          {disciplines.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedDiscipline(d.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedDiscipline === d.id
                  ? 'bg-[#181513] text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
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
            className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-7 shadow-sm hover:border-stone-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-medium mb-1">
                    <span className="font-bold text-[#C05638]">{prompt.discipline}</span>
                    <span>·</span>
                    <span className="font-mono text-[11px]">{prompt.gradeLevel}</span>
                    <span>·</span>
                    <span className="text-stone-700 font-medium">{prompt.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900 leading-snug font-serif-display">
                    {prompt.title}
                  </h3>
                </div>

                <span className="w-8 h-8 rounded-xl bg-stone-100 text-stone-700 text-xs font-mono font-bold flex items-center justify-center shrink-0 border border-stone-200">
                  {prompt.id}
                </span>
              </div>

              {/* Pedagogical Objective, Curriculum Competence & Visual Style */}
              <div className="space-y-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 text-stone-700 space-y-1">
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 font-mono text-[11px] uppercase">
                    <Target className="w-3.5 h-3.5 text-[#C05638] shrink-0" />
                    <span>Objetivo de Aprendizagem:</span>
                  </div>
                  <p className="leading-relaxed">{prompt.pedagogicalObjective}</p>
                </div>

                {prompt.curriculumCompetence && (
                  <div className="text-[11px] text-stone-600 pl-1 leading-normal">
                    <strong>Competência Curricular:</strong> {prompt.curriculumCompetence}
                  </div>
                )}

                <div className="flex items-center gap-2 text-stone-600 text-[11px] pl-1">
                  <Film className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span><strong>Estilo Visual:</strong> {prompt.visualStyle}</span>
                </div>

                <div className="flex items-center gap-2 text-stone-600 text-[11px] pl-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#1E523A] shrink-0" />
                  <span><strong>Melhores Ferramentas:</strong> {prompt.recommendedTool}</span>
                </div>

                {prompt.ethicalConsideration && (
                  <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-950 leading-relaxed">
                    <strong>Atenção Didática:</strong> {prompt.ethicalConsideration}
                  </div>
                )}
              </div>

              {/* The Prompt Box */}
              <div className="relative group pt-1">
                <div className="p-4 rounded-2xl bg-[#181513] text-stone-100 font-mono text-xs leading-relaxed border border-stone-800 selection:bg-[#C05638]">
                  {prompt.promptText}
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
              {onUsePromptInGenerator && (
                <button
                  onClick={() => onUsePromptInGenerator(prompt)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#C05638] hover:text-[#A8492E] font-bold cursor-pointer"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Personalizar no Gerador</span>
                </button>
              )}

              <button
                onClick={() => handleCopy(prompt)}
                className={`ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  copiedId === prompt.id
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-[#181513] hover:bg-stone-800 text-white shadow-2xs'
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
