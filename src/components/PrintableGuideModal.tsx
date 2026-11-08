import React from 'react';
import { X, Printer, CheckCircle2 } from 'lucide-react';
import { MODULE_OVERVIEW, TEACHER_ADVANTAGES, CLASSROOM_ACTIVITIES, EDUCATIONAL_PROMPTS, BIBLIOGRAPHY } from '../data/presentationData';

interface PrintableGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableGuideModal: React.FC<PrintableGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto print:p-0 print:bg-white print:fixed print:inset-0">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 print:max-h-none print:shadow-none print:border-none print:rounded-none">
        {/* Top Control Bar (Hidden on print) */}
        <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-md p-4 px-6 border-b border-stone-200 flex items-center justify-between print:hidden z-10">
          <div>
            <h2 className="text-sm font-bold text-stone-900 font-serif-display">
              Ficha Pedagógica de Apoio ao Docente (Módulo 3: Vídeo com IA)
            </h2>
            <p className="text-xs text-stone-500">
              Formatação otimizada para impressão direta ou exportação em PDF
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#C05638] hover:bg-[#A8492E] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Content Body */}
        <div className="p-8 sm:p-12 space-y-8 text-stone-900 print:p-6 print:space-y-6">
          {/* Header */}
          <div className="border-b-2 border-[#C05638] pb-4">
            <div className="text-xs font-bold text-[#C05638] uppercase tracking-wider font-mono">
              Formação Contínua de Docentes · Carla Oliveira (2026)
            </div>
            <h1 className="text-2xl font-black text-stone-900 mt-1 font-serif-display">
              Guia Prático: Ferramentas de Vídeo com IA na Educação
            </h1>
            <p className="text-xs text-stone-600 mt-1">
              Documento síntese com objetivos curriculares, 5 pilares de Mayer, banco de prompts e 4 guiões de atividades práticas.
            </p>
          </div>

          {/* Objectives */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider bg-stone-100 p-2.5 rounded-xl font-mono">
              1. Objetivos do Módulo 3
            </h2>
            <ul className="text-xs space-y-1.5 pl-2">
              {MODULE_OVERVIEW.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold text-[#C05638]">✓</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5 Advantages */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider bg-stone-100 p-2.5 rounded-xl font-mono">
              2. As 5 Grandes Vantagens na Ótica do Professor
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {TEACHER_ADVANTAGES.map((adv) => (
                <div key={adv.id} className="p-3.5 rounded-xl border border-stone-200 bg-[#FAF8F5] space-y-1">
                  <div className="font-bold text-stone-900 font-serif-display">{adv.title}</div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">{adv.description}</p>
                  <div className="text-[10px] text-[#C05638] font-semibold pt-1">
                    Ferramentas: {adv.usefulTools.map(t => t.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Summary */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider bg-stone-100 p-2.5 rounded-xl font-mono">
              3. Guiões Didáticos de Sala de Aula
            </h2>
            <div className="space-y-3">
              {CLASSROOM_ACTIVITIES.map((act, idx) => (
                <div key={act.id} className="border border-stone-200 p-4 rounded-2xl space-y-2 text-xs">
                  <div className="flex justify-between font-bold text-stone-900 font-serif-display">
                    <span>Atividade 0{idx + 1}: {act.title}</span>
                    <span className="text-stone-500 font-mono text-[11px]">{act.discipline}</span>
                  </div>

                  <div className="space-y-1 text-stone-700">
                    <strong>Etapas de Trabalho:</strong>
                    {act.teacherImplementationSteps.map(step => (
                      <div key={step.step} className="pl-2">
                        • <strong>Etapa {step.step} ({step.title}):</strong> {step.description}
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex justify-between text-[11px] text-stone-600">
                    <div><strong>Entregáveis:</strong> {act.studentDeliverables.join('; ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt Bank Preview */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-stone-900 uppercase tracking-wider bg-stone-100 p-2.5 rounded-xl font-mono">
              4. Prompts Pedagógicos Selecionados
            </h2>
            <div className="space-y-2 text-xs">
              {EDUCATIONAL_PROMPTS.slice(0, 5).map(p => (
                <div key={p.id} className="p-3 rounded-xl border border-stone-200">
                  <div className="font-bold text-stone-800 font-serif-display">{p.title} ({p.discipline})</div>
                  <div className="italic text-stone-600 mt-1 font-mono text-[11px]">{p.promptText}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bibliography */}
          <div className="space-y-2 border-t border-stone-200 pt-4">
            <h2 className="text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
              5. Referências Bibliográficas (APA 7.ª edição)
            </h2>
            <ul className="text-[11px] text-stone-600 space-y-1">
              {BIBLIOGRAPHY.map((b, i) => (
                <li key={i}>• {b.citation}</li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="text-center text-[10px] text-stone-400 border-t border-stone-200 pt-3">
            Plataforma Pedagógica Aberta · Carla Oliveira 2026 · Formação de Professores · Pronta para GitHub.
          </div>
        </div>
      </div>
    </div>
  );
};
