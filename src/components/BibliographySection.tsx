import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Printer, 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle,
  Sparkle
} from 'lucide-react';
import { BIBLIOGRAPHY, WHAT_WE_DO_NOT_KNOW, BibliographyEntry } from '../data/presentationData';

interface BibliographySectionProps {
  onPrintGuide: () => void;
}

export const BibliographySection: React.FC<BibliographySectionProps> = ({ onPrintGuide }) => {
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
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C05638] uppercase font-mono mb-1">
            <Sparkle className="w-3.5 h-3.5 text-[#C05638]" />
            <span>Fundamentação Científica & Rigor Académico</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight font-serif-display">
            Bibliografia de Referência & Limites da Ciência
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Fontes científicas em formato APA (7.ª edição) que sustentam as correções pedagógicas desta formação, 
            diretrizes da UNESCO e OCDE, legislação europeia (RGPD e AI Act) e declaração de incertezas não resolvidas.
          </p>
        </div>

        <button
          onClick={onPrintGuide}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#181513] hover:bg-stone-800 text-white text-xs font-bold shadow-sm transition-all cursor-pointer shrink-0"
        >
          <Printer className="w-4 h-4 text-amber-300" />
          <span>Imprimir / Guardar em PDF</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 border-b border-stone-200">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'border-[#C05638] text-[#C05638] bg-[#C05638]/5'
                : 'border-transparent text-stone-600 hover:text-stone-900'
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
            className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#C05638] uppercase tracking-wider font-mono">
                  {bib.category}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-100 text-stone-600 border border-stone-200">
                  {bib.author} ({bib.year})
                </span>
              </div>

              {/* APA 7th Formal Citation */}
              <div className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug font-sans pl-3 border-l-2 border-[#C05638]">
                {bib.citation}
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/60 text-xs text-stone-700 leading-relaxed space-y-1">
                <div className="font-bold text-stone-900 flex items-center gap-1.5 font-mono text-[11px] uppercase">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C05638] shrink-0" />
                  <span>Relevância Pedagógica:</span>
                </div>
                <p>{bib.relevanceToEducation}</p>
              </div>

              {bib.criticalAnalysis && (
                <div className="p-3 rounded-xl bg-[#F4F9F6] border border-[#D5EADF] text-[11px] text-[#1E523A] leading-relaxed">
                  <strong>Análise do Especialista:</strong> {bib.criticalAnalysis}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SECTION: O QUE NÃO SABEMOS (Mandatory Epistemic Limits) */}
      <section className="rounded-3xl border border-amber-300/80 bg-gradient-to-br from-[#FFF9F2] via-white to-[#FFF9F2] p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="flex items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider font-mono">
                Honestidade Intelectual & Transparência Epistémica
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-display mt-0.5">
                O Que a Ciência e o Mercado Não Sabem em 2026
              </h2>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-900 bg-amber-200/60 px-3.5 py-1 rounded-xl border border-amber-300 hidden sm:inline-block font-mono">
            Incertezas da Investigação
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-4xl">
          Como especialista em educação, o maior serviço que se pode prestar aos professores não é fingir que a tecnologia tem respostas mágicas, 
          mas sim <strong>declarar abertamente aquilo que a investigação e o mercado ainda não conseguem garantir</strong>:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {WHAT_WE_DO_NOT_KNOW.map((item) => (
            <div 
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-amber-200/90 shadow-2xs space-y-2"
            >
              <h3 className="text-xs sm:text-sm font-bold text-stone-900 flex items-center gap-1.5 font-serif-display">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 border-t border-amber-100 text-[11px] text-amber-950 font-medium">
                <strong>Impacto na Aula:</strong> {item.pedagogicalImpact}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teacher Action Plan Checklist */}
      <section className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#181513] text-white flex items-center justify-center">
              <FileText className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-serif-display">
                Checklist Pedagógica: Conceber, Mediar e Avaliar Vídeos com IA
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Guia orientador de boas práticas para antes, durante e após a produção audiovisual em contexto escolar
              </p>
            </div>
          </div>

          <button
            onClick={onPrintGuide}
            className="px-4 py-2 rounded-xl bg-[#C05638] hover:bg-[#A8492E] text-white text-xs font-bold cursor-pointer shadow-xs inline-flex items-center gap-1.5 shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Versão para Impressão</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-2.5">
            <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px] font-mono text-[#C05638]">
              1. Antes da Aula (Conceção)
            </span>
            <ul className="space-y-2 text-stone-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Definir objetivo curricular claro (Bloom 2001: nível 'Criar')</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Escolher ferramenta adequada à faixa etária (Perchance para menores sem login)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Testar previamente o prompt e verificar se não ocorrem alucinações científicas</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-2.5">
            <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px] font-mono text-[#1E523A]">
              2. Durante a Aula (Mediação)
            </span>
            <ul className="space-y-2 text-stone-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Apresentar a IA como copiloto e parceira de ideação, nunca como autor final</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Ensinar literacia de dados: verificar fontes e questionar enviesamentos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Proibir a introdução de fotos, nomes ou vozes reais de alunos nos geradores</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-2.5">
            <span className="font-bold text-stone-900 block uppercase tracking-wider text-[11px] font-mono text-amber-700">
              3. Após a Aula (Avaliação)
            </span>
            <ul className="space-y-2 text-stone-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Partilha e visualização crítica coletiva dos trabalhos da turma</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Debate sobre clareza didática, precisão dos conceitos e respeito pelo DUA</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Aplicação da rubrica qualitativa de 4 critérios (0 a 20 valores)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Authorship & Course Credits */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#181513] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-stone-800 shadow-xl">
        <div>
          <span className="text-[11px] text-amber-400 font-semibold tracking-wide uppercase font-mono">
            Autoria e Formação
          </span>
          <h2 className="text-base sm:text-lg font-bold text-white mt-0.5 font-serif-display">
            2026 | Carla Oliveira · Formadora de Professores
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            Plataforma pedagógica aberta concebida para publicação no GitHub e apoio contínuo à comunidade docente.
          </p>
        </div>

        <button
          onClick={onPrintGuide}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-colors cursor-pointer shrink-0"
        >
          <Printer className="w-4 h-4 text-amber-300" />
          <span>Ficha de Formação em PDF</span>
        </button>
      </section>
    </div>
  );
};
