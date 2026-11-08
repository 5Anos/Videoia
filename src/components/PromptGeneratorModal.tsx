import React, { useState } from 'react';
import { 
  Wand2, 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  BookOpen, 
  Layers, 
  GraduationCap, 
  Video,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateEducationalPrompt, PromptTemplateParams } from '../utils/pedagogyLogic';
import { EducationalPrompt } from '../data/presentationData';

interface PromptGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: EducationalPrompt | null;
}

export const PromptGeneratorModal: React.FC<PromptGeneratorModalProps> = ({
  isOpen,
  onClose,
  initialPrompt
}) => {
  const [params, setParams] = useState<PromptTemplateParams>({
    subject: initialPrompt?.discipline || 'Ciências Naturais',
    gradeLevel: initialPrompt?.gradeLevel || '3.º Ciclo (7.º a 9.º ano)',
    topic: initialPrompt?.title ? initialPrompt.title.replace(/^\d+\.\s*/, '') : 'O Ciclo da Água e a Sustentabilidade dos Recursos Hídricos',
    videoStyle: 'animation',
    toolTarget: 'capcut',
    duration: '2 minutos'
  });

  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const generatedPrompt = generateEducationalPrompt(params);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
        {/* Header */}
        <div className="p-6 border-b border-stone-800 bg-[#181513] text-white rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#C05638] flex items-center justify-center text-amber-200">
              <Wand2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-serif-display">
                Gerador de Prompts Pedagógicos para Vídeo
              </h2>
              <p className="text-xs text-stone-300">
                Assistente para adaptar prompts a qualquer tema e nível de ensino
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Subject */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                Disciplina
              </label>
              <input
                type="text"
                value={params.subject}
                onChange={(e) => setParams({ ...params, subject: e.target.value })}
                className="w-full p-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C05638]/20 focus:border-[#C05638]"
              />
            </div>

            {/* Grade Level */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                Nível de Ensino
              </label>
              <select
                value={params.gradeLevel}
                onChange={(e) => setParams({ ...params, gradeLevel: e.target.value })}
                className="w-full p-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C05638]/20 focus:border-[#C05638]"
              >
                <option value="1.º Ciclo (1.º a 4.º ano)">1.º Ciclo (1.º a 4.º ano)</option>
                <option value="2.º Ciclo (5.º e 6.º ano)">2.º Ciclo (5.º e 6.º ano)</option>
                <option value="3.º Ciclo (7.º a 9.º ano)">3.º Ciclo (7.º a 9.º ano)</option>
                <option value="Ensino Secundário (10.º a 12.º ano)">Ensino Secundário (10.º a 12.º ano)</option>
                <option value="Formação Contínua de Docentes">Formação de Professores</option>
              </select>
            </div>
          </div>

          {/* Topic */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
              Tema ou Conceito Curricular a Ensinar
            </label>
            <textarea
              rows={2}
              value={params.topic}
              onChange={(e) => setParams({ ...params, topic: e.target.value })}
              className="w-full p-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C05638]/20 focus:border-[#C05638]"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Visual Style */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                Estilo Visual
              </label>
              <select
                value={params.videoStyle}
                onChange={(e) => setParams({ ...params, videoStyle: e.target.value as PromptTemplateParams['videoStyle'] })}
                className="w-full p-2.5 text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C05638]/20 focus:border-[#C05638]"
              >
                <option value="animation">Animação 3D Didática</option>
                <option value="documentary">Documentário Realista</option>
                <option value="avatar">Apresentador Virtual / Avatar</option>
                <option value="news">Telejornal / Reportagem</option>
                <option value="realistic">Cinematográfico Realista</option>
              </select>
            </div>

            {/* Target Tool */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                Ferramenta-Alvo
              </label>
              <select
                value={params.toolTarget}
                onChange={(e) => setParams({ ...params, toolTarget: e.target.value })}
                className="w-full p-2.5 text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C05638]/20 focus:border-[#C05638]"
              >
                <option value="invideo">InVideo AI (Vídeo Completo)</option>
                <option value="capcut">CapCut AI (Edição & Legendas)</option>
                <option value="kling">Kling AI (Movimento Realista)</option>
                <option value="luma">Luma Ray 2 (Cinematográfico)</option>
                <option value="perchance">Perchance (Sem Conta / Turmas)</option>
                <option value="canva">Canva para Educação</option>
                <option value="clipchamp">Microsoft Clipchamp (Voz PT-PT)</option>
              </select>
            </div>

            {/* Duration */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-stone-800 uppercase tracking-wider font-mono">
                Duração Prevista
              </label>
              <select
                value={params.duration}
                onChange={(e) => setParams({ ...params, duration: e.target.value })}
                className="w-full p-2.5 text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C05638]/20 focus:border-[#C05638]"
              >
                <option value="30 segundos">30 segundos (Gancho inicial)</option>
                <option value="1 minuto">1 minuto (Conceito direto)</option>
                <option value="2 minutos">2 minutos (Explicação guiada)</option>
                <option value="3 a 5 minutos">3 a 5 minutos (Projeto alargado)</option>
              </select>
            </div>
          </div>

          {/* Generated Output Preview */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C05638]" />
                <span>Prompt Estruturado Resultante</span>
              </span>
              <span className="text-[11px] text-stone-500">Pronto a colar na ferramenta</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#181513] text-stone-100 font-mono text-xs leading-relaxed border border-stone-800 select-all">
              {generatedPrompt}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-stone-500">
              Dica: Ajuste termos específicos do programa da sua escola.
            </span>

            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#C05638] hover:bg-[#A8492E] text-white shadow-md shadow-[#C05638]/20'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copiado com Sucesso!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Prompt Gerado</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
