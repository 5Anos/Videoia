import React, { useState } from 'react';
import { 
  Copy,
  Check,
  Film,
  Target,
  Clock,
  BookOpen,
  Calendar,
  Layers,
  ShieldAlert,
  Info,
  CheckCircle2,
  Video,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CLASSROOM_ACTIVITIES, ClassroomActivity } from '../data/presentationData';

export const ActivitiesSection: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>(CLASSROOM_ACTIVITIES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyErrorId, setCopyErrorId] = useState<string | null>(null);

  const currentActivity: ClassroomActivity = 
    CLASSROOM_ACTIVITIES.find(a => a.id === selectedActivityId) || CLASSROOM_ACTIVITIES[0];

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyErrorId(null);
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch {
      setCopiedId(null);
      setCopyErrorId(id);
      setTimeout(() => {
        setCopyErrorId(null);
      }, 2500);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Header / Introdução */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCE8F6] shadow-xs">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08203E] tracking-tight font-serif-display">
          Atividades na Aula
        </h1>
        <div className="mt-3 text-sm text-[#475569] leading-relaxed max-w-4xl space-y-2">
          <p>
            Explore cinco atividades práticas para experimentar diferentes formas de criação de vídeos com Inteligência Artificial. Crie apresentadores virtuais, gere pequenos vídeos, anime imagens, produza conteúdos com legendas e transforme textos em recursos audiovisuais.
          </p>
          <p className="text-xs sm:text-sm font-medium text-[#08203E]">
            Cada proposta inclui uma ferramenta recomendada, passos simples e instruções prontas a utilizar.
          </p>
        </div>
      </div>

      {/* 2. Cinco Cartões de Seleção */}
      <div>
        <h2 className="text-xs font-bold text-[#64748B] uppercase tracking-wider font-mono mb-3">
          Selecione uma Atividade (5 Propostas Práticas)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {CLASSROOM_ACTIVITIES.map((act) => {
            const isSelected = act.id === selectedActivityId;

            return (
              <button
                key={act.id}
                onClick={() => setSelectedActivityId(act.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 text-xs ${
                  isSelected
                    ? 'bg-[#041D3A] text-white border-[#041D3A] shadow-md ring-2 ring-[#FACC15]'
                    : 'bg-white hover:bg-[#F8FAFC] border-[#DCE8F6] text-[#08203E] hover:border-[#38BDF8]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className={`inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      isSelected
                        ? 'bg-[#FACC15] text-[#041D3A]'
                        : 'bg-[#EAF3FD] text-[#0B4B82]'
                    }`}>
                      Atividade {act.number}
                    </span>
                    <span className={`text-[10px] font-medium truncate ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {act.year}
                    </span>
                  </div>
                  <h3 className={`font-bold font-serif-display line-clamp-2 leading-snug ${
                    isSelected ? 'text-white' : 'text-[#08203E]'
                  }`}>
                    {act.title}
                  </h3>
                </div>

                <div className={`pt-2 border-t text-[11px] flex items-center justify-between ${
                  isSelected ? 'border-white/10 text-cyan-300' : 'border-[#EEF2F6] text-[#0284C7]'
                }`}>
                  <span className="font-semibold truncate">{act.tool}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Atividade Selecionada — Apresentação Detalhada */}
      <div className="bg-white rounded-3xl border border-[#DCE8F6] shadow-sm overflow-hidden space-y-6 p-6 sm:p-8">
        {/* Cabeçalho da Atividade */}
        <div className="border-b border-[#EEF2F6] pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-[#041D3A] text-[#FACC15]">
              ATIVIDADE {currentActivity.number}
            </span>
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#EAF3FD] text-[#0B4B82] border border-[#CEE2F7]">
              {currentActivity.discipline}
            </span>
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#F1F5F9] text-slate-700 border border-slate-200">
              Ano: {currentActivity.year}
            </span>
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#F1F5F9] text-slate-700 border border-slate-200 flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#0B4B82]" />
              {currentActivity.duration}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] font-serif-display mt-2">
            {currentActivity.title}
          </h2>

          {/* Ferramenta e Modo de Utilização */}
          <div className="grid sm:grid-cols-2 gap-3.5 mt-4">
            <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#08203E]">
                <Video className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Ferramenta recomendada:</span>
                <span className="text-[#0284C7]">{currentActivity.tool}</span>
              </div>
              <p className="text-xs text-slate-600">
                <strong>Modo de utilização:</strong> {currentActivity.usageMode}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FEF8E7] border border-[#FDE5B5] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#92400E]">
                <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
                <span>Acesso gratuito:</span>
              </div>
              <p className="text-xs text-[#78350F] leading-relaxed">
                {currentActivity.freeAccess}
              </p>
            </div>
          </div>
        </div>

        {/* Desafio */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#EAF3FD] to-[#F0F7FF] border border-[#CEE2F7]">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0B4B82] uppercase font-mono mb-1">
            <Target className="w-4 h-4 text-[#0B4B82]" />
            <span>DESAFIO</span>
          </div>
          <p className="text-sm font-semibold text-[#08203E] leading-relaxed">
            {currentActivity.challenge}
          </p>
        </div>

        {/* Como Fazer (Passos simples normais se existirem) */}
        {currentActivity.howToSteps && currentActivity.howToSteps.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#08203E] uppercase font-mono tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#0B4B82]" />
              <span>COMO FAZER</span>
            </h3>
            <div className="space-y-2">
              {currentActivity.howToSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] leading-relaxed"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Etapas Estruturadas (caso da Atividade 4 Canva) */}
        {currentActivity.stages && currentActivity.stages.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-[#08203E] uppercase font-mono tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#0B4B82]" />
              <span>COMO FAZER — ETAPAS DETALHADAS</span>
            </h3>
            
            <div className="space-y-4">
              {currentActivity.stages.map((stage, sIdx) => (
                <div 
                  key={sIdx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3"
                >
                  <h4 className="text-xs sm:text-sm font-bold text-[#08203E] font-serif-display">
                    {stage.title}
                  </h4>

                  {stage.description && (
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {stage.description}
                    </p>
                  )}

                  {stage.steps && stage.steps.length > 0 && (
                    <div className="space-y-1.5 text-xs text-[#334155]">
                      {stage.steps.map((st, i) => (
                        <div key={i} className="pl-2 border-l-2 border-[#0284C7]/40 py-0.5">
                          {st}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Copy item inside stage */}
                  {stage.copyItem && (
                    <div className="mt-3 p-3.5 rounded-xl bg-white border border-[#CBD5E1] space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold text-[#08203E] font-mono">
                          {stage.copyItem.title}
                        </span>
                        <button
                          onClick={() => handleCopy(stage.copyItem!.id, stage.copyItem!.content)}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#041D3A] hover:bg-[#09284D] text-[#FACC15] flex items-center gap-1.5 cursor-pointer transition-all shrink-0 shadow-2xs"
                        >
                          {copiedId === stage.copyItem.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copiado!</span>
                            </>
                          ) : copyErrorId === stage.copyItem.id ? (
                            <>
                              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                              <span>Não foi possível copiar</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>{stage.copyItem.label}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-xs font-mono bg-[#041D3A] text-slate-100 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed">
                        {stage.copyItem.content}
                      </pre>
                    </div>
                  )}

                  {stage.tip && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 leading-relaxed font-medium">
                      💡 {stage.tip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Copy Items dedicados (Prompts, Guiões, Narrações) */}
        {currentActivity.copyItems && currentActivity.copyItems.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#08203E] uppercase font-mono tracking-wider flex items-center gap-1.5">
              <Copy className="w-4 h-4 text-[#0B4B82]" />
              <span>TEXTO / PROMPT / GUIÃO PARA A FERRAMENTA</span>
            </h3>

            <div className="space-y-3">
              {currentActivity.copyItems.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 sm:p-5 rounded-2xl bg-[#041D3A] text-white border border-[#0E2C52] space-y-3 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#FACC15] font-serif-display">
                        {item.title}
                      </h4>
                      {item.note && (
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          {item.note}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handleCopy(item.id, item.content)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#FACC15] hover:bg-amber-300 text-[#041D3A] flex items-center gap-1.5 cursor-pointer transition-all self-start sm:self-auto shrink-0 font-sans shadow-xs"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#041D3A]" />
                          <span className="font-bold">Copiado!</span>
                        </>
                      ) : copyErrorId === item.id ? (
                        <>
                          <ShieldAlert className="w-3.5 h-3.5 text-[#041D3A]" />
                          <span className="font-bold">Não foi possível copiar</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="font-bold">{item.label}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="text-xs font-mono text-cyan-200 bg-[#021326] p-3.5 rounded-xl overflow-x-auto whitespace-pre-wrap leading-relaxed border border-cyan-900/40">
                    {item.content}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Definições Recomendadas (se aplicável) */}
        {currentActivity.recommendedSettings && currentActivity.recommendedSettings.length > 0 && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
            <h4 className="text-xs font-bold text-[#08203E] uppercase font-mono tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>DEFINIÇÕES RECOMENDADAS</span>
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-[#475569]">
              {currentActivity.recommendedSettings.map((setting, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#EEF2F6]">
                  <span className="text-[#0284C7] font-bold">•</span>
                  <span>{setting}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Produto Final */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1">
          <span className="text-xs font-bold text-emerald-900 uppercase font-mono tracking-wider block">
            PRODUTO FINAL
          </span>
          <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed">
            {currentActivity.expectedResult}
          </p>
        </div>

        {/* Notas de Validação */}
        {currentActivity.validationNotes && currentActivity.validationNotes.length > 0 && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FEF8E7] border border-[#FDE5B5] space-y-2">
            <span className="text-xs font-bold text-[#92400E] uppercase font-mono tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#B45309]" />
              <span>NOTA DE VALIDAÇÃO CIENTÍFICA E PEDAGÓGICA</span>
            </span>
            <div className="space-y-1.5 text-xs text-[#78350F] leading-relaxed">
              {currentActivity.validationNotes.map((note, nIdx) => (
                <p key={nIdx}>
                  {note}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Importante sobre a Ferramenta (se existir) */}
        {currentActivity.toolImportantNote && (
          <div className="p-4 sm:p-5 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-1.5 text-xs text-[#1E40AF] leading-relaxed">
            <span className="font-bold uppercase font-mono text-[11px] flex items-center gap-1.5 text-[#1E3A8A]">
              <Info className="w-4 h-4 text-[#2563EB]" />
              <span>IMPORTANTE SOBRE A FERRAMENTA</span>
            </span>
            <p>
              {currentActivity.toolImportantNote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
