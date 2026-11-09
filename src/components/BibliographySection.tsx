import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle,
  Sparkle
} from 'lucide-react';
import { BIBLIOGRAPHY, WHAT_WE_DO_NOT_KNOW } from '../data/presentationData';

export const BibliographySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Referências' },
    { id: 'Teoria Cognitiva & Multimédia', label: 'Teoria Cognitiva & Multimédia' },
    { id: 'Políticas & Ética de IA', label: 'Políticas & Regulamentação de IA' },
    { id: 'Taxonomia de Aprendizagem', label: 'Taxonomia & Didática' },
    { id: 'Documentação Técnica Oficial', label: 'Documentação Técnica Oficial' }
  ];

  const filteredBibliography = BIBLIOGRAPHY.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-cyan-400 uppercase font-mono mb-1">
            <Sparkle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fundamentação Científica & Rigor Académico</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-serif-display">
            Bibliografia de Referência & Limites da Ciência
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Fontes científicas em formato APA (7.ª edição) que sustentam as orientações pedagógicas desta formação, 
            diretrizes da UNESCO e OCDE, legislação europeia (RGPD e AI Act) e declaração de incertezas não resolvidas.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 border-b border-[#143657]">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#FACC15] text-[#071526] font-bold shadow-md shadow-amber-400/20'
                : 'bg-[#07172A] text-slate-300 hover:text-white border border-[#143657] hover:border-cyan-500/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Bibliography Cards (APA 7th Format) */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredBibliography.map((bib, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-[#0B1E33] border border-[#143657] shadow-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider font-mono">
                  {bib.category}
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#07172A] text-amber-300 border border-[#143657]">
                  {bib.author} ({bib.year})
                </span>
              </div>

              {/* APA 7th Formal Citation */}
              <div className="text-xs sm:text-sm font-semibold text-white leading-snug font-sans pl-3 border-l-2 border-cyan-400">
                {bib.citation}
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="p-3.5 rounded-2xl bg-[#07172A] border border-[#143657] text-xs text-slate-200 leading-relaxed space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5 font-mono text-[11px] uppercase">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Relevância Pedagógica:</span>
                </div>
                <p className="text-slate-300">{bib.relevanceToEducation}</p>
              </div>

              {bib.criticalAnalysis && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-[11px] text-emerald-300 leading-relaxed">
                  <strong>Análise do Especialista:</strong> {bib.criticalAnalysis}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SECTION: O QUE NÃO SABEMOS (Mandatory Epistemic Limits) */}
      <section className="rounded-3xl border border-amber-500/40 bg-gradient-to-br from-[#0B1E33] via-[#07172A] to-[#0B1E33] p-6 sm:p-10 space-y-6 shadow-xl">
        <div className="flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-400 text-[#071526] flex items-center justify-center font-bold shrink-0 shadow-md">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider font-mono">
                Honestidade Intelectual & Transparência Epistémica
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-serif-display mt-0.5">
                O Que a Ciência e o Mercado Não Sabem em 2026
              </h2>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-3.5 py-1 rounded-xl border border-amber-700/60 hidden sm:inline-block font-mono">
            Incertezas da Investigação
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
          Como especialista em educação, o maior serviço prestado aos professores não é fingir certezas absolutas, 
          mas sim <strong>declarar abertamente aquilo que a investigação e o mercado ainda não conseguem garantir</strong>:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {WHAT_WE_DO_NOT_KNOW.map((item) => (
            <div 
              key={item.id}
              className="p-5 rounded-2xl bg-[#07172A] border border-[#143657] hover:border-amber-400/40 transition-all space-y-2"
            >
              <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 font-serif-display">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 border-t border-[#143657] text-[11px] text-amber-300 font-medium">
                <strong>Impacto na Aula:</strong> {item.pedagogicalImpact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teacher Action Plan Checklist */}
      <section className="p-6 sm:p-10 rounded-3xl bg-[#0B1E33] border border-[#143657] shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#07172A] border border-[#143657] text-cyan-400 flex items-center justify-center">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-serif-display">
                Checklist Pedagógica: Conceber, Mediar e Avaliar Vídeos com IA
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Guia orientador de boas práticas para antes, durante e após a produção audiovisual em contexto escolar
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-[#07172A] border border-[#143657] space-y-2.5">
            <span className="font-bold block uppercase tracking-wider text-[11px] font-mono text-cyan-400">
              1. Antes da Aula (Conceção)
            </span>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Definir objetivo curricular claro (Bloom: nível 'Criar')</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Escolher ferramenta adequada à faixa etária (Perchance para menores sem login)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Testar previamente o prompt e verificar se não ocorrem alucinações científicas</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#07172A] border border-[#143657] space-y-2.5">
            <span className="font-bold block uppercase tracking-wider text-[11px] font-mono text-emerald-400">
              2. Durante a Aula (Mediação)
            </span>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Apresentar a IA como copiloto e parceira de ideação, nunca como autor final</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ensinar literacia de dados: verificar fontes e questionar enviesamentos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Proibir a introdução de fotos, nomes ou vozes reais de alunos nos geradores</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#07172A] border border-[#143657] space-y-2.5">
            <span className="font-bold block uppercase tracking-wider text-[11px] font-mono text-amber-400">
              3. Após a Aula (Avaliação)
            </span>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Partilha e visualização crítica coletiva dos trabalhos da turma</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Debate sobre clareza didática, precisão dos conceitos e respeito pelo DUA</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Aplicação da rubrica qualitativa de 4 critérios (0 a 20 valores)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authorship & Course Credits */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#0B1E33] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#143657] shadow-xl">
        <div>
          <span className="text-[11px] text-amber-400 font-semibold tracking-wide uppercase font-mono">
            Autoria e Formação
          </span>
          <h2 className="text-base sm:text-lg font-bold text-white mt-0.5 font-serif-display">
            2026 | Carla Oliveira · Formadora de Professores
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Plataforma pedagógica aberta concebida para apoio contínuo à comunidade docente no ensino básico e secundário.
          </p>
        </div>
      </section>
    </div>
  );
};
