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
  Sparkle,
  ShieldAlert,
  HelpCircle,
  Sparkles,
  Layers,
  FileQuestion,
  UserCheck
} from 'lucide-react';
import { CLASSROOM_ACTIVITIES } from '../data/presentationData';
import { calculateWeightedRubricScore } from '../utils/pedagogyLogic';

export const ActivitiesSection: React.FC = () => {
  const [selectedActivityId, setSelectedActivityId] = useState<string>('entrevista-ia');
  const [completedSteps, setCompletedSteps] = useState<Record<string, Record<number, boolean>>>({});
  
  const currentActivity = CLASSROOM_ACTIVITIES.find(a => a.id === selectedActivityId) || CLASSROOM_ACTIVITIES[0];

  // Dynamic rubric scores per criterion id (0 to 5 scale)
  const [rubricScores, setRubricScores] = useState<Record<string, Record<string, number>>>({
    'entrevista-ia': { historico: 4, linguagem: 4, sentido_critico: 4, cooperacao: 4 },
    'micro-documentario': { ciencia: 4, sintese: 4, montagem: 4, acessibilidade: 4 },
    'noticiario-critico': { fidelidade_fonte: 4, verificacao_factos: 4, comunicacao: 4, transparencia_ia: 4 },
    'quadros-animados': { profundidade: 4, respeito_plastico: 4, diccao: 4, autonomia: 4 },
  });

  const [showRubricCalculator, setShowRubricCalculator] = useState(false);

  const iconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Users,
    HeartPulse,
    Newspaper,
    Boxes
  };

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

  const currentScores = rubricScores[currentActivity.id] || {};
  const calculatedGrade = calculateWeightedRubricScore(currentScores, currentActivity.evaluationRubric);

  const handleScoreChange = (criterionId: string, value: number) => {
    setRubricScores(prev => ({
      ...prev,
      [currentActivity.id]: {
        ...prev[currentActivity.id],
        [criterionId]: value
      }
    }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#0966C2] uppercase font-mono mb-1">
          <Sparkle className="w-3.5 h-3.5 text-[#0966C2]" />
          <span>Planificação Didática · Guiões Pedagógicos para a Aula</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#08203E] tracking-tight font-serif-display">
          Planificação de Atividades em Sala de Aula
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
          Quatro guiões pedagógicos estruturados para colocar os alunos a criar em equipa com rigor factual e literacia digital. 
          Inclui as 3 modalidades de utilização de IA do EduQA, verificação prévia, alternativas de DUA (Decreto-Lei n.º 54/2018) e simulador de avaliação ponderada (0 a 20 valores).
        </p>
      </div>

      {/* Activity Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {CLASSROOM_ACTIVITIES.map((act, idx) => {
          const Icon = iconsMap[act.icon] || Users;
          const isSelected = act.id === selectedActivityId;

          return (
            <button
              key={act.id}
              onClick={() => setSelectedActivityId(act.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'bg-[#0966C2] text-white border-[#0966C2] shadow-sm'
                  : 'bg-white hover:bg-slate-50 border-[#DCE8F6] text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-[#EAF3FD] text-[#0966C2]'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                  isSelected ? 'bg-white/20 text-amber-200' : 'bg-slate-100 text-slate-600'
                }`}>
                  Guião 0{idx + 1}
                </span>
              </div>

              <div>
                <div className={`text-xs sm:text-sm leading-snug line-clamp-1 font-serif-display ${isSelected ? 'font-bold text-white' : 'font-semibold text-[#08203E]'}`}>
                  {act.title}
                </div>
                <div className={`text-[11px] mt-1 ${isSelected ? 'text-white/80' : 'text-slate-500'}`}>
                  {act.targetCycle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Activity Detail Card */}
      <section className="bg-white rounded-3xl border border-[#DCE8F6] shadow-xs overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#EBF5FE] via-[#F4F9FE] to-[#E3F1FD] border-b border-[#CDE3F7] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D6EAFE] border border-[#BBDCFB] text-[#0966C2] flex items-center justify-center shrink-0">
              <CurrentIcon className="w-6 h-6 text-[#0966C2]" />
            </div>
            <div>
              <span className="text-[11px] text-[#0966C2] font-semibold tracking-wider uppercase font-mono">
                {currentActivity.discipline} · {currentActivity.estimatedDuration}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#08203E] mt-0.5 font-serif-display">
                {currentActivity.title}
              </h2>
            </div>
          </div>

          <button
            onClick={() => setShowRubricCalculator(!showRubricCalculator)}
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-[#0966C2] text-xs font-bold border border-[#BBDCFB] shadow-2xs inline-flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{showRubricCalculator ? 'Ocultar Simulador' : 'Simulador de Rubrica (0-20)'}</span>
          </button>
        </div>

        {/* Dynamic Weighted Rubric Simulator Drawer */}
        {showRubricCalculator && (
          <div className="p-6 sm:p-8 bg-[#F8FAFD] border-b border-[#DCE8F6] animate-in fade-in duration-200">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-[#08203E] font-serif-display">
                    Simulador de Avaliação Ponderada por Rubrica
                  </h3>
                  <p className="text-xs text-slate-600">
                    Atribua uma classificação de 0 a 5 a cada critério desta atividade para calcular o resultado ponderado de 0 a 20 valores.
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-2xl font-black text-[#0966C2] font-mono">
                    {calculatedGrade.total} / 20 valores
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    ({calculatedGrade.percentage}%)
                  </span>
                </div>
              </div>

              {/* Sliders for each activity criterion */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {currentActivity.evaluationRubric.map((item) => {
                  const score = currentScores[item.id] ?? 4;
                  return (
                    <div key={item.id} className="space-y-1.5 bg-white p-4 rounded-2xl border border-[#DCE8F6] shadow-2xs">
                      <div className="flex justify-between items-start text-xs font-semibold text-[#08203E]">
                        <div>
                          <span>{item.criterion}</span>
                          <span className="ml-1 text-[11px] font-mono text-[#0966C2]">({item.weight}%)</span>
                        </div>
                        <span className="text-[#0966C2] font-bold font-mono shrink-0 ml-2">{score} / 5</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="1"
                        value={score}
                        onChange={(e) => handleScoreChange(item.id, Number(e.target.value))}
                        className="w-full accent-[#0966C2]"
                      />
                      <p className="text-[11px] text-slate-500 leading-tight">
                        <strong>Evidência:</strong> {item.evidence}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-slate-500 italic bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
                Esta grelha é um instrumento de apoio à avaliação e ao feedback. A interpretação do resultado e a classificação final são da responsabilidade do professor, de acordo com os critérios definidos para a disciplina e para a atividade.
              </p>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-8">
          {/* ITEM 3.3: VERIFICAÇÃO PRÉVIA DO PROFESSOR (EduQA 2026/2027) */}
          <div className="p-5 rounded-2xl bg-[#EAF3FD] border border-[#CEE2F7] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0B4B82]">
              <FileQuestion className="w-4 h-4 text-[#0966C2]" />
              <span>Antes de utilizar IA, o professor deve verificar:</span>
            </div>
            <ol className="grid sm:grid-cols-2 gap-2 text-xs text-[#132B47] list-decimal list-inside leading-relaxed font-medium">
              {currentActivity.teacherVerificationChecklist.map((check, i) => (
                <li key={i} className="bg-white/80 p-2.5 rounded-xl border border-[#D5E5F7]">
                  <span>{check}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* ITEM 10.2 & 10.3: QUEM UTILIZA A FERRAMENTA & MODELO PROFESSOR-OPERADOR */}
          <div className="p-5 rounded-2xl bg-[#FEF8E7] border border-[#FDE5B5] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#874A07]">
              <UserCheck className="w-4 h-4 text-[#874A07]" />
              <span>Quem utiliza a ferramenta? (Orientações por Ciclo de Ensino)</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-xs text-[#2A1E0E] leading-relaxed">
              <div className="bg-white/85 p-3 rounded-xl border border-amber-200">
                <strong>1.º Ciclo:</strong> {currentActivity.whoOperatesTool.firstCycle}
              </div>
              <div className="bg-white/85 p-3 rounded-xl border border-amber-200">
                <strong>2.º Ciclo:</strong> {currentActivity.whoOperatesTool.secondCycle}
              </div>
              <div className="bg-white/85 p-3 rounded-xl border border-amber-200">
                <strong>3.º Ciclo e Secundário:</strong> {currentActivity.whoOperatesTool.thirdAndSecondary}
              </div>
            </div>
            <p className="text-[11px] text-[#5C3306] italic pt-1 border-t border-amber-200/80">
              <strong>Modelo Professor-Operador:</strong> O professor pode preparar previamente um pequeno conjunto de clipes ou recursos visuais para a turma. Durante a aula, os alunos analisam, selecionam, comparam, guionizam, montam e justificam as suas escolhas, sem precisarem de criar contas individuais ou aguardar por várias gerações em simultâneo.
            </p>
          </div>

          {/* Objectives */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#08203E] flex items-center gap-1.5 font-mono">
              <span className="text-[#0966C2]">🎯</span>
              <span>Objetivos de Aprendizagem</span>
            </h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {currentActivity.learningObjectives.map((obj, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] text-xs font-medium text-slate-800 leading-snug flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0966C2] shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps with EduQA Modalities (Sem IA, IA de apoio, IA integrada) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#08203E] flex items-center gap-1.5 font-mono">
                <span className="text-[#0966C2]">🏫</span>
                <span>Etapas de Condução com Modalidade de IA (EduQA)</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">Clique para registar progresso</span>
            </div>

            <div className="space-y-3">
              {currentActivity.teacherImplementationSteps.map((step) => {
                const isDone = completedSteps[currentActivity.id]?.[step.step] || false;

                const aiBadgeClasses = 
                  step.aiUseMode === 'Sem IA'
                    ? 'bg-slate-100 text-slate-700 border-slate-300'
                    : step.aiUseMode === 'IA de apoio'
                    ? 'bg-[#EAF3FD] text-[#0966C2] border-[#CDE3F7]'
                    : 'bg-[#FEF8E7] text-[#874A07] border-[#FDE5B5]';

                return (
                  <div
                    key={step.step}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      isDone
                        ? 'bg-emerald-50/60 border-emerald-200'
                        : 'bg-white border-[#DCE8F6] hover:border-[#0966C2]/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        <button
                          onClick={() => toggleStep(currentActivity.id, step.step)}
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 cursor-pointer transition-colors ${
                            isDone
                              ? 'bg-emerald-600 text-white'
                              : 'border-2 border-slate-300 hover:border-[#0966C2] text-transparent'
                          }`}
                          title={isDone ? 'Marcar como não concluído' : 'Marcar etapa como concluída'}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-[#08203E] font-serif-display">
                              Etapa {step.step} — {step.title}
                            </span>
                            <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${aiBadgeClasses}`}>
                              {step.aiUseMode}
                            </span>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {step.description}
                          </p>

                          {step.subitems && step.subitems.length > 0 && (
                            <ul className="mt-2 space-y-1 text-xs text-slate-600 pl-2">
                              {step.subitems.map((sub, sIdx) => (
                                <li key={sIdx} className="flex items-start gap-1.5">
                                  <span className="text-[#0966C2] font-bold">•</span>
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {step.recommendedTools && (
                        <div className="shrink-0 text-right hidden sm:block">
                          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">
                            Recursos
                          </span>
                          <div className="flex flex-wrap justify-end gap-1">
                            {step.recommendedTools.map((tool, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#EAF3FD] text-[#085294] border border-[#CDE3F7]">
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

          {/* ITEM 11.5: AVALIAÇÃO DO PROCESSO & ENTREGÁVEIS */}
          <div className="grid md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#08203E] flex items-center gap-1.5 font-mono">
                <FileCheck className="w-4 h-4 text-[#0966C2]" />
                <span>O que o Aluno Entrega</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {currentActivity.studentDeliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#DCE8F6] font-medium">
                    <span className="text-[#0966C2] font-bold">•</span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFD] border border-[#DCE8F6] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#08203E] flex items-center gap-1.5 font-mono">
                <Award className="w-4 h-4 text-[#0966C2]" />
                <span>Avaliação do Processo & Metacognição</span>
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="bg-white p-3 rounded-xl border border-[#DCE8F6]">
                  <strong>Autoavaliação:</strong> {currentActivity.processEvaluation.selfAssessment}
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#DCE8F6]">
                  <strong>Coavaliação:</strong> {currentActivity.processEvaluation.peerAssessment}
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#DCE8F6]">
                  <strong>Evidência do processo:</strong> {currentActivity.processEvaluation.processEvidence}
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 12: DIFERENCIAÇÃO PEDAGÓGICA, ACESSIBILIDADE E ALTERNATIVAS (Dec.-Lei n.º 54/2018) */}
          <div className="p-6 rounded-2xl bg-white border border-[#DCE8F6] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#08203E]">
              <Layers className="w-4 h-4 text-[#0966C2]" />
              <span>Diferenciação pedagógica, acessibilidade e alternativas (DUA & Dec.-Lei n.º 54/2018)</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
              <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-slate-200 space-y-1">
                <strong className="text-[#08203E] block">Representação:</strong>
                <p>{currentActivity.udlAndDifferentiation.representation}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-slate-200 space-y-1">
                <strong className="text-[#08203E] block">Ação e Expressão:</strong>
                <p>{currentActivity.udlAndDifferentiation.actionAndExpression}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFD] border border-slate-200 space-y-1">
                <strong className="text-[#08203E] block">Envolvimento:</strong>
                <p>{currentActivity.udlAndDifferentiation.engagement}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#EAF3FD] border border-[#CEE2F7] space-y-1">
                <strong className="text-[#0B4B82] block">Alternativa Sem Dispositivo ou Sem IA:</strong>
                <p>{currentActivity.udlAndDifferentiation.noTechAlternative}</p>
              </div>
            </div>
          </div>

          {/* ITEM 13 & 14: SALVAGUARDAS DE SEGURANÇA E FERRAMENTAS DA ESCOLA */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1.5 leading-relaxed">
            <div className="flex items-center gap-2 font-bold font-mono text-[11px] uppercase text-[#874A07]">
              <ShieldAlert className="w-4 h-4 text-[#874A07]" />
              <span>Direitos de Autor, Pessoas Reais e Infraestrutura Escolar</span>
            </div>
            <p>
              Não criar nem divulgar imagens, vídeos ou gravações de voz sintéticas que representem alunos, professores ou outras pessoas reais sem autorização e validação institucional. Antes de criar contas externas, verificar quais as ferramentas e licenças que o agrupamento já disponibiliza (Microsoft 365, Clipchamp, Google Workspace ou Teams). Em caso de incidente, seguir os procedimentos de cidadania digital e segurança da escola.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
