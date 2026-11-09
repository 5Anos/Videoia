import React, { useState, useEffect } from 'react';
import { 
  Wand2, 
  X, 
  Copy, 
  Check, 
  Sparkles
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
  const [copyError, setCopyError] = useState<boolean>(false);

  useEffect(() => {
    if (initialPrompt) {
      setParams(prev => ({
        ...prev,
        subject: initialPrompt.discipline || prev.subject,
        gradeLevel: initialPrompt.gradeLevel || prev.gradeLevel,
        topic: initialPrompt.title ? initialPrompt.title.replace(/^\d+\.\s*/, '') : prev.topic
      }));
    }
  }, [initialPrompt]);

  if (!isOpen) return null;

  const generatedPrompt = generateEducationalPrompt(params);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(generatedPrompt);
        setCopyError(false);
        setCopied(true);
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.8 }
        });
        setTimeout(() => setCopied(false), 2000);
      } else {
        throw new Error('Clipboard indisponível');
      }
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 5000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#0B1E33] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-cyan-500/40 text-white">
        {/* Header */}
        <div className="p-6 border-b border-[#143657] bg-[#07172A] rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-300">
              <Wand2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-serif-display">
                Gerador de Prompts Pedagógicos para Vídeo
              </h2>
              <p className="text-xs text-slate-300">
                Assistente para adaptar prompts a qualquer tema curricular e nível de ensino
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-[#0B1E33] hover:bg-[#0E243A] text-slate-300 hover:text-white flex items-center justify-center border border-[#143657] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Subject */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                Disciplina
              </label>
              <input
                type="text"
                value={params.subject}
                onChange={(e) => setParams({ ...params, subject: e.target.value })}
                className="w-full p-2.5 text-xs sm:text-sm bg-[#07172A] border border-[#143657] text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400"
              />
            </div>

            {/* Grade Level */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                Nível de Ensino
              </label>
              <select
                value={params.gradeLevel}
                onChange={(e) => setParams({ ...params, gradeLevel: e.target.value })}
                className="w-full p-2.5 text-xs sm:text-sm bg-[#07172A] border border-[#143657] text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400"
              >
                <option value="1.º Ciclo (1.º a 4.º ano)" className="bg-[#07172A] text-white">1.º Ciclo (1.º a 4.º ano)</option>
                <option value="2.º Ciclo (5.º e 6.º ano)" className="bg-[#07172A] text-white">2.º Ciclo (5.º e 6.º ano)</option>
                <option value="3.º Ciclo (7.º a 9.º ano)" className="bg-[#07172A] text-white">3.º Ciclo (7.º a 9.º ano)</option>
                <option value="Ensino Secundário (10.º a 12.º ano)" className="bg-[#07172A] text-white">Ensino Secundário (10.º a 12.º ano)</option>
                <option value="Formação Contínua de Docentes" className="bg-[#07172A] text-white">Formação de Professores</option>
              </select>
            </div>
          </div>

          {/* Topic */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              Tema ou Conceito Curricular a Ensinar
            </label>
            <textarea
              rows={2}
              value={params.topic}
              onChange={(e) => setParams({ ...params, topic: e.target.value })}
              className="w-full p-2.5 text-xs sm:text-sm bg-[#07172A] border border-[#143657] text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {/* Visual Style */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                Estilo Visual
              </label>
              <select
                value={params.videoStyle}
                onChange={(e) => setParams({ ...params, videoStyle: e.target.value as PromptTemplateParams['videoStyle'] })}
                className="w-full p-2.5 text-xs bg-[#07172A] border border-[#143657] text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400"
              >
                <option value="animation" className="bg-[#07172A] text-white">Animação 3D Didática</option>
                <option value="documentary" className="bg-[#07172A] text-white">Documentário Realista</option>
                <option value="avatar" className="bg-[#07172A] text-white">Apresentador Virtual / Avatar</option>
                <option value="news" className="bg-[#07172A] text-white">Telejornal / Reportagem</option>
                <option value="realistic" className="bg-[#07172A] text-white">Cinematográfico Realista</option>
              </select>
            </div>

            {/* Target Tool */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                Ferramenta-Alvo
              </label>
              <select
                value={params.toolTarget}
                onChange={(e) => setParams({ ...params, toolTarget: e.target.value })}
                className="w-full p-2.5 text-xs bg-[#07172A] border border-[#143657] text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400"
              >
                <option value="invideo" className="bg-[#07172A] text-white">InVideo AI (Vídeo Completo)</option>
                <option value="capcut" className="bg-[#07172A] text-white">CapCut (Web, PC e Telemóvel)</option>
                <option value="kling" className="bg-[#07172A] text-white">Kling AI (Movimento Realista)</option>
                <option value="luma" className="bg-[#07172A] text-white">Luma Dream Machine</option>
                <option value="perchance" className="bg-[#07172A] text-white">Perchance (apenas docentes adultos, 18+)</option>
                <option value="canva" className="bg-[#07172A] text-white">Canva para Educação</option>
                <option value="clipchamp" className="bg-[#07172A] text-white">Microsoft Clipchamp (Voz PT-PT)</option>
              </select>
            </div>

            {/* Duration */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
                Duração Prevista
              </label>
              <select
                value={params.duration}
                onChange={(e) => setParams({ ...params, duration: e.target.value })}
                className="w-full p-2.5 text-xs bg-[#07172A] border border-[#143657] text-white rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400"
              >
                <option value="30 segundos" className="bg-[#07172A] text-white">30 segundos (Gancho inicial)</option>
                <option value="1 minuto" className="bg-[#07172A] text-white">1 minuto (Conceito direto)</option>
                <option value="2 minutos" className="bg-[#07172A] text-white">2 minutos (Explicação guiada)</option>
                <option value="3 a 5 minutos" className="bg-[#07172A] text-white">3 a 5 minutos (Projeto alargado)</option>
              </select>
            </div>
          </div>

          {/* Generated Output Preview */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Prompt Estruturado Resultante</span>
              </span>
              <span className="text-[11px] text-slate-400">Pronto a colar na ferramenta</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#071321] text-amber-200 font-mono text-xs leading-relaxed border border-[#143657] select-all">
              {generatedPrompt}
            </div>

            {copyError && (
              <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-700 text-[11px] text-amber-200 leading-snug">
                Não foi possível copiar automaticamente. Selecione o texto e utilize a opção de copiar do navegador.
              </div>
            )}
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Dica: Ajuste termos específicos do programa curricular da sua escola.
            </span>

            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-500 text-[#071526]'
                  : 'bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] shadow-md shadow-amber-400/20'
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
