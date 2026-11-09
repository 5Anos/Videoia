import React, { useState, useEffect, useRef } from 'react';
import { 
  Wand2, 
  X, 
  Copy, 
  Check, 
  Sparkles,
  HelpCircle
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
    duration: '2 minutos',
    clipDuration: '5 segundos por clipe',
    visualRestrictions: ''
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [copyError, setCopyError] = useState<boolean>(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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

  // Accessibility: Escape key listener and initial focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

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
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DCE8F6] text-[#08203E]">
        {/* Header */}
        <div className="p-6 border-b border-[#EEF2F6] bg-[#F8FAFC] rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#EAF3FD] border border-[#CEE2F7] flex items-center justify-center text-[#0B4B82]">
              <Wand2 className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-title" className="text-lg font-bold text-[#08203E] font-serif-display">
                Gerador de Prompts Pedagógicos para Vídeo
              </h2>
              <p className="text-xs text-[#64748B]">
                Assistente para adaptar prompts a qualquer tema curricular e nível de ensino
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Fechar janela do gerador de prompts"
            className="w-8 h-8 rounded-xl bg-white hover:bg-slate-100 text-[#475569] hover:text-[#08203E] flex items-center justify-center border border-[#DCE8F6] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Subject */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#0B4B82] uppercase tracking-wider font-mono">
                Disciplina
              </label>
              <input
                type="text"
                value={params.subject}
                onChange={(e) => setParams({ ...params, subject: e.target.value })}
                className="w-full p-2.5 text-xs sm:text-sm bg-white border border-[#DCE8F6] text-[#08203E] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
              />
            </div>

            {/* Grade Level */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#0B4B82] uppercase tracking-wider font-mono">
                Nível de Ensino
              </label>
              <select
                value={params.gradeLevel}
                onChange={(e) => setParams({ ...params, gradeLevel: e.target.value })}
                className="w-full p-2.5 text-xs sm:text-sm bg-white border border-[#DCE8F6] text-[#08203E] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
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
            <label className="text-xs font-bold text-[#0B4B82] uppercase tracking-wider font-mono">
              Tema ou Conceito Curricular a Ensinar
            </label>
            <textarea
              rows={2}
              value={params.topic}
              onChange={(e) => setParams({ ...params, topic: e.target.value })}
              className="w-full p-2.5 text-xs sm:text-sm bg-white border border-[#DCE8F6] text-[#08203E] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Visual Style */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#92400E] uppercase tracking-wider font-mono">
                Estilo Visual
              </label>
              <select
                value={params.videoStyle}
                onChange={(e) => setParams({ ...params, videoStyle: e.target.value as PromptTemplateParams['videoStyle'] })}
                className="w-full p-2.5 text-xs bg-white border border-[#DCE8F6] text-[#08203E] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
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
              <label className="text-xs font-bold text-[#92400E] uppercase tracking-wider font-mono">
                Ferramenta-Alvo
              </label>
              <select
                value={params.toolTarget}
                onChange={(e) => setParams({ ...params, toolTarget: e.target.value })}
                className="w-full p-2.5 text-xs bg-white border border-[#DCE8F6] text-[#08203E] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              >
                <option value="invideo">InVideo AI (Vídeo Completo)</option>
                <option value="capcut">CapCut (Web, PC e Telemóvel)</option>
                <option value="kling">Kling AI (Clipe Curto)</option>
                <option value="luma">Luma Dream Machine (Clipe Curto)</option>
                <option value="minimax">MiniMax Hailuo (Clipe Curto)</option>
                <option value="pika">Pika (Clipe Curto)</option>
                <option value="perchance">Perchance (apenas docentes adultos, 18+)</option>
                <option value="canva">Canva para Educação</option>
                <option value="clipchamp">Microsoft Clipchamp (Voz PT-PT)</option>
                <option value="heygen">HeyGen (Avatar)</option>
                <option value="vidnoz">Vidnoz AI (Avatar)</option>
              </select>
            </div>
          </div>

          {/* Duração Diferenciada: Produto Final vs Clipe Gerado */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#0B4B82] uppercase tracking-wider font-mono">
                Duração do Produto Final
              </label>
              <select
                value={params.duration}
                onChange={(e) => setParams({ ...params, duration: e.target.value })}
                className="w-full p-2.5 text-xs bg-white border border-[#DCE8F6] text-[#08203E] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
              >
                <option value="30 segundos">30 segundos (Gancho inicial)</option>
                <option value="1 minuto">1 minuto (Conceito direto)</option>
                <option value="2 minutos">2 minutos (Explicação guiada)</option>
                <option value="3 a 5 minutos">3 a 5 minutos (Projeto alargado)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#0B4B82] uppercase tracking-wider font-mono">
                Duração do Clipe Gerado
              </label>
              <select
                value={params.clipDuration || '5 segundos por clipe'}
                onChange={(e) => setParams({ ...params, clipDuration: e.target.value })}
                className="w-full p-2.5 text-xs bg-white border border-[#DCE8F6] text-[#08203E] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7]"
              >
                <option value="3 a 5 segundos por clipe">3 a 5 segundos (plano curto padrão IA)</option>
                <option value="5 a 10 segundos por clipe">5 a 10 segundos (movimento expandido)</option>
                <option value="Vídeo contínuo de 1 a 2 minutos">Vídeo contínuo (geradores completos com montagem)</option>
              </select>
            </div>
          </div>

          {/* Visual Restrictions / Elementos a evitar */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#92400E] uppercase tracking-wider font-mono">
                Elementos a Evitar no Vídeo (Opcional)
              </label>
              <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                <HelpCircle className="w-3 h-3 text-[#92400E]" />
                Restrições visuais
              </span>
            </div>
            <input
              type="text"
              placeholder="Ex.: texto ou legendas em inglês, legendas embutidas com erros, pessoas reais, movimentos bruscos..."
              value={params.visualRestrictions || ''}
              onChange={(e) => setParams({ ...params, visualRestrictions: e.target.value })}
              className="w-full p-2.5 text-xs sm:text-sm bg-white border border-[#DCE8F6] text-[#08203E] placeholder:text-slate-400 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
            <p className="text-[11px] text-[#64748B] pl-1">
              Adiciona diretrizes negativas no prompt para evitar distorções cognitivas e elementos visuais indesejados.
            </p>
          </div>

          {/* Generated Output Preview */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B4B82] font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Prompt Estruturado Resultante</span>
              </span>
              <span className="text-[11px] text-[#64748B]">Pronto a colar na ferramenta</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#041D3A] text-[#FDE68A] font-mono text-xs leading-relaxed border border-[#041D3A] select-all">
              {generatedPrompt}
            </div>

            {copyError && (
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-[11px] text-amber-900 leading-snug">
                Não foi possível copiar automaticamente. Selecione o texto e utilize a opção de copiar do navegador.
              </div>
            )}
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-[#64748B]">
              Dica: Ajuste termos específicos do programa curricular da sua escola.
            </span>

            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#FACC15] hover:bg-[#FDE047] text-[#071526] shadow-xs'
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
