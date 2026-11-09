import React, { useState } from 'react';
import { 
  Users, 
  HeartPulse, 
  Newspaper, 
  Boxes, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  Calculator, 
  Award,
  Sparkle
} from 'lucide-react';
import { CLASSROOM_ACTIVITIES } from '../data/presentationData';
import { calculateRubricScore } from '../utils/pedagogyLogic';

export const ActivitiesSection: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>('entrevista-ia');
  const [completedSteps, setCompletedSteps] = useState<Record<string, Record<number, boolean>>>({});
  
  // Rubric state for interactive grading (0-5 scale per criterion, sum up to 20)
  const [rubricScores, setRubricScores] = useState({
    scientificAccuracy: 4,
    clarityAndPacing: 4,
    creativityAndStyle: 4,
    debateParticipation: 4
  });
  const [showRubricCalculator, setShowRubricCalculator] = useState(false);

  const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Users,
    HeartPulse,
    Newspaper,
    Boxes
  };

  const currentActivity = CLASSROOM_ACTIVITIES.find(a => a.id === selectedActivityId) || CLASSROOM_ACTIVITIES[0];
  const CurrentIcon = iconsMap[currentActivity.icon] || Users;

  const toggleStep = (activityId: string, stepNum: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [activityId]: {
        ...prev[activityId],
        [stepNum]: !prev[activityId]?.[stepNum]
      }
    }));
  };

  const calculatedGrade = calculateRubricScore(rubricScores);

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-cyan-400 uppercase font-mono mb-1">
          <Sparkle className="w-3.5 h-3.5 text-cyan-400" />
          <span>Planificação Didática · Projetos com Alunos</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-serif-display">
          Planificação de Atividades em Sala de Aula
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
          Quatro guiões pedagógicos detalhados para colocar os alunos a criar em equipa com sentido crítico. 
          Inclui etapas passo a passo para o professor, recomendações técnicas, entregáveis dos alunos e uma grelha de avaliação contínua (0 a 20 valores).
        </p>
      </div>

      {/* Activity Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CLASSROOM_ACTIVITIES.map((act, idx) => {
          const Icon = iconsMap[act.icon] || Users;
          const isSelected = act.id === selectedActivityId;

          return (
            <button
              key={act.id}
              onClick={() => setSelectedActivityId(act.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-[#FACC15] text-[#071526] border-transparent shadow-lg shadow-amber-400/20 font-bold'
                  : 'bg-[#0B1E33] hover:bg-[#0E243A] border-[#143657] text-slate-300 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-[#071526] text-[#FACC15]' : 'bg-[#07172A] text-cyan-400 border border-[#143657]'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                  isSelected ? 'bg-[#071526]/20 text-[#071526]' : 'bg-[#07172A] text-slate-400 border border-[#143657]'
                }`}>
                  Guião 0{idx + 1}
                </span>
              </div>

              <div>
                <div className={`text-xs sm:text-sm leading-snug line-clamp-1 font-serif-display ${isSelected ? 'font-bold text-[#071526]' : 'font-semibold text-white'}`}>
                  {act.title.replace('Atividade: ', '')}
                </div>
                <div className={`text-[11px] mt-1 ${isSelected ? 'text-[#071526]/80' : 'text-slate-400'}`}>
                  {act.targetCycle} · {act.estimatedDuration}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Activity Detail Card */}
      <section className="bg-[#0B1E33] rounded-3xl border border-[#143657] shadow-xl overflow-hidden">
        {/* Banner */}
        <div className="bg-[#07172A] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#143657]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-800/80 flex items-center justify-center text-cyan-300">
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] text-amber-400 font-semibold tracking-wider uppercase font-mono">
                Guião Prático de Aula
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5 font-serif-display">
                {currentActivity.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRubricCalculator(!showRubricCalculator)}
              className="px-4 py-2 rounded-xl bg-[#0B1E33] hover:bg-[#0E243A] text-cyan-300 text-xs font-bold border border-[#143657] inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{showRubricCalculator ? 'Ocultar Simulador de Rubrica' : 'Simulador de Rubrica (0-20)'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Rubric Simulator Drawer */}
        {showRubricCalculator && (
          <div className="p-6 sm:p-8 bg-[#07172A] border-b border-[#143657] animate-in fade-in duration-200">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#143657] pb-3">
                <div>
                  <h3 className="text-sm font-bold text-white font-serif-display">
                    Simulador Interativo de Avaliação Contínua
                  </h3>
                  <p className="text-xs text-slate-300">
                    Ajuste os 4 critérios formativos (0 a 5 pontos cada) para obter a classificação final na escala de 0 a 20 valores.
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-black text-amber-400 font-mono">{calculatedGrade.total}/20 ({calculatedGrade.percentage}%)</div>
                  <span className="inline-block px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase bg-[#FACC15] text-[#071526]">
                    {calculatedGrade.qualitativeGrade}
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5 bg-[#0B1E33] p-3.5 rounded-2xl border border-[#143657]">
                  <div className="flex justify-between text-xs font-semibold text-slate-200">
                    <span>1. Correção Científica / Precisão</span>
                    <span className="text-cyan-400 font-bold font-mono">{rubricScores.scientificAccuracy} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={rubricScores.scientificAccuracy}
                    onChange={(e) => setRubricScores({ ...rubricScores, scientificAccuracy: Number(e.target.value) })}
                    className="w-full accent-[#FACC15]"
                  />
                </div>

                <div className="space-y-1.5 bg-[#0B1E33] p-3.5 rounded-2xl border border-[#143657]">
                  <div className="flex justify-between text-xs font-semibold text-slate-200">
                    <span>2. Clareza e Ritmo da Narrativa</span>
                    <span className="text-cyan-400 font-bold font-mono">{rubricScores.clarityAndPacing} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={rubricScores.clarityAndPacing}
                    onChange={(e) => setRubricScores({ ...rubricScores, clarityAndPacing: Number(e.target.value) })}
                    className="w-full accent-[#FACC15]"
                  />
                </div>

                <div className="space-y-1.5 bg-[#0B1E33] p-3.5 rounded-2xl border border-[#143657]">
                  <div className="flex justify-between text-xs font-semibold text-slate-200">
                    <span>3. Criatividade Audiovisual & IA</span>
                    <span className="text-cyan-400 font-bold font-mono">{rubricScores.creativityAndStyle} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={rubricScores.creativityAndStyle}
                    onChange={(e) => setRubricScores({ ...rubricScores, creativityAndStyle: Number(e.target.value) })}
                    className="w-full accent-[#FACC15]"
                  />
                </div>

                <div className="space-y-1.5 bg-[#0B1E33] p-3.5 rounded-2xl border border-[#143657]">
                  <div className="flex justify-between text-xs font-semibold text-slate-200">
                    <span>4. Participação no Debate em Aula</span>
                    <span className="text-cyan-400 font-bold font-mono">{rubricScores.debateParticipation} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={rubricScores.debateParticipation}
                    onChange={(e) => setRubricScores({ ...rubricScores, debateParticipation: Number(e.target.value) })}
                    className="w-full accent-[#FACC15]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-8">
          {/* Learning Objectives */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
              <span className="text-amber-400">🎯</span>
              <span>Objetivos de Aprendizagem</span>
            </h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {currentActivity.learningObjectives.map((obj, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#07172A] border border-[#143657] text-xs font-medium text-slate-200 leading-snug flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Teacher Implementation Steps */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                <span className="text-amber-400">🏫</span>
                <span>Como o Professor Conduz a Atividade (Etapas)</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">Clique para registar progresso</span>
            </div>

            <div className="space-y-3">
              {currentActivity.teacherImplementationSteps.map((step) => {
                const isDone = completedSteps[currentActivity.id]?.[step.step] || false;

                return (
                  <div
                    key={step.step}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      isDone
                        ? 'bg-emerald-950/30 border-emerald-700/60'
                        : 'bg-[#07172A] border-[#143657] hover:border-cyan-500/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        <button
                          onClick={() => toggleStep(currentActivity.id, step.step)}
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 cursor-pointer transition-colors ${
                            isDone
                              ? 'bg-emerald-500 text-[#071526]'
                              : 'border-2 border-slate-500 hover:border-cyan-400 text-transparent'
                          }`}
                          title={isDone ? 'Marcar como não concluído' : 'Marcar etapa como concluída'}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 font-serif-display">
                            <span>Etapa {step.step} — {step.title}</span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                            {step.description}
                          </p>

                          {step.subitems && step.subitems.length > 0 && (
                            <ul className="mt-2.5 space-y-1.5 text-xs text-slate-400 pl-2">
                              {step.subitems.map((sub, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-1.5">
                                  <span className="text-cyan-400 font-bold">•</span>
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {step.recommendedTools && (
                        <div className="shrink-0 text-right">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">
                            Ferramentas
                          </span>
                          <div className="flex flex-wrap justify-end gap-1">
                            {step.recommendedTools.map((tool, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#0B1E33] text-cyan-300 border border-[#143657]">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deliverables & Evaluation Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            {/* Student Deliverables */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#07172A] border border-[#143657] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span>O que o Aluno Entrega</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {currentActivity.studentDeliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#0B1E33] p-3 rounded-xl border border-[#143657] font-medium">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Evaluation Criteria */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#07172A] border border-[#143657] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-mono">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Avaliação das Aprendizagens</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {currentActivity.evaluationCriteria.map((crit, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#0B1E33] p-3 rounded-xl border border-[#143657] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
